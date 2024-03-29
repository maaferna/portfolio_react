import React, {Component} from "react";
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Document, Page } from 'react-pdf';
import { Link} from 'react-router-dom';

class Certificates extends Component {

  render() {
    const certificate_list = this.props.certificates.map((certificate) => {
      return (
        <div className="col-12 col-md-6">
          <Card key={certificate.id} onClick={()=> this.props.onClick(certificate.id)}>
            <CardImg width="100%" object src={certificate.certificate_path} alt={certificate.name_specialization}/>
          </Card>
        </div>
      )
    });
    return (
      <div className="container">
        <div className>
            <Breadcrumb>
              <BreadcrumbItem>
                  <Link to='/certificates'>More Specializations And Professional certifications</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
          </div>

        <div className="row">
          {certificate_list}
        </div>
      </div>
    );
  }
}

export default Certificates;
