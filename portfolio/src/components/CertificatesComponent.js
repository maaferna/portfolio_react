import React, { Component, useState } from "react";
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Document, Page } from 'react-pdf';


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


  renderCertificate(certificate) {
    if (certificate !=null) {
      return (
        <Card>
        <CardImg width="100%" object src={certificate.certificate_path} alt={certificate.name_specialization}/>
          <CardBody>
            <CardTitle> { certificate.name_specialization }</CardTitle>
            <CardText> { certificate.description_specialization }</CardText>
          </CardBody>
        </Card>
    )
    }
    else {
      return (
        <div></div>
      )
    }
  }


  render() {
    const certificate_list = this.props.certificates.map((certificate) => {
      return (
        <div key={certificate.id} ClassName="col-12 col-md-5 m-1">
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
        <div className="row">
          {this.renderCertificate(this.state.selectedCertificate)}
        </div>
      </div>
    );
  }
}

export default Certificates;
