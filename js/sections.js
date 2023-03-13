var sections = [
    {
       "competency":"Computational Foundations of Data Science",
       "short": "comp",
       "definition":"Designs and writes software that collects, transforms, manages, analyzes, and/or models data.",
       "vector": [4,6,5,4],
       "questions": [
           "Can you identify appropriate uses of several different data structures (for example, arrays, hash maps, linked lists)?",
           "Can you format and store information into a structured datastore such as a database or spreadsheet?",
           "Can you write a simple program in a programming language (for example, C, Matlab, Perl, Python, R)?",
           "Can you break up a program into multiple modules or files?",
           "Can you estimate the upper bound of the run-time performance of an algorithm?",
           "Can you design a relational database?",
           "Can you identify opportunities to use parallel computing or distributed storage?",
           "Can you design a data subsystem (for example, for retrieval, validation, transformation, or storage)?",
           "Can you write code that is accessible and usable by others (for example, by sharing in a repository or publishing a package or library)?",
           "Can you determine whether available data are suited to various machine learning algorithms?",
           "Can you determine whether an algorithm can be designed that meets a given set of performance requirements?",
           "Can you restructure tables within a relational database to meet query performance requirements?",
           "Can you select the most appropriate architecture to meet a set of performance requirements?",
           "Can you match machine learning algorithms to computing resources that are appropriate for project needs?",
           "Can you design and guide development of a software product or system (for example, using UML or similar disciplines)?",
           "Are you able to drive the development of computational data science theory at a level of quality required by peer reviewed journals?",
           "Given highly complex problems (for example, process simulation and optimization under multiple constraints), can you formulate computational solutions or guide experts toward their solution?",
           "Can you guide decisions about architectures and methods for major data systems (for example, custom systems to support specialized analyses)?",
           "Are you able and qualified to provide authoritative guidance for applying the computational foundations of data science that others would consider definitive and reliable?",
        ]
    },
    {
       "competency":"Cross-Disciplinary Data Science Collaboration",
       "short": "collab",
       "definition":"Partners with domain experts to acquire and apply needed domain knowledge, approximate mission problems with data science questions, and translate data science solutions into mission solutions.",
       "vector": [2,4,3,4],
       "questions": [
           "Can you give an overview of the activities and expertise needed for a well-defined data science project?",
           "Could you raise basic clarifying questions with a domain expert to identify assumptions and background knowledge concerning an assigned task within a well-defined project and team?",
           "With some guidance or support, can you translate a combination of data sources and mission problems (stated in terms of real-world entities and effects, not in terms of data) into clear, well-posed questions that can be answered through data science?",
           "Based on initial discussions, can you formulate incisive clarifying questions to improve the application of domain knowledge to a problem?",
           "Can you propose alternative problem statements to improve the success of data science projects?",
           "Are you able to communicate with stakeholders to clarify data science project goals, procedures, and milestones, and to identify and assess data science project options?",
           "With no guidance or support, can you translate a combination of data sources and mission problems (stated in terms of real-world entities and effects, not in terms of data) into clear, well posed questions that can be answered through data science?",
           "Can you identify and explain the limitations of data and models to stakeholders outside the field of data science?",
           "Given a mission stakeholder's initial description of their data science projects, can you revise the problem statements so they align with the stakeholder's goals and identify and articulate the data science skills required to carry out the projects?",
           "Are you able and qualified to provide authoritative guidance on the assembly and improvement of data science projects and project teams?",
           "Are you able and qualified to provide authoritative guidance in the art of asking effective questions and translating domain problems into approximating data science questions?",
           "Are you able and qualified to provide authoritative guidance on communicating data and model limitations?",
           "Can you leverage your expertise to foster cross-agency collaboration and build cross-disciplinary collaboration skills in others?",
        ]
    },
    {
       "competency":"Data Engineering for Data Science",
       "short": "data",
       "definition":"Moves, loads, and handles data of varying quality and structure to achieve project outcomes. Applies general data engineering practices, processes, and platforms to field solutions in a defensible, repeatable, and compliant fashion.",
       "vector": [3,3,3,3], //assumed
       "questions": [
           "Can you access your organization’s data platforms using database queries, interfaces, or file handling (for example, SQL, APIs, scripting)?",
           "Can you use data platforms with supervision to gather, clean, and handle datasets for small projects (less than one thousand records)?",
           "Can you apply pre-established policies and procedures to use data platforms compliantly?",
           "Can you plan the steps needed to take a project of medium size (less than one million records) through the full data engineering life cycle?",
           "Can you process, clean, and gather data for projects of medium size (less than one million records) or duration (less than six months) in both team and individual settings?",
           "Can you obtain information about a pre-existing data engineering pipeline to identify and solve issues that would jeopardize a data science product or service?",
           "Can you plan the steps needed to take a project through the full data engineering life cycle in complex, novel, and/or large-scale situations?",
           "Can you design and direct the implementation of engineering solutions to meet data science project requirements with no supervision?",
           "Can you create data programmatic interfaces, data management practices, and processing solutions for others to use?",
           "Can you plan and guide the steps needed to take a project through the data engineering life cycle to achieve defensible project outcomes against unstructured, heterogeneous, or complex datasets (for example, image, voice, video)?",
           "Are you able and qualified to make authoritative decisions to establish investments and standards for organizational data engineering platforms in order to regularize defensible project outcomes?",
           "Are you able and qualified to provide authoritative guidance regarding the effective implementation of data engineering for data science?",
        ]
    },
    {
       "competency":"Data Science/Artificial Intelligence Governance and Ethics",
       "short": "ethics",
       "definition":"Guides the successful application of data science and artificial intelligence to mission, while integrating ethical considerations and mitigating legal, privacy, security, and mission risks throughout the project life cycle.",
       "vector": [3,3,3,3],
       "questions": [
           "Can you locate documentation of Intelligence Community (IC) principles of data science/artificial intelligence governance and ethics?",
           "Can you locate agency-specific guidance on data science governance processes and policies?",
           "Can you identify the offices with roles for quality assurance and ethics within your agency?",
           "Can you identify the relevant legal authorities for sharing data, models, model output, and other data science and/or artificial intelligence products?",
           "Can you apply relevant authorities for sharing data, models, model output, and other data science and/or artificial intelligence products?",
           "Can you determine whether model inputs, output, or components comply with data science/artificial intelligence ethical constraints and considerations?",
           "Can you lead the creation, development, and documentation of implementation guidance, processes, and best practices for data science and/or artificial intelligence components that minimize risks and account for ethical constraints and considerations?",
           "Can you effectively advocate for modifications to existing governance principles and frameworks in response to identified gaps, shifts in technologies, or mission after-actions?",
           "Can you provide instruction to others regarding laws, policies, processes, and best practices that impact data science/artificial intelligence products?",
           "Can you write comprehensive implementation guidance for the operational use of models for novel or ambiguous situations, including associated risks and ethical implications?",
           "Are you able and qualified to drive the broad adoption of data science/artificial intelligence guidance across your agency or across multiple organizations?",
           "Are you able and qualified to provide authoritative guidance for governance attributes (such as classification, retention, and authorities) of training data, models, and model output?",
        ]
    },
    {
       "competency":"Mathematical Foundations of Data Science",
       "short": "maths",
       "definition":"Applies knowledge and problem-solving ability in mathematical underpinnings of data science, including linear algebra, probability theory, and optimization.",
       "vector": [4,5,4,3],
       "questions": [
           "Can you integrate and differentiate a variety of standard functions?",
           "Can you compute the rank of a matrix?",
           "Can you define the conditional probability of an event?",
           "Can you approximate a differentiable function with a polynomial?",
           "Can you solve linear equations of the form Ax = b where A is a non-singular matrix and x and b are vectors of appropriate size?",
           "In a multivariate problem, can you find all local extrema and determine whether any of them are global extrema?",
           "Given a continuous probability distribution, can you compute joint and conditional probabilities of multiple events and represent them as integrals with respect to a given density function?",
           "Can you run mathematical analyses using at least one relevant, widely available computational software system (for example, BLAS/LAPACK, Magma, Maple, Mathematica, MATLAB)?",
           "Can you construct an adjacency matrix from a visualization of a network graph?",
           "For a given finite-state Markov chain, can you determine the stationary distribution?",
           "Can you determine the condition number of a matrix?",
           "Can you find the shortest path between any two nodes in a graph?",
           "Can you translate a well-formulated, applied problem into an abstract problem, apply mathematics to solve the abstract problem, and translate the abstract solution into a real-world solution?",
           "Are you able to drive the development of mission-relevant mathematical theory at a level of quality required by peer reviewed journals?",
           "Can you both solve highly complex, previously unsolved mathematical problems and guide experts toward their solution?",
           "Are you able and qualified to provide authoritative guidance for applying the mathematical foundations of data science that others would consider definitive and reliable?",
        ]
    },
    {
       "competency":"Scientific Data Analysis",
       "short": "science",
       "definition":"Conducts and reports exploratory, confirmatory, and predictive data analyses.",
       "vector": [4,5,3,4],
       "questions": [
           "Can you build a spreadsheet or data frame from structured data, applying simple data set creation or data transformation techniques?",
           "Can you calculate basic descriptive and comparative statistics (for example, outlier detection, goodness of fit, simple linear regression)?",
           "Can you describe a study's design and model output to others?",
           "With some guidance or support, can you create common data visualizations (for example, bar charts, scatter plots)?",
           "Can you conduct multivariate statistical analyses (for example, analysis of variance [ANOVA], multivariate regression)?",
           "Can you conduct iterative exploratory data analysis (for example, conduct follow-on exploratory data analysis based on initial findings) guided only by data and domain knowledge?",
           "Can you identify when and how to apply different statistical analyses depending on type of variables (for example, continuous vs. ordinal vs. categorical variables)?",
           "Can you determine when and how to address missing data given the goals and constraints of the problem?",
           "Can you transform unstructured or qualitative data to support quantitative analyses?",
           "For specialized forms of data from a variety of disciplines, can you propose and apply appropriate data analytic methods  (for example, graphs, time series, spatial statistics, signal analysis)?",
           "Can you lead a team in analytic design, formulating questions and guiding the appropriate choice of methods throughout data science projects?",
           "Can you engineer features from unstructured data appropriate to project needs?",
           "Are you able to develop new data analytic approaches or applications at a level of quality required by peer reviewed journals?",
           "Can you teach junior colleagues core elements of scientific data analysis (for example, translating mission problems into scientific problems, generating and testing hypotheses, drawing conclusions from experimental or observational results)?",
           "Are you able to contribute to scientific data analysis best practices across your agency or across multiple organizations?",
           "Are you able and qualified to provide authoritative guidance for scientific data analysis that others would consider definitive and reliable?",
        ]
    },
    {
       "competency":"Statistical Foundations of Data Science",
       "short": "stats",
       "definition":"Applies principles of building and assessing statistical models.",
       "vector": [3,4,3,3],
       "questions": [
           "Can you apply common algorithmic solutions to statistical problems, such as estimation, prediction, hypothesis testing, or simulation?",
           "Can you identify one or more common statistical distributions?",
           "Can you formulate and solve a clearly defined statistical problem embedded in a real-world narrative description?",
           "Can you identify an appropriate statistical estimator and defend its use for a given set of optimization criteria?",
           "Can you conduct exploratory data analysis and other types of statistical analyses using at least one relevant widely available computational software system (for example, Python, R, SAS, SPSS)?",
           "Can you identify relevant established statistical methods and adapt and apply them appropriately to novel or complex circumstances?",
           "Can you describe differences between various foundational theories of probability (for example, Bayesian, frequentist)?",
           "Can you make a principled choice between alternative foundational theories of probability (for example, Bayesian, frequentist) appropriate to project needs?",
           "Can you choose between alternative advanced statistical methods based on underlying principles of inference, appropriate to project needs?",
           "Can you apply data analytic ideas and methods from related disciplines (for example, econometrics, operations research, physics, engineering)?",
           "Are you able to drive the development of statistical theory at a level of quality required by peer reviewed journals?",
           "Can you formulate statistical solutions to highly complex problems or guide experts toward their solution?",
           "Are you able and qualified to provide authoritative guidance for applying the statistical foundations of data science that others would consider definitive and reliable?"
        ]
    }
];