import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';

import CertificatesList from './CertificatesComponent';
import { CERTIFICATES } from '../shared/certificates_list';

import CertificateDetail from "./CertificateDetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certificates: CERTIFICATES,
      selectedCertificate: null,
    };
  }

  onCerticateSelect(certificateId) {
    this.setState({selectedCertificate: certificateId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Marco Antonio Parra, Portfolio</NavbarBrand>
          </div>
        </Navbar>
        <CertificatesList certificates={this.state.certificates}
          onClick={(certificateId)=> this.onCerticateSelect(certificateId)}/>
        <CertificateDetail certificate={this.state.certificates.filter((certificate)=> certificate.id === this.state.selectedCertificate)[0]} />
      </div>
    );
  }
}

export default Main;
