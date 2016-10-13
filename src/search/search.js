import React, { Component } from 'react';
import { FormControl, Row, Col } from 'react-bootstrap';
import { RaisedButton } from 'material-ui';

import SearchResults from './searchresults.js';

const searchStyles = {
  paddingTop: 30,
}

class Search extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      searchresults: [],
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.search = this.search.bind(this)
  }
  toggleDisplay(){
    let current = this.state.display
    this.setState({
      display: !current
    })
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
    this.props.search.find(val)
    this.update()
  }
  update(){
    let newArr = this.props.search.cards
    this.setState({
      searchresults: newArr
    })
  }

  render() {
    return (
      <div>
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
        
      <SearchResults results={this.state.searchresults} />  
    </div>
    );
  }
}

export default Search;
