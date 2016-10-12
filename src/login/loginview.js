import React, { Component } from 'react';
import { Checkbox, FormGroup, Form, FormControl, Grid, Row, Col } from 'react-bootstrap';
import { RaisedButton } from 'material-ui';
import ControlLabel from './controllabel.js';



class LoginView extends Component {
  render() {
    return (
        <Grid>
         <Row>
                <Col xs={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
                   <div className="loginsignup">
                        <Row>
                             <Col xs={12} md={6} lg={6}>
                                   <Form horizontal>
                                        <FormGroup controlId="fromHorizontalUsername">
                                       
                                            <Col bsClass="labelStyles" componentClass={ControlLabel} sm={2}>
                                                Username
                                            </Col>
                                        
                                            <Col sm={10}>
                                                <FormControl type="username" placeholder="Username" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="fromHorizontalPassword">
                                            <Col componentClass={ControlLabel} sm={2}>
                                                Password
                                            </Col>
                                            <Col sm={10}>
                                                <FormControl type="password" placeholder="Password" />
                                            </Col>
                                        </FormGroup>
                                         <FormGroup>
                                            <Col smOffset={2} sm={10}>
                                                <Checkbox>Remember me</Checkbox>
                                            </Col>
                                            </FormGroup>

                                            <FormGroup>
                                            <Col smOffset={2} sm={10}>
                                            <RaisedButton
                                                label=" Sign in"
                                                fullWidth={true}
                                                backgroundColor='#009688'
                                                labelColor='#fff' />
                                            </Col>
                                            </FormGroup>
                                   </Form>
                             </Col>
                             <Col xs={12} md={6} lg={6}>
                                    <h2>Sign up</h2>
                             </Col>
                       </Row>
                  </div>
                </Col>
              </Row>
          </Grid>
    );

  }
}

export default LoginView;
