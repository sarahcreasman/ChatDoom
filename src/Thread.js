import React, { Component } from 'react';

import Post from './Post.js';
import PostEditor from './PostEditor.js';

// const config = {
//     apiKey: "AIzaSyDNhJo4snc5-wCP17yAPlouAVMieTEt40g",
//     authDomain: "react-forum-58613.firebaseapp.com",
//     databaseURL: "https://react-forum-58613.firebaseio.com",
//     projectId: "react-forum-58613",
//     storageBucket: "react-forum-58613.appspot.com",
//     messagingSenderId: "560066182181"
//   };
//
//
//   firebase.initializeApp(config);
//   database = firebase.database();

class Thread extends Component {
  constructor(props) {
    super(props);

    this.databaseRef = this.props.database.ref().child("posts");
    this.addPost = this.addPost.bind(this);
    this.updateLocalState = this.updateLocalState.bind(this);

    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
    const {updateLocalState} = this;
    this.databaseRef.on("child_added", snapshot => {
      const response = snapshot.val();
      console.log(snapshot.key)
      updateLocalState(response, snapshot.key);
    });
  }

  addPost(postBody, postAuthor) {
    const postToSave = {postBody, postAuthor};
    this.databaseRef.push().set(postToSave);
  }

  updateLocalState(response, key) {
    const posts = this.state.posts;
    const brokenDownPost = {...response, key: key, postBody: response.postBody.split(/[\r\n]/g)};
    posts.push(brokenDownPost);
    this.setState({
      posts: posts,
    })
  }

  render() {
    return (
      <div>
        {
          this.state.posts.map((postBody, idx) => {
            return (
              <Post key = {idx} postBody = {postBody} handleDelete = {this.handleDelete} />
            )
          })
        }
        <PostEditor addPost = {this.addPost} />
      </div>
    );
  }
}

export default Thread;
