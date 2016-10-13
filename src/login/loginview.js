import { Component } from 'react';
import React from 'react';
import { Checkbox, FormGroup, Form, FormControl, Grid, Row, Col } from 'react-bootstrap';
import { RaisedButton } from 'material-ui';
import ControlLabel from './controllabel.js';
import {Tabs, Tab} from 'material-ui/Tabs';

import LoginForm from './loginform.js';
import SignUpForm from './signupform.js';

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




class LoginView extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 1,
    }
  }
  handleChange(value){
    this.setState({
      value: value,
    })
  }

  render() {
    return (
        <Grid>
         <Row>
                     
                <Col xs={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
                 
                   <div className="loginsignup">
                        <Row>
                            <Tabs  value={this.state.value} onChange={this.handleChange.bind(this)} initialSelectedIndex={1}>                  
                                <Tab label="Log in" value="one">
                                    <Col xs={12} md={12} lg={12} style={Object.assign({}, styles.slide, styles.slide1)}>
                                  
                                        <LoginForm />
                                 
                                    </Col>
                                </Tab>
                                <Tab label="Sign up" value="two">
                                    <Col xs={12} md={12} lg={12}  style={Object.assign({}, styles.slide, styles.slide1)}>
                                        
                                        <SignUpForm />    
                                        
                                    </Col>
                                </Tab>

                           
                            </Tabs>   
                       </Row>
                  </div>
               
                </Col>
              
              </Row>
          </Grid>
    );

  }
}

export default LoginView;
