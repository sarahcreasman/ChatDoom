import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/database';

class Post extends Component {
  deletePost = () => {
    firebase.database().ref('posts').child(this.props.postBody.key).remove();
    window.location.reload();
  }

  render() {
    return(
      <div className="panel panel-default post-body">
        <div className="panel-body">
          <div>
            <b>{this.props.postBody.postAuthor}</b>
          </div>

          <div>
            { this.props.postBody.postBody }
          </div>

          <div>
            <button className="btn btn-danger post-editor-button" onClick = { this.deletePost }>Delete Post</button>
          </div>
        </div>
      </div>
    )
  }

}

Post.propTypes = {
  postBody: PropTypes.object.isRequired,
}

export default Post;
