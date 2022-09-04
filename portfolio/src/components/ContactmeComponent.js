import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contactme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState ({
            [name]: value,
        });
    }

    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state))
        alert("Current State is: " + JSON.stringify(this.state))
        event.preventDefault();    }

    render() {
      return(
      <div className="container">
              <div className="row row-content">
                 <div className="col-12">
                    <h3>Location Information</h3>
                 </div>
                  <div className="col-12 col-sm-4 offset-sm-1">
                      <h5>My Address</h5>
                      <address>
                        Parcela 10, Km camino Chillán - Huape <br />
                          Chillán, Ñuble<br />
                        Chile<br />
                        <i className="fa fa-phone"></i>: +56 9 5629 1334<br />
                        <i className="fa fa-envelope"></i>: <a href="maaferna@gmail.com">maaferna@gmail.com</a>
                     </address>
                  </div>
                  <div className="col-12 col-sm-6 offset-sm-1">
                      <h5>Map of our Location</h5>
                  </div>
                  <div className="col-12 col-sm-11 offset-sm-1">
                      <div className="btn-group" role="group">
                          <a role="button" className="btn btn-primary" href="tel:56956291334"
                          data-toggle="tooltip" data-html="true" title="Or Call me at <br><strong>+56 9 5629 1334</strong>" data-placement="bottom"><i class="fa fa-phone"></i>Call</a>
                          <a role="button" className="btn btn-info"><i class="fa fa-skype"></i>Skype</a>
                          <a role="button" className="btn btn-success" href="malito:confusion@food.net"><i className="fa fa-envelope-o"></i>Email</a>
                      </div>
                  </div>
              </div>
              <div className='row row-content'>
    <div className='col-12'>
        <h3>Send us Your Feedback</h3>
    </div>
    <div className='col-12 col-md-9'>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
                <Label htmlFor="firstname" md={2}>First Name</Label>
                <Col md={10}>
                    <Input type="text" id="firstname" name="firstname"
                    placeholder='First Name' value={this.state.firstname}
                    onChange={this.handleInputChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="lastname" md={2}>Last Name</Label>
                <Col md={10}>
                    <Input type="text" id="lastname" name="lastname"
                    placeholder='Last Name' value={this.state.lastname}
                    onChange={this.handleInputChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                <Col md={10}>
                    <Input type="tel" id="telnum" name="telnum"
                    placeholder='Tel. Num' value={this.state.telnum}
                    onChange={this.handleInputChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="email" md={2}>Email</Label>
                <Col md={10}>
                    <Input type="email" id="email" name="email"
                    placeholder='Email' value={this.state.email}
                    onChange={this.handleInputChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={{size: 6, offset:2}}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="agree"
                            checked={this.state.agree}
                            onChange={this.handleInputChange}/> { ' ' }
                            <strong>May we contact you?</strong>
                        </Label>
                    </FormGroup>
                </Col>
                <Col md={{size: 3, offset:1}}>
                    <Input type='select' name="ContectType"
                    value={this.state.contactType} onChange={this.handleInputChange}>
                        <option> Tel.</option>
                        <option> Email.</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="message" md={2}>Your Feedback</Label>
                <Col md={10}>
                    <Input type="textarea" id="message" name="message"
                    rows='12' value={this.state.message}
                    onChange={this.handleInputChange}/>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col md={{size:10, offset:2}}>
                    <Button type='submit' color='primary'>Send Feedback</Button>
                </Col>
            </FormGroup>
        </Form>
    </div>
</div>
      </div>
            );
        }
}
             //  <div className="row row-content">
             //     <div className="col-12">
             //        <h3>Send us your Feedback</h3>
             //     </div>
             //      <div className="col-12 col-md-9">
             //          <form>
             //              <div className="form-group row">
             //                  <label for="firstname" className="col-md-2 col-form-label">First Name</label>
             //                  <div className="col-md-10">
             //                      <input type="text" className="form-control" id="firstname" name="firstname"
             //                      placeholder="First Name">
             //                  </div>
             //              </div>
             //              <div className="form-group row">
             //                  <label for="lastname" className="col-md-2 col-form-label">Last Name</label>
             //                  <div className="col-md-10">
             //                      <input type="text" className="form-control" id="lastname" name="lastname"
             //                      placeholder="Last Name">
             //                  </div>
             //              </div>
             //              <div className="form-group row">
             //                  <label for="telnum" class="col-12 col-md-2 col-form-label">Contact Tel.</label>
             //                  <div className="col-5 col-md-3">
             //                      <input type="tel" className="form-control" id="areacode" name="areacode"
             //                      placeholder="Area Code">
             //                  </div>
             //                  <div className="col-7 col-md-7">
             //                      <input type="tel" className="form-control" id="telnum" name="telnum"
             //                      placeholder="Tel. Number">
             //                  </div>
             //              </div>
             //              <div className="form-group row">
             //                  <label for="emailid" className="col-md-2 col-form-label">Email</label>
             //                  <div className="col-md-10">
             //                      <input type="email" className="form-control" id="emailid" name="emailid"
             //                      placeholder="email@example.cl">
             //                  </div>
             //              </div>
             //              <div className="form-group row">
             //                  <div className="col-md-6" offset-md-2>
             //                      <div className="form-check">
             //                          <input type="checkbox" className="form-check-input"
             //                              name="approve" id="approve" value="">
             //                          <label className="form-check-label" for="approve">
             //                              <strong>May we contact you?</strong></label>
             //                      </div>
             //                  </div>
             //                  <div className="col-md-3 offset-md-1">
             //                      <select className="form-control">
             //                          <option>Tel.</option>
             //                          <option>Email.</option>
             //                      </select>
             //                  </div>
             //              </div>
             //              <div className="form-group row">
             //                  <label for="feedback" className="col-md-2 col-form-label">Your Feedback</label>
             //                  <div className="col-md-10">
             //                      <textarea className="form-control" id="feedback" name="feedback"
             //                          rows="12"></textarea>
             //                  </div>
             //              </div>
             //              <div className="form-group row">
             //                  <div className="offset-md-2 col-md-10">
             //                      <button type="submit" className="btn btn-primary">
             //                          Send Feedback
             //                      </button>
             //                  </div>
             //              </div>
             //          </form>
             //      </div>
             //      <br>
             //       <div className="container">
             //          <h5>My Portfolio Calendar</h5>
             //          <iframe src="https://calendar.google.com/calendar/embed?src=f6t6nja6g9r4n3mvhm1p71ijlc%40group.calendar.google.com&ctz=America%2FSantiago" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
             //      </div>
             // </div>



export default Contactme;
