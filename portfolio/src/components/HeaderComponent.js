import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends Component {
    constructor(props) {
      super(props);

      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false
      };
    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }
    render() {
        return (
            <React.Fragment>
              <div>
                <Navbar className="navbar navbar-dark navbar-expand-sm fixed-top">
                  <div className="container">
                  <NavbarToggler onClick={this.toggleNav}/>
                    <div className="col-10">
                      <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                          <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span>Home
                            </NavLink>
                            <Dropdown>
                              <Dropdown.Toggle className="dropdowndisplay">
                                Resume/Curriculum Vitae
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown">
                                <Dropdown.Item className="dropdownlist" href="#/resume">Versión en Español</Dropdown.Item>
                                <Dropdown.Item className="dropdownlist" href="#/curriculumvitae">English Version</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <NavLink className="nav-link" to="/portafolio">
                                <span className="fa fa-list fa-lg"></span>Portafolio
                            </NavLink>
                            <NavLink className="nav-link" to="/contactme">
                                <span className="fa fa-address-card fa-lg"></span>Contact Me
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </Collapse>
                    </div>
                    <div className="col">
                        <img src="image/perfil.jpeg" className="avatar" alt="avatar image"/>
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
              </div>
            </React.Fragment>
        )
    }
}

export default Header;
