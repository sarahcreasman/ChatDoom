// Document Title: About.js
// Author: Sarah Creasman
// Last Updated: 11/12/18
// Provides the About page for the ChatDoom app

import React, { Component } from 'react';

class About extends Component {
    render() {
      return(
        <div className="page-body">
          <div className="page-header">
            About ChatDoom
          </div>

          <div className="page-text">
            <b>ChatDoom</b> was written as a project for CodeLouisville's JavaScript React class. There are a few rules to interacting on this site:<br/><br/>

            <b>One.</b> No hate speech. You will find it immediately deleted.<br/>
            <b>Two.</b> No spoilers to tv shows/movies. Please wait a week after they air before discussing it.<br/>
            <b>Three.</b> Keep it clean. Swearing is okay, but beyond that, I can't control whose on here.<br/>
            <b>Four.</b> Have fun. That's what its all about, after all!
          </div>
        </div>
      )
    }
}

export default About;
