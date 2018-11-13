// Document Title: Post.js
// Author: Sarah Creasman
// Last Updated: 11/12/18
// Creates the individual posts in the Chatdoom App

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/database';

class Post extends Component {
  // DELETES USER'S POSTS UPON CLICK OF A BUTTON

  deletePost = () => {
    firebase.database().ref('posts').child(this.props.postBody.key).remove();
    window.location.reload();
  }

  // CREATES INDIVIDUAL POSTS FROM USER SUBMISSIONS
  render() {
    return(
      <div className="panel panel-default post-body">
        <div className="panel-body">
          {/* STYLES AND SHOWS AUTHOR NAME */}
          <div className="post-author">
            {this.props.postBody.postAuthor}
          </div>

          {/* STYLES AND SHOWS POST TEXT */}
          <div className="post-text">
            { this.props.postBody.postBody }
          </div>

          {/* DELETES THE POST */}
          <button className="btn btn-link post-editor-button btn-delete" onClick = { this.deletePost } title="Delete Post">[x]</button>
        </div>
      </div>
    )
  }

}

Post.propTypes = {
  postBody: PropTypes.object.isRequired,
}

export default Post;
