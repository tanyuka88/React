import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        posts:[]
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
          const posts = response.data.slice(0,10);
          const updatedPosts = posts.map(post=>{
            return {
                ...post,
                author:'Max'
            }
          });
          this.setState({posts:updatedPosts});
        });
  }

  render() {
    const posts = this .state.posts.map(post=>{
        return <p key={post.id}>{post.title}--{post.author}</p>
    });

    return (
      <div className="App">
          {posts}
      </div>
    );
  }
}

export default App;
