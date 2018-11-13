// Document Title: NotFound.js
// Author: Sarah Creasman
// Last Updated: 11/12/18
// Provides an error message page if a user goes to the wrong address of the app.

import React, { Component } from 'react';

class NotFound extends Component {
    render() {
      return(
        <div className="page-body">
          <div className="page-header">
            Page Not Found!
          </div>

          <div className="page-text">
            Careful explorer, you've fallen off the map! Please press the <b>back</b> button on your browser and return to safe shores.
          </div>
        </div>
      )
    }
}

export default NotFound;
