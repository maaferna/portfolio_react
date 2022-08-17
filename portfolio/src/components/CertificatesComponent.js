import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import { Media } from 'reactstrap';


class CertificateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certificates: [
        {
          id: 0,
          type: 'Specialization',
          name_specialization: 'Programming for Everybody (Getting Started with Python)',
          description_specialization: 'This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python.  The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this course. This course will cover Chapters 1-5 of the textbook “Python for Everybody”.  Once a student completes this course, they will be ready to take more advanced programming courses. This course covers Python 3.',
          image_path: '/assets/images/PythonForEverybody.png',
          rating: '4.8',
          name_course1: 'Python Data Structures',
          description_course1: 'This course will introduce the core data structures of the Python programming language. We will move past the basics of procedural programming and explore how we can use the Python built-in data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis. This course will cover Chapters 6-10 of the textbook “Python for Everybody”.  This course covers Python 3.',
          name_course2: 'Using Python to Access Web Data',
          description_course2: 'This course will show how one can treat the Internet as a source of data.  We will scrape, parse, and read web data as well as access data using web APIs.  We will work with HTML, XML, and JSON data formats in Python.  This course will cover Chapters 11-13 of the textbook “Python for Everybody”. To succeed in this course, you should be familiar with the material covered in Chapters 1-10 of the textbook and the first two courses in this specialization.  These topics include variables and expressions, conditional execution (loops, branching, and try/except), functions, Python data structures (strings, lists, dictionaries, and tuples), and manipulating files.  This course covers Python 3.',
          name_course3: 'Using Databases with Python',
          description_course3: 'This course will introduce students to the basics of the Structured Query Language (SQL) as well as basic database design for storing data as part of a multi-step data gathering, analysis, and processing effort.  The course will use SQLite3 as its database.  We will also build web crawlers and multi-step data gathering and visualization processes.  We will use the D3.js library to do basic data visualization.  This course will cover Chapters 14-15 of the book “Python for Everybody”. To succeed in this course, you should be familiar with the material covered in Chapters 1-13 of the textbook and the first three courses in this specialization. This course covers Python 3.',
          name_course4: 'Capstone: Retrieving, Processing, and Visualizing Data with Python',
          description_course4: 'In the capstone, students will build a series of applications to retrieve, process and visualize data using Python.   The projects will involve all the elements of the specialization.  In the first part of the capstone, students will do some visualizations to become familiar with the technologies in use and then will pursue their own project to visualize some other data that they have or can find.  Chapters 15 and 16 from the book “Python for Everybody” will serve as the backbone for the capstone. This course covers Python 3.'
        }
      ],
    };
  }
  render() {
    const certificate_list = this.state.certificates.map((certificate) => {
      return (
        <div key={certificate.id} ClassName="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object src={certificate.name_specialization} alt={certificate.name_specialization}/>
            </Media>
            <Media body className="ml-5">
              <Media heading>{certificate.name}</Media>
              <p>{certificate.description_specialization}</p>
            </Media>
          </Media>
        </div>
      )
    });
    return (
      <div className="container">
        <div className="row">
          <Media list>
            {certificate_list}
          </Media>
        </div>
      </div>
    );
  }
}

export default CertificateList;
