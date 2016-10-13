import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';


class SearchResults extends Component {
  constructor(props){
      super(props)
      
  }
  componentWillMount(){
     console.log(this.props.results)
  }
  loadCards(card){
     return <li key={card._id}>{card.idName}</li>
  }

  render() {
       
    return (
        
            <Row className="searchresults">       
                                <Col xs={12} md={6} mdPush={3}>
                                    <ul>
                                     {_.map(this.props.results, (card) => {this.loadCards.bind(this, card)})}  
                                     </ul>
                                </Col>
            </Row>
        
    );
  }
}

export default SearchResults;
