import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';



class SearchResults extends Component {
  render() {
    let searchResults;
    if (this.props.display === true) {
        searchResults = <Row className="searchresults">       
                                <Col xs={12} md={6} mdPush={3}>
                                     <p> Loading searchresults... </p>   
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
}

export default SearchResults;
