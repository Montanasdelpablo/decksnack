import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import { Grid } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import { MuiThemeProvider } from 'material-ui';


import './App.css';

import MobileNav from './nav/mobilenav.js';
import MQHeader from './header/mqheader.js';
import NormalHeader from './header/normalheader.js';

import Search from './search/search.js';
import SearchResults from './search/searchresults.js';
import CustomDeck from './customdeck/customdeck.js';




class App extends Component {
  constructor(){
    super()
    this.state = {
      show: false
    }
    
  }
  toggleMenu(){
    let current = this.state.show
    this.setState({
      show: !current
    })
  }

  render() {
    let header =  null
    if (this.state.show) {
      header = <NormalHeader key="one"/>
    } 

   return (
      <MuiThemeProvider>
         
           <div className="MainApp">
            <MediaQuery query='(max-width: 1780px)'>
             
            <Grid fluid={true}>
            <MediaQuery query='(max-width: 1024px)'>
             <ReactCSSTransitionReplace transitionName="cross-fade" 
                               transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
              {header}
             </ReactCSSTransitionReplace>
            </MediaQuery>
            <MQHeader />
              <MediaQuery query='(max-width: 1024px)'>
                 <MobileNav toggleMenu={this.toggleMenu.bind(this)}/>
              </MediaQuery>
          </Grid>
          
          <Grid className="body"> 
              <Search />
              <SearchResults display={false} />
              <CustomDeck />
          </Grid>
          </MediaQuery>
        </div>
      
      </MuiThemeProvider>
    );

  }
}

export default App;
