// Document Title: Thread.js
// Author: Sarah Creasman
// Last Updated: 11/12/18
// Provides the Thread page for the ChatDoom app

import React, { Component } from 'react';

// IMPORTS COMPONENTS FROM APP
import Post from './Post.js';
import PostEditor from './PostEditor.js';

class Thread extends Component {
  constructor(props) {
    super(props);

    // BINDS THE FUNCTIONS TO THE THIS KEYWORD
    this.databaseRef = this.props.database.ref().child("posts");
    this.addPost = this.addPost.bind(this);
    this.updateLocalState = this.updateLocalState.bind(this);

    this.state = {
      posts: [],
    }
  }

  // LOADS THE DATABASE UPON STARTING THIS PAGE
  componentWillMount() {
    const {updateLocalState} = this;
    this.databaseRef.on("child_added", snapshot => {
      const response = snapshot.val();
      console.log(snapshot.key)
      updateLocalState(response, snapshot.key);
    });
  }

  // ADDS POST TO DATABASE AND CHATROOM APP
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

  // DISPLAYS THE CHAT ROOM PAGE ITSELF
  render() {
    return (
      <div className="chat-body">
        <div className="chat-posts">
          {/* DISPLAYS POSTS WITH MOST RECENT MESSAGE ON TOP */}
          {
            this.state.posts.reverse().map((postBody, idx) => {
              return (
                <Post key = {idx} postBody = {postBody} handleDelete = {this.handleDelete} />
              )
            })
          }
        </div>
          {/* DISPLAYS THE POST EDITOR SO USERS CAN POST */}
          <PostEditor addPost = {this.addPost} />
      </div>
    );
  }
}

export default Thread;
