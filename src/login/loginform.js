import { Component } from 'react';
import React from 'react';
import { Checkbox, FormGroup, Form, FormControl, Col } from 'react-bootstrap';
import { RaisedButton } from 'material-ui';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 5,
    fontWeight: 400,
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#424242',
  },
  slide2: {
    background: '#FEA900',
  },
  label: {
    paddingLeft: 15,
    paddingBottom: 5,
    marginBottom: 2,
  },
  input: {
      width: '100%',
  }

  
};

class LoginForm extends Component {
    render(){
        return(
            <Form horizontal>
                                        <FormGroup controlId="fromHorizontalUsername">
                                       
                                            <Col style={styles.label} sm={2} md={12} lg={12}>
                                                <h4 style={styles.headline}> Username </h4>
                                            </Col>
                                        
                                            <Col sm={10} md={12} lg={12}>
                                                <FormControl style={styles.input} type="username" placeholder="Username" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="fromHorizontalPassword">
                                            <Col style={styles.label} sm={2} md={12} lg={12}>
                                                <h4 style={styles.headline}> Password </h4>
                                            </Col>
                                            <Col sm={10} md={12} lg={12}>
                                                <FormControl style={styles.input} type="password" placeholder="Password" />
                                            </Col>
                                        </FormGroup>
                                         <FormGroup>
                                            <Col md={4} sm={2} lg={4}>
                                                <Checkbox>Remember me</Checkbox>
                                            </Col>
                                            <Col sm={10} md={8} lg={8}>
                                            <RaisedButton
                                                label=" Log in"
                                                fullWidth={true}
                                                backgroundColor='#009688'
                                                labelColor='#fff' />
                                            </Col>
                                            </FormGroup>

                                         
            </Form>
        )
    }
}

export default LoginForm