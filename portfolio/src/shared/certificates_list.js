export const CERTIFICATES =   [
        {
          id: 0,
          type: 'Specialization',
          name_specialization: 'Programming for Everybody (Getting Started with Python)',
          description_specialization: 'This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python.  The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this course. This course will cover Chapters 1-5 of the textbook “Python for Everybody”.  Once a student completes this course, they will be ready to take more advanced programming courses. This course covers Python 3.',
          certificate_path: 'assets/images/PythonForEverybody.png',
          rating: '4.8',
          courses: [
            {
              id: 0,
              name_course: 'Python Data Structures',
              description_course: 'This course will introduce the core data structures of the Python programming language. We will move past the basics of procedural programming and explore how we can use the Python built-in data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis. This course will cover Chapters 6-10 of the textbook “Python for Everybody”.  This course covers Python 3.',
            },
            {
              id: 1,
              name_course: 'Using Python to Access Web Data',
              description_course: 'This course will show how one can treat the Internet as a source of data.  We will scrape, parse, and read web data as well as access data using web APIs.  We will work with HTML, XML, and JSON data formats in Python.  This course will cover Chapters 11-13 of the textbook “Python for Everybody”. To succeed in this course, you should be familiar with the material covered in Chapters 1-10 of the textbook and the first two courses in this specialization.  These topics include variables and expressions, conditional execution (loops, branching, and try/except), functions, Python data structures (strings, lists, dictionaries, and tuples), and manipulating files.  This course covers Python 3.',
            },
            {
              id: 2,
              name_course: 'Using Databases with Python',
              description_course: 'This course will introduce students to the basics of the Structured Query Language (SQL) as well as basic database design for storing data as part of a multi-step data gathering, analysis, and processing effort.  The course will use SQLite3 as its database.  We will also build web crawlers and multi-step data gathering and visualization processes.  We will use the D3.js library to do basic data visualization.  This course will cover Chapters 14-15 of the book “Python for Everybody”. To succeed in this course, you should be familiar with the material covered in Chapters 1-13 of the textbook and the first three courses in this specialization. This course covers Python 3.',
            },
            {
              id: 3,
              name_course: 'Capstone: Retrieving, Processing, and Visualizing Data with Python',
              description_course: 'In the capstone, students will build a series of applications to retrieve, process and visualize data using Python.   The projects will involve all the elements of the specialization.  In the first part of the capstone, students will do some visualizations to become familiar with the technologies in use and then will pursue their own project to visualize some other data that they have or can find.  Chapters 15 and 16 from the book “Python for Everybody” will serve as the backbone for the capstone. This course covers Python 3.'
            }
          ]
      },
      {
        id: 1,
        type: 'Specialization',
        name_specialization: 'Applied Data Science with Python Specialization',
        description_specialization: 'The 5 courses in this University of Michigan specialization introduce learners to data science through the python programming language. This skills-based specialization is intended for learners who have a basic python or programming background, and want to apply statistical, machine learning, information visualization, text analysis, and social network analysis techniques through popular python toolkits such as pandas, matplotlib, scikit-learn, nltk, and networkx to gain insight into their data. Introduction to Data Science in Python (course 1), Applied Plotting, Charting & Data Representation in Python (course 2), and Applied Machine Learning in Python (course 3) should be taken in order and prior to any other course in the specialization.  After completing those, courses 4 and 5 can be taken in any order.  All 5 are required to earn a certificate.',
        certificate_path: 'assets/images/Applied Data Science.png',
        rating: '4.8',
        courses: [
          {
            id: 0,
            name_course: 'Introduction to Data Science in Python',
            description_course: 'This course will introduce the learner to the basics of the python programming environment, including fundamental python programming techniques such as lambdas, reading and manipulating csv files, and the numpy library. The course will introduce data manipulation and cleaning techniques using the popular python pandas data science library and introduce the abstraction of the Series and DataFrame as the central data structures for data analysis, along with tutorials on how to use functions such as groupby, merge, and pivot tables effectively. By the end of this course, students will be able to take tabular data, clean it, manipulate it, and run basic inferential statistical analyses. This course should be taken before any of the other Applied Data Science with Python courses: Applied Plotting, Charting & Data Representation in Python, Applied Machine Learning in Python, Applied Text Mining in Python, Applied Social Network Analysis in Python.',
          },
          {
            id: 1,
            name_course: 'Applied Plotting, Charting & Data Representation in Python',
            description_course: 'This course will introduce the learner to information visualization basics, with a focus on reporting and charting using the matplotlib library. The course will start with a design and information literacy perspective, touching on what makes a good and bad visualization, and what statistical measures translate into in terms of visualizations. The second week will focus on the technology used to make visualizations in python, matplotlib, and introduce users to best practices when creating basic charts and how to realize design decisions in the framework. The third week will be a tutorial of functionality available in matplotlib, and demonstrate a variety of basic statistical charts helping learners to identify when a particular method is good for a particular problem. The course will end with a discussion of other forms of structuring and visualizing data. This course should be taken after Introduction to Data Science in Python and before the remainder of the Applied Data Science with Python courses: Applied Machine Learning in Python, Applied Text Mining in Python, and Applied Social Network Analysis in Python.',
          },
          {
            id: 2,
            name_course: 'Applied Machine Learning in Python',
            description_course: 'This course will introduce the learner to applied machine learning, focusing more on the techniques and methods than on the statistics behind these methods. The course will start with a discussion of how machine learning is different than descriptive statistics, and introduce the scikit learn toolkit through a tutorial. The issue of dimensionality of data will be discussed, and the task of clustering data, as well as evaluating those clusters, will be tackled. Supervised approaches for creating predictive models will be described, and learners will be able to apply the scikit learn predictive modelling methods while understanding process issues related to data generalizability (e.g. cross validation, overfitting). The course will end with a look at more advanced techniques, such as building ensembles, and practical limitations of predictive models. By the end of this course, students will be able to identify the difference between a supervised (classification) and unsupervised (clustering) technique, identify which technique they need to apply for a particular dataset and need, engineer features to meet that need, and write python code to carry out an analysis. This course should be taken after Introduction to Data Science in Python and Applied Plotting, Charting & Data Representation in Python and before Applied Text Mining in Python and Applied Social Analysis in Python.'
          },
          {
            id: 3,
            name_course: 'Applied Text Mining in Python',
            description_course: 'This course will introduce the learner to text mining and text manipulation basics. The course begins with an understanding of how text is handled by python, the structure of text both to the machine and to humans, and an overview of the nltk framework for manipulating text. The second week focuses on common manipulation needs, including regular expressions (searching for text), cleaning text, and preparing text for use by machine learning processes. The third week will apply basic natural language processing methods to text, and demonstrate how text classification is accomplished. The final week will explore more advanced methods for detecting the topics in documents and grouping them by similarity (topic modelling). This course should be taken after: Introduction to Data Science in Python, Applied Plotting, Charting & Data Representation in Python, and Applied Machine Learning in Python.'
          },
          {
            id: 4,
            name_course: 'Applied Social Network Analysis in Python',
            description_course: 'This course will introduce the learner to network analysis through tutorials using the NetworkX library. The course begins with an understanding of what network analysis is and motivations for why we might model phenomena as networks. The second week introduces the concept of connectivity and network robustness. The third week will explore ways of measuring the importance or centrality of a node in a network. The final week will explore the evolution of networks over time and cover models of network generation and the link prediction problem. This course should be taken after: Introduction to Data Science in Python, Applied Plotting, Charting & Data Representation in Python, and Applied Machine Learning in Python.'
          },

        ]
    },

    ];
