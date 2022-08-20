import React, { Component, useState } from "react";
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Document, Page } from 'react-pdf';
import CertificateDetail from "./CertificateDetailComponent";

class Certificates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCertificate: null
    }
  }

  onCerticateSelect(certificate) {
    this.setState({selectedCertificate: certificate});
  }



  render() {
    const certificate_list = this.props.certificates.map((certificate) => {
      return (
        <div key={certificate.id} className="col-12 col-md-5 m-1">
          <Card onClick={()=> this.onCerticateSelect(certificate)}>
            <CardImg width="100%" object src={certificate.certificate_path} alt={certificate.name_specialization}/>
          </Card>
        </div>
      )
    });
    return (
      <div className="container">
        <div className="row">
          {certificate_list}
        </div>
        <div className="col">
          <CertificateDetail certificate={this.state.selectedCertificate} />
        </div>
      </div>
    );
  }
}

export default Certificates;
