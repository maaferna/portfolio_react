import React, { Component } from "react";
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class CertificateDetail extends Component{

    renderCertificate(certificate) {
        if (certificate != null)
            return (
                    <Card>
                        <CardImg top src={certificate.certificate_path} alt={certificate.name_specialization} />
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

    renderCourses(courses) {
        if (courses == null) {
            return (
                <div></div>
            );
        }
        const renderedCourses = courses.map((course) => {
        return (
            <div key={course.id}>
                <li>
                    <p>{course.name_course}</p>
                    <p>-- {course.description_course}</p>
                </li>
            </div>
        );
    });
    return(
        <div>
            <h4>Courses</h4>
            <ul className="list-unstyled">
                { renderedCourses }
            </ul>
        </div>
        );
    }

    render() {
        if (this.props.certificate != null) {
            return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    { this.renderCertificate(this.props.certificate) }
                </div>
                <div className="col-12 col-md-5 m-1">
                    { this.renderCourses(this.props.certificate.courses) }
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
}

export default CertificateDetail;
