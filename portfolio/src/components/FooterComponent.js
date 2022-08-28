import React from 'react';

function Footer(props) {
  return(
    <div className="footer">
      <div className="container">
          <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                  <p>Marco Antonio Fernández Parra</p>
              </div>
              <div className="col col-sm col-md">
                  <p>·Magíster en Ingeniería Industrial · Ingeniero Civil Industrias de La Madera</p>
              </div>
          </div>
          <div className="row">
              <div className="col-4 col-sm-3 offset-2">
                    <h5>Links</h5>
                    <ul>
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="./resume.html">Resume</a></li>
                        <li><a href="./portafolio.html">Portafolio</a></li>
                        <li><a href="./skills.html">Skills</a></li>
                    </ul>
              </div>
              <div className="col-4 col-sm-3">
                  <h5>My Address</h5>
                  <address>
                        Parcela 10, Km camino Chillán - Huape<br />
                            Chillán, Ñuble<br />
                            Chile
                        <i className="fa fa-phone"></i>: +56 9 5629 1334<br />
                        <i className="fa fa-envelope"></i>: <a href="maaferna@gmail.com">maaferna@gmail.com</a>
                 </address>
              </div>
              <div className="col col-sm">
                    <h5>Visit My Social Networks</h5>
                    <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/marco-antonio-parra-82999337/" aria-label="Linkedin"><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-social-icon" href="https://github.com/maaferna"><i className="fa fa-envelope-o"></i></a>
                    <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/MarcoAParraF"><i className="fa fa-twitter"></i></a>
                    <a className="btn btn-social-icon btn-github" href="https://github.com/maaferna"><i className="fa fa-github"></i></a>
              </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-12 col-sm-6">
                <p>This page was created by <span className="badge badge-pill badge-secondary">Marco Antonio Parra</span>. To learn more about web design, visit <a href="http://www.intro-webdesign.com/">Intro to Web Design</a></p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer;
