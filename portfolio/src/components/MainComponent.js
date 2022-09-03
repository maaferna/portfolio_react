import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';

import CertificatesList from './CertificatesComponent';
import { CERTIFICATES } from '../shared/certificates_list';

import CertificateDetail from "./CertificateDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

import Contactme from './ContactmeComponent';

import MenuCertificates from './CertificatesListComponent'

import { Navigate, Route, Routes, useParams } from 'react-router-dom';

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
    const HomePage = () => {
     return (
       <div>
          <CertificatesList certificates={this.state.certificates}
           onClick={(certificateId)=> this.onCerticateSelect(certificateId)}/>
           <CertificateDetail certificate={this.state.certificates.filter((certificate)=> certificate.id === this.state.selectedCertificate)[0]} />
      </div>
     );
    }

    const ContactPage = () => {
      return (
        <Contactme/>
      );
    }

    const CertificateWithId = () => {
      const params = useParams();
      return (
        <CertificateDetail certificate={this.state.certificates.filter((certificate)=>certificate.id===parseInt(params.certificateId,10))[0]}
         />
      );
    }


    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={ <HomePage/> } />
          <Route path='/contactme' element={ < ContactPage />} />
          <Route path='/certificates' element={<MenuCertificates certificates={this.state.certificates} />} />
          <Route path='/certificates/:certificateId' element={<CertificateWithId/>} />
          <Route path='*' element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
