import React, { Component } from "react";
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderCertificate({certificate}) {
        if (certificate != null)
            return (
                    <Card>
                        <CardBody>
                            <CardTitle style={{fontWeight: 'bold'}}>{certificate.courses.name_course}</CardTitle>
                            <CardText>{certificate.description_specialization}</CardText>
                        </CardBody>
                    </Card>
            );
        else
            return (
                <div></div>
            );
    }

    function RenderCourses({courses}) {
        if (courses == null) {
            return (
                <div></div>
            );
        }
        const renderedCourses = courses.map((course) => {
        return (
            <Card>
              <div key={course.id}>
                    <CardTitle>{course.name_course}</CardTitle>
                    <CardText>-- {course.description_course}</CardText>
              </div>
          </Card>
        );
    });
    return(
        <div className="container">
            <h4>Courses</h4>
            <ul className="list-unstyled">
                { renderedCourses }
            </ul>
        </div>
        );
    }

    const CertificateDetail=(props) =>{
        if (props.certificate != null) {
            return (
            <div className="container">
              <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to='/certificates'>Specializations & Profesional Certifications</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.certificate.name_specialization}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.certificate.name_specialization}</h3>
                    <hr />
                </div>
            </div>
              <div className="row">
                  <div className="col-12 col-md-4">
                      <RenderCertificate certificate={props.certificate} />
                  </div>
                  <div className="col-12 col-md-8">
                      <RenderCourses courses={props.certificate.courses} />
                  </div>
              </div>
            </div>
            );
         }
        else {
            return (
            <div></div>
            );
        }
}

export default CertificateDetail;
