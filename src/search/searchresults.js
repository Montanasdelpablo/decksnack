import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import {observer} from 'mobx-react';


const SearchResultsView = observer(class SearchResultsView extends Component {
  constructor(props){
      super(props)
      
  }
  componentWillMount(){
      console.log(this.props.searchResults)
  }

  render() {
    let searchResults;
    console.log(searchResults)
    if (this.props.display === true) {
        searchResults = <Row className="searchresults">       
                                <Col xs={12} md={6} mdPush={3}>
                                     {this.props.searchResults.searchresults.map((card) => {
                                         return <li key={card._id}> {card.Name}, {card.type} </li>
                                     })}  
                                </Col>
                        </Row>;
    } 
    else {
        searchResults = <Row className="searchresults">
                            
                        </Row>;
    }
    
    return (
        <div>
            {searchResults}
        </div>
    );
  }
})

export default SearchResultsView;
