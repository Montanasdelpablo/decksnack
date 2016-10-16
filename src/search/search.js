import React, { Component } from 'react';
import { FormControl, Row, Col } from 'react-bootstrap';
import { RaisedButton } from 'material-ui';
import {observer} from 'mobx-react';
import SearchResults from './searchresults.js';

const searchStyles = {
  paddingTop: 30,
}

const Search = observer(class Search extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      
    }
    this.handleSearch = this.handleSearch.bind(this)
    
  }
  componentWillMount(){
    
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
        
      <SearchResults search={this.props.search} />  
    </div>
    );
  }
})

export default Search;
