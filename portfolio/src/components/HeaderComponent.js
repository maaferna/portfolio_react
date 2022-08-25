import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar className="navbar navbar-dark navbar-expand-sm fixed-top">
                  <div className="col-10">
                    <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#Navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="nav-brand">
                          <a className="navbar-brand navbar-light" href="#">Marco A. Parra</a>
                    </div>
                    <div className="collapse navbar-collapse" id="Navbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active"><a className="nav-link" href="#"><span className="fa fa-home"></span>Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Resume</a>
                                <ul>
                                    <li className="nav-item"><a className="nav-link" href="./CurriculumVitae.html">Versión en Español</a></li>
                                    <li className="nav-item"><a className="nav-link" href="./resume.html">English version</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="./portafolio.html"><span className="fa fa-info"></span>Portafolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="./skills.html"><span className="fa fa-list"></span>Skills</a></li>
                            <li className="nav-item"><a className="nav-link" href="./contactus.html"><span className="fa-solid fa-address-card"></span>Contact</a></li>
                        </ul>
                    </div>
                  </div>
                  <div className="col">
                      <img src="image/perfil.jpeg" className="avatar" alt="avatar image"/>
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
                        <div class="row row-header">
                            <div className="col-8">
                                <p id="paragraph">
                              Profesional con 9 años de experiencia laboral liderando equipos de trabajo en plantas industriales,  especializado en temas de planificación de la producción, meta- heurística, gestión de operaciones, eficiencia operacional, optimización y simulación de procesos, mejora continua (filosofía Lean Manufacturing), análisis estadístico, desarrollo de proyectos, minería de datos y mantención de equipos industriales.
                                            Desarrollador de web y analista de datos con conocimiento en Python, Django, Ruby On Rails, SQL, AWS, JavaScript, CSS, HTML.
                                            </p>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Header;
