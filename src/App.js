// Document Title: App.js
// Author: Sarah Creasman
// Last Updated: 11/12/18
// Displays the app for the user

import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// IMPORTS COMPONENTS FROM APP
import Header from './Header.js';
import Welcome from './Welcome.js';
import About from './About.js';
import Thread from './Thread.js';
import NotFound from './NotFound.js';

class App extends Component {
  constructor(props) {
    super(props);

    // INITIALIZES FIREBASE
   var config = {
       apiKey: "AIzaSyDNhJo4snc5-wCP17yAPlouAVMieTEt40g",
       authDomain: "react-forum-58613.firebaseapp.com",
       databaseURL: "https://react-forum-58613.firebaseio.com",
       projectId: "react-forum-58613",
       storageBucket: "react-forum-58613.appspot.com",
       messagingSenderId: "560066182181"
     };


     this.app = firebase.initializeApp(config);
     this.database = this.app.database();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
            <div className="app-body">
              <Switch>
                <Route exact path = "/" component = {Welcome} />
                <Route path = "/Welcome" component = { Welcome } />
                <Route path = "/About" component = { About } />
                <Route path = "/Thread" render = {
                  (props) => <Thread database = { this.database } />
                } />
                <Route component = { NotFound } />
              </Switch>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
