import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Grid, Row, Col } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import { MuiThemeProvider } from 'material-ui';

import logo from './logo.svg';
import './App.css';

import MobileNav from './nav/mobilenav.js';
import LoginView from './login/loginview.js';
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

  renderNormalHeader(){
    return    <Row className="Header" >
                   <Col xs={12} md={12} lg={12} >
                      <img src={logo} className="App-logo" alt="logo" />
                      <h2>Decksnack</h2>
                      <LoginView />
                   </Col>
              </Row>
              ;
  }
  renderMQHeader(){
    return <MediaQuery query='(min-width: 1024px})'>
                <Row className="Header" >
                  <Col xs={12} md={12} lg={12} >
                      <img src={logo} className="App-logo" alt="logo" />
                      <h2>Decksnack</h2>
                      <LoginView />
                  </Col>
                 </Row>
              
            </MediaQuery>;
  }


  render() {
    var header
    if (this.state.show){

      header =  <Row key="normalheader" className="Header" >
                  <Col xs={12} md={12} lg={12} >
                      <img src={logo} className="App-logo" alt="logo" />
                      <h2>Decksnack</h2>
                      <LoginView />
                   </Col>
              </Row>;
    } else {
      header = <MediaQuery  minWidth={1024}> 
                 <Row key="mqheader" className="Header" >
                  <Col xs={12} md={12} lg={12} >
                      <img src={logo} className="App-logo" alt="logo" />
                      <h2>Decksnack</h2>
                      <LoginView />
                  </Col>
              </Row>
          </MediaQuery>;
    }

    
    

    return (
      <MuiThemeProvider>
         
           <div className="MainApp">
            <MediaQuery query='(max-width: 1780px)'>
             
            <Grid fluid={true}>
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}   
              >
              {header}
              </ReactCSSTransitionGroup>

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
