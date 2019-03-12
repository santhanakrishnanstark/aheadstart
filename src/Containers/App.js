import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Components/Header/Header';
import Content from '../Components/Content/Content';

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Header/>
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
          <Content/>
           </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
