import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

const cardStyles = {
  backgroundColor: '#fff',
  marginTop: 15,
  padding: 10,
  height: 200,
  width:'100%',
}

class Card extends Component {
  render() {
    return (
      <Col xs={4} md={2}>
        <div style={cardStyles}>
        <br />
        <br />
        <p> No card added, search for cards to add them to your deck.</p>
        <p> (x) </p>
        </div>
      </Col>
    );
  }
}

export default Card;
