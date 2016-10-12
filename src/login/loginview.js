import { Component } from 'react';
import React from 'react';
import { Checkbox, FormGroup, Form, FormControl, Grid, Row, Col } from 'react-bootstrap';
import { RaisedButton } from 'material-ui';
import ControlLabel from './controllabel.js';


import SwipeableViews from 'react-swipeable-views';
//import MyComponent from '../transitions/swipeableviews.js';

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
    background: '#B3DC4A',
  },
  slide2: {
    background: '#FEA900',
  },
  
};




class LoginView extends Component {
  constructor(props){
    super(props)
    this.state = {
      slideIndex: 0,
    }
  }
  handleChange(value){
    this.setState({
      slideIndex: value,
    })
  }

  render() {
    return (
        <Grid>
         <Row>
                <Col xs={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
                   <div className="loginsignup">
                        <Row>
                             
                            <SwipeableViews>
                                
                                <Col xs={12} md={12} lg={12} style={Object.assign({}, styles.slide, styles.slide1)}>
                                   <Form horizontal>
                                        <FormGroup controlId="fromHorizontalUsername">
                                       
                                            <Col bsClass="labelStyles"  sm={2} md={12} lg={12}>
                                                <h4 style={styles.headline}> Username </h4>
                                            </Col>
                                        
                                            <Col sm={10} md={12} lg={12}>
                                                <FormControl type="username" placeholder="Username" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="fromHorizontalPassword">
                                            <Col bsClass="labelStyles" sm={2} md={12} lg={12}>
                                                <h4 style={styles.headline}> Password </h4>
                                            </Col>
                                            <Col sm={10} md={12} lg={12}>
                                                <FormControl type="password" placeholder="Password" />
                                            </Col>
                                        </FormGroup>
                                         <FormGroup>
                                            <Col md={4} sm={2} lg={6}>
                                                <Checkbox>Remember me</Checkbox>
                                            </Col>
                                            <Col sm={10} md={8} lg={6}>
                                            <RaisedButton
                                                label=" Log in"
                                                fullWidth={true}
                                                backgroundColor='#009688'
                                                labelColor='#fff' />
                                            </Col>
                                            </FormGroup>

                                           
                                   </Form>
                             </Col>
                             <Col xs={12} md={6} lg={6}  style={Object.assign({}, styles.slide, styles.slide1)}>
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
                             </Col>
                            

                            </SwipeableViews>
                             
                       </Row>
                  </div>
                </Col>
              </Row>
          </Grid>
    );

  }
}

export default LoginView;
