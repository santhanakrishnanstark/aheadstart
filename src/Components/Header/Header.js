import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
  state = {
    header : "Hello React World "
  };
  
  render() {
    return <h1>{this.state.header}</h1>;
  }
}

export default Header;
