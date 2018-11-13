import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';

import Thread from './Thread.js';

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize Firebase
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
      <Thread database = { this.database }/>
    );
  }
}

export default App;
