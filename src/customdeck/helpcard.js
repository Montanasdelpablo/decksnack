import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

const cardStyles = {
  backgroundColor: '#009688',
  marginTop: 15,
  padding: 10,
  height: 200,
  width:'100%',
}

const textStyles = {
    color: '#fff',
}
class Card extends Component {
  render() {
    return (
      <Col xs={4} md={8}>
        <div style={cardStyles}>
        <br />
        <br />
        <p style={textStyles}> 
            Need any help? <br/ >
            Try searching for known cards into the searchbar.  <br /> 
            You can check the stats and while you are at it add it immediately to your deck.
            
        </p>
        <p style={textStyles}> (?) </p>
        </div>
      </Col>
    );
  }
}

export default Card;
