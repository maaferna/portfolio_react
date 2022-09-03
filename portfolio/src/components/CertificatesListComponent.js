import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCertificatesItem({certificate, onClick}) {
    return (
        <Card >
            <Link to ={`/certificates/${certificate.id}`} >
                <CardImg width="100%" src={certificate.certificate_path} alt={certificate.name_specialization}/>
                <CardImgOverlay>
                    <CardTitle>{certificate.name_specialization}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
        );
    }

const MenuCertificates = (props) => {

    const menu = props.certificates.map((certificate) => {
        return (
          <div className="col-12 col-md-5 m-1"  key={certificate.id}>
            <RenderCertificatesItem certificate={certificate} onClick={props.onClick} />
          </div>
        );
      });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>My Specializations And Professional Certifications</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default MenuCertificates;
