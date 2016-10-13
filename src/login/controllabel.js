import React, { Component } from 'react';

const spanStyle = {
  paddingTop: 5,
  paddingBottom: 10,
  
}

class ControlLabel extends Component {
  render() {
    return (
        <div style={spanStyle}>
          
            
              <strong><span style={{color: '#fff', padding: 8}} > {this.props.children}</span> </strong>
            
         
        </div>
    )
  }
}

export default ControlLabel;
