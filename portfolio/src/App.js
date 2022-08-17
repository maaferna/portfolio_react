import './App.css';

import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';

import CertificatesList from './components/CertificatesComponent';
import { CERTIFICATES } from './shared/certificates_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certificates: CERTIFICATES
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Marco Antonio Parra, Portfolio</NavbarBrand>
          </div>
        </Navbar>
        <CertificatesList certificates={this.state.certificates} />
      </div>
    );
  }
}

export default App;
