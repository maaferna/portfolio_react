import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader,
ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

class Submenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>English Version</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Versión Español</a>
        </li>
      </ul>
    )
  }
}


class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isNavOpen: false,
        isModalOpen: false
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }

    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

    handleLogin(event) {
      this.toggleModal();
      alert("Username: " + this.username.value + " Password: " + "****" +
        " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
              <div>
                <Navbar className="navbar navbar-dark navbar-expand-sm fixed-top">
                  <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <div className="row">
                        <div className="col-10 col-md-8">
                          <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                              <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>Home
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className="nav-link" to="/portafolio">
                                    <span className="fa fa-list fa-lg"></span>Portafolio
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className="nav-link" to="/contactme">
                                    <span className="fa fa-address-card fa-lg"></span>Contact Me
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-link">
                                <span className="fa fa-address-card fa-lg"></span>Resume/Curriculum Vitae
                                <Submenu />
                              </NavItem>
                            </Nav>
                          </Collapse>
                        </div>
                        <div className="col-1 col-md-2">
                          <img width="40rem" height="40rem" className="d-inline-block align-top rounded-circle" src="assets/images/perfil.jpeg" alt="avatar image"/>
                        </div>
                        <div className="col-1 col-md-2">
                            <Nav className="ml-auto" navbar>
                              <NavItem>
                                  <Button outline onClick={this.toggleModal}>
                                      <span className="fa fa-sign-in fa-lg">Login</span>
                                  </Button>
                              </NavItem>
                            </Nav>
                        </div>
                      </div>
                  </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                              <div className="col-12 align-self-center">
                                    <h1>
                                        Magister en Ingeniería Industrial / Ingeniero Operaciones / Desarrollador web y analista de datos
                                    </h1>
                              </div>
                        </div>
                        <div className="row row-header">
                            <div className="col-8">
                                <p id="paragraph">
                              Profesional con 9 años de experiencia laboral liderando equipos de trabajo en plantas industriales,  especializado en temas de planificación de la producción, meta- heurística, gestión de operaciones, eficiencia operacional, optimización y simulación de procesos, mejora continua (filosofía Lean Manufacturing), análisis estadístico, desarrollo de proyectos, minería de datos y mantención de equipos industriales.
                                            Desarrollador de web y analista de datos con conocimiento en Python, Django, Ruby On Rails, SQL, AWS, JavaScript, CSS, HTML.
                                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                  <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                      <FormGroup>
                          <Label htmlFor="username">Username</Label>
                          <Input type="text" id="username" name="username"
                                innerRef={(input) =>this.username = input}></Input>
                      </FormGroup>
                      <FormGroup>
                          <Label htmlFor="password">Password</Label>
                          <Input type="password" id="password" name="password"
                                innerRef={(input) =>this.password = input}></Input>
                      </FormGroup>
                      <FormGroup check>
                          <Label check>
                            <Input type="checkbox" name="remember"
                                    innerRef={(input) =>this.remember = input}>Remember Me</Input></Label>
                      </FormGroup>
                      <Button type="submit" value="submit">Login</Button>
                    </Form>
                  </ModalBody>
                </Modal>
              </div>
            </React.Fragment>
        )
    }
}

export default Header;
