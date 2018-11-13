import React, { Component } from 'react';

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPostBody: "",
      newAuthor: "",
    };

    this.handleEditorInput = this.handleEditorInput.bind(this);
    this.handleAuthorInput = this.handleAuthorInput.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  handleEditorInput(e) {
    this.setState({
      newPostBody: e.target.value
    })
  }

  handleAuthorInput(e) {
    this.setState({
      newAuthor: e.target.value
    })
  }

  createPost() {
    this.props.addPost(this.state.newPostBody, this.state.newAuthor);
    this.setState({
      newPostBody: "",
    });
  }

  render() {
    return(
      <div className="panel panel-default post-editor">
        <div className="panel-body">
          <input type="text" className="form-control" placeholder="Your Name" value={this.state.newAuthor} onChange={this.handleAuthorInput} />
          <textarea className="form-control" value={this.state.newPostBody} onChange={this.handleEditorInput} />
          <button className="btn post-editor-button btn-submit" onClick={this.createPost}>Post</button>
        </div>
      </div>
    )
  }
}

export default PostEditor;
