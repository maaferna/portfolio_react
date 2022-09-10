import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';

import CertificatesList from './CertificatesComponent';

import CertificateDetail from "./CertificateDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

import Contactme from './ContactmeComponent';

import MenuCertificates from './CertificatesListComponent'

import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    certificates: state.certificates,
  }
}

class Main extends Component {
  constructor(props) {
    super(props);

  }

  onCerticateSelect(certificateId) {
    this.setState({selectedCertificate: certificateId});
  }

  render() {
    const HomePage = () => {
     return (
       <div>
          <CertificatesList certificates={this.props.certificates}
           onClick={(certificateId)=> this.onCerticateSelect(certificateId)}/>
           <CertificateDetail certificate={this.props.certificates.filter((certificate)=> certificate.id === this.props.selectedCertificate)[0]} />
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
        <CertificateDetail certificate={this.props.certificates.filter((certificate)=>certificate.id===parseInt(params.certificateId,10))[0]}
         />
      );
    }


    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={ <HomePage/> } />
          <Route path='/contactme' element={ < ContactPage />} />
          <Route path='/certificates' element={<MenuCertificates certificates={this.props.certificates} />} />
          <Route path='/certificates/:certificateId' element={<CertificateWithId/>} />
          <Route path='*' element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
