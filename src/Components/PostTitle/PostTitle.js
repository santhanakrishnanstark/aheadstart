import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PostTitle extends Component {
 
  render() {
    return ( 
        <div>  
            <ul>
                {this.props.posts.map(
                    (item,index) => <li key={index}>{item.name} 
                    </li>)}
            </ul> 
       </div>
    );
  }
}

export default PostTitle;
