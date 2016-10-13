import React, { Component } from 'react';
import { FormControl, Row, Col } from 'react-bootstrap';
import { RaisedButton } from 'material-ui';

const searchStyles = {
  paddingTop: 30,
}

class Search extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.search = this.search.bind(this)
  }

  handleSearch(e){
    let newValue = e.target.value
    this.setState({
      input: newValue
    })
    console.log(this.state.input)
  }
  search(){
    let val = this.state.input
    this.props.searchResults.getResults(val)
    this.props.toggleDisplay()
  }

  render() {
    return (
      <Row style={searchStyles}>
        
        <Col xs={12} md={6} mdPush={3}>
          <FormControl defaultValue="" onChange={this.handleSearch}>
               
          </FormControl>

          <RaisedButton
               onClick={this.search}
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
