import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import {observer} from 'mobx-react';


const SearchResults = observer(class SearchResults extends Component {
  constructor(props, context){
      super(props, context)
      this.state = {
        cards: []
      }
      
  }
  componentWillMount(){
    this.props.search.getCards()
    let arr = this.props.search.returnCards()
    console.log(arr)
  }

  loadCards(card){
     return <li key={card._id}>{card.idName}</li>
  }

  render() {
       
    return (
        
            <Row className="searchresults">       
                                <Col xs={12} md={6} mdPush={3}>
                                    <ul>
                                     
                                     </ul>
                                </Col>
            </Row>
        
    );
  }
})

export default SearchResults;
