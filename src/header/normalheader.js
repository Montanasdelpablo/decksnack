import React from 'react';
import {findDOMNode} from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';
import {TweenMax} from 'gsap';
import LoginView from '../login/loginview.js';

class NormalHeader extends React.Component {
  componentWillEnter (callback) {
    const el = findDOMNode(this);
    TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = findDOMNode(this);
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
  }

  render () {
    return <Row className="Header" >
                  <Col xs={12} md={12} lg={12} >
                      <img src={logo} className="App-logo" alt="logo" />
                      <h2>Decksnack</h2>
                      <LoginView />
                   </Col>
              </Row>;
  }
}
export default NormalHeader