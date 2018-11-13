// Document Title: Welcome.js
// Author: Sarah Creasman
// Last Updated: 11/12/18
// Provides the Welcome page for the ChatDoom app

import React, { Component } from 'react';

class Welcome extends Component {
    render() {
      return(
        <div className="page-body">
          <div className="page-header">
            Welcome to ChatDoom
          </div>

          <div className="page-text">
            Welcome to <b>ChatDoom</b>, a custom built chat client. <b>ChatDoom</b> was built using JavaScript React with a Firebase backend. <br /><br />

            So what is the point of <b>ChatDoom</b>? The point is to have a place to go to talk about anything.
          </div>
        </div>
      )
    }
}

export default Welcome;
