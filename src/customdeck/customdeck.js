import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Card from './card.js';
import HelpCard from './helpcard.js';

class CustomDeck extends Component {
  renderCards() {

  }
  
  render() {
    return (
      <Row className="customdeck">
        
        
          <Card> </Card>
          <Card> </Card>
          <Card> </Card>
          <Card> </Card>
          <Card> </Card>
          <Card> </Card>
          <Card> </Card>
          <Card> </Card>
          <HelpCard> </HelpCard>
             
        

      </Row>
    );
  }
}

export default CustomDeck;
