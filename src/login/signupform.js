import { Component } from 'react';
import React from 'react';
import { Checkbox, FormGroup, Form, FormControl, Col } from 'react-bootstrap';
import { RaisedButton } from 'material-ui';
import ControlLabel from './controllabel.js';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#222',
  },
  slide2: {
    background: '#FEA900',
  },
  
};

class SignUpForm extends Component {
    render(){
        return(
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
                                            <RaisedButton
                                                label=" Sign up"
                                                fullWidth={true}
                                                backgroundColor='#009688'
                                                labelColor='#fff' />
                                            </Col>
                                        </FormGroup>
                                   </Form>
        )
    }
}

export default SignUpForm