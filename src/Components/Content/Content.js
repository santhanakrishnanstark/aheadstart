import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ToDoList from '../ToDoList/ToDoList';
import axios from '../../axios-list';
import PostTitle from '../PostTitle/PostTitle';

class Content extends Component {

    state = {
        name:'',
        text:'',
        posts:[],
        lists : [],
        status:''
    };


  /*  componentDidMount() {
        axios.get('http://localhost:8083/students')
            .then( response => {
                this.setState({posts : response.data});
                console.log(response);
            });
    } not now */
    
    listHandler =() =>{  
        const newlist = this.state.lists.concat(this.state.text);
        this.setState({lists : newlist });
    }
    saveList =()=>{
        const head =  this.state.name;
        const posts = {
                name : head,
                list : this.state.lists 
        }
        axios.post('/lists.json',posts)
            .then(response => { this.setState({status:'Saved Successfully!'});
        })
            .catch(error => { this.setState({status:'Not Saved Error!'});
        });
    } 
    changeHandler =(e) =>{
        this.setState({text : e.target.value});
    }
    changeNameHandler =(e) =>{
        this.setState({name : e.target.value});
    }
    removeList =(index) =>{
        const lists = [...this.state.lists];
        lists.splice(index,1);
        this.setState({lists:lists}); 
    }

  render() {
    return (
        <div>
            <h4>Add List items</h4>
            <input type="text"  
            onChange={this.changeNameHandler}    
            className="form-control" /> <br/>
            <input type="text"  
            onChange={this.changeHandler}    
            className="form-control" /> <br/>
            <button 
             onClick={this.listHandler}
            className="btn btn-warning form-control"> Add
            </button>

            <ToDoList lists={this.state.lists}
                      Close={(index)=>this.removeList(index)}
            />

            <br/>
            <button 
             onClick={this.saveList}
            className="btn btn-success form-control"> Save
            </button>
            <br/>
            <p>{this.state.status}</p>
            <PostTitle posts={this.state.posts}  />
        </div>
    );
  }
}

export default Content;
