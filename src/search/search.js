import React, { Component } from 'react';
import { FormControl, Row, Col } from 'react-bootstrap';
import { RaisedButton } from 'material-ui';

const searchStyles = {
  paddingTop: 30,
}

class Search extends Component {
  render() {
    return (
      <Row style={searchStyles}>
        
        <Col xs={12} md={6} mdPush={3}>
          <FormControl>
               
          </FormControl>

          <RaisedButton
               label="Search for cards"
               fullWidth={true}
               backgroundColor='#009688'
               labelColor='#fff'
               >

               </RaisedButton>
        </Col>

      </Row>
    );
  }
}

export default Search;
