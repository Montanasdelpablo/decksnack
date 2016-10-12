import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


import AppBar from 'material-ui/AppBar';

const rowStyle = {
    minWidth: '100%',
    padding: 0,
    marginLeft: -30,
    marginRight: -30,
}

class MobileNav extends Component {
  constructor(props){
      super(props)
      this.toggleMenu = this.props.toggleMenu
  }
  
  render() {
    return (
      <Row style={rowStyle}>
        <Col xs={12} md={12}>
            <AppBar
                title="Decksnack"
                style={{backgroundColor: '#444'}}
                zDepth={2}
                onTitleTouchTap={this.toggleMenu}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
        </Col>
      </Row>
    );

  }
}

export default MobileNav;
