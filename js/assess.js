var total_questions = 0;

var start_time = undefined;

function renderQuestions(ele) {
    var index = 0;
    var html = "";
    sections.forEach( (section) => {
        html += (`<tr><th colspan=2 class='table-primary'>${section['competency']}</th></tr>`);
        html += (`<tr><th colspan=2 class='table-secondary' style='font-size: 8pt;'>${section['definition']}</th></tr>`);
        section['questions'].forEach( (q) => {
            html += "<tr>";
            // render radio buttons
            html += `<td style='white-space: nowrap;'>
            <label for='q_${index}_yes'>Yes
              <input type='radio' id='q_${index}_yes' name='q_${index}' value='1' />
            </label>
            <label for='q_${index}_no'>No
              <input type='radio' id='q_${index}_no' name='q_${index}' value='0' />
            </label>
            </td>`;
            // render question
            html += `<td id='q_${index}_td' onclick='toggle(${index});'>${q}</td>`;
            html += "</tr>";
            index += 1;
        });
    });
    ele.innerHTML = html;
    total_questions = index;
}

function toggle(index, form) {
    form = form || document.forms.answers;
    var cur = form["q_"+index].value;
    if(cur == "") {
      form["q_"+index].value = '1';
    } else if(cur == '1') {
      form["q_"+index].value = '0';
    } else if(cur == '0') {
      form["q_"+index].value = '1';
    }
    if( start_time == undefined ) {
      start_time = new Date();
    }
}

// all checked 83:////////////////f
// none checked 54:AAAAAAAAAAAAAAAAA

function main() {
    var ele = document.getElementById('questions');
    renderQuestions(ele);
    $("#instructions").dialog({
        title: "Instructions",
        autoOpen: true,
        width: 800,
        height: 800,
        model: true
    });
    $("#results").dialog({
        title: "Results",
        autoOpen: false,
        width: 800,
        height: 600,
        model: true
    });
    //$("#instructions").dialog("open");
}

var makeCRCTable = function(){
    var c;
    var crcTable = [];
    for(var n =0; n < 256; n++){
        c = n;
        for(var k =0; k < 8; k++){
            c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
        }
        crcTable[n] = c;
    }
    return crcTable;
}

var crc32 = function(str) {
    var crcTable = window.crcTable || (window.crcTable = makeCRCTable());
    var crc = 0 ^ (-1);

    for (var i = 0; i < str.length; i++ ) {
        crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
    }

    return (crc ^ (-1)) >>> 0;
};

var b64t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function binArrayToBase64(binarray) {
    var b64 = "";
    while (binarray.length >= 6) {
        var i = parseInt(binarray.slice(0,6).reverse().join(""),2);
        binarray = binarray.slice(6, 10000);
        b64 += b64t.substr(i,1);
    }
    if (binarray.length > 0) {
      var i = parseInt(binarray.reverse().join(""),2);
      b64 += b64t.substr(i,1);
    }
    return b64;
}

function base64ToBinArray(b64, maxlen) {
    var binarray = [];
    [...b64].forEach( (c) => {
        var n = b64t.indexOf(c);
        binarray = binarray.concat([...Array(6)].map((x,i)=>n>>i&1));
    });
    return binarray.slice(0, maxlen);
}

function generateCode(form) {
    var binarray = getAnswerBinaryArray(form);
    var b64 = binArrayToBase64(binarray);
    var crc = (crc32(b64) % 256).toString(16).toUpperCase();
    var answer_code = crc+":"+b64;
    $("#answer_code").html(answer_code);
    
    var comps = calculateCompetencies(form);
    Object.keys(comps).forEach( (c) => {
      $("#"+c+"_level").html(comps[c]);
    });
    navigator.clipboard.writeText(answer_code);
    var now = new Date();
    var minutes = Math.round((now - start_time)/60000);
    $("#time_took").html( minutes );
    $("#results").dialog( "open" );
}

function populateFromCode(form, code) {
    var crc = code.split(":")[0];
    var b64 = code.split(":")[1];
    var crc_check = (crc32(b64) % 256).toString(16).toUpperCase();
    if(crc != crc_check) {
        alert("CRC didn't match.  Code is invalid.");
        return;
    }
    
    var binarray = base64ToBinArray(b64, total_questions);
    setAnswers(form, binarray);
    start_time = new Date();
}

function setAnswers(form, binarray) {
    for (var index = 0; index < binarray.length; index++) {
        form["q_"+index].value = ""+binarray[index];
    }
}

function getAnswerBinaryArray(form) {
    var index = 0;
    var binarray = [];
    while(form["q_"+index]) {
        var ans = form["q_"+index].value;
        if(ans == "") {
          $("#q_"+index+"_td").css('border', 'thick solid red');
          alert("You must complete all items");
          return;
        }
        $("#q_"+index+"_td").css('border', '');
        
        binarray.push(parseInt(form["q_"+index].value));
        index += 1;
    }
    return binarray;
}

function calculateCompetencies(form) {
    var binarray = getAnswerBinaryArray(form);
    var comps = {};
    var lvl_names = ["No/Low Proficiency", "Basic", "Intermediate", "Advanced", "Master"];
    
    sections.forEach( (section) => {
        var lvl = 0;
        var vector = section["vector"];
        [0,1,2,3].forEach( (i) => {
            var answers = binarray.slice(0, vector[i]);
            binarray = binarray.slice(vector[i], 10000);
            // if they have >= 50%, then give credit for the previous level
            if( (answers.reduce( (x, b) => x += b )/answers.length) >= 0.5 ) {
                lvl = i;
            }
            // if all the answers were yes for this competency+level, then set the level obtained 
            // this essentially raises the level to the highest accomplished.
            if (answers.join("").indexOf("0") == -1) {
                lvl = i+1;
            }
        });
        comps[section["short"]] = (lvl)+" - "+lvl_names[lvl]+" Proficiency";
    });
    return comps;
}
