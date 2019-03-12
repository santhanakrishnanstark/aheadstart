import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../ToDoList/ToDoList.css';

class ToDoList extends Component {
 
  render() {
    return ( 
        <div>  
            <ul>
                {this.props.lists.map(
                    (item,index) => <li key={index}>{item} 
                    <span onClick={()=>this.props.Close(index)} className="badge badge-danger p-2 float-right">X</span></li>)}
            </ul> 
       </div>
    );
  }
}

export default ToDoList;
