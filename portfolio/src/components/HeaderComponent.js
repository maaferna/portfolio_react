import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
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
                    <div className="row">
                        <div className="col-10">
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
                        <div className="col">
                            <img width="50rem" height="50rem" className="d-inline-block align-top rounded-circle" src="assets/images/perfil.jpeg" alt="avatar image"/>
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
              </div>
            </React.Fragment>
        )
    }
}

export default Header;
