import React, { Component } from 'react';
import firebase from 'firebase';
import { StyleRoot } from 'radium';

import NavBar from './navBar';
import Header from './header';
import '../index.css';
import config from '../firebaseConfig';

class App extends Component {
  constructor() {
    super();

    this.state = {
      testData: [
        "Development",
        "Design",
        "Marketing",
        "Customer Success",
        "Other"
      ]
    }
  }

  componentWillMount() {

    firebase.initializeApp(config);
  }

  render() {
    const { testData } = this.state;
    return (
      <StyleRoot>
        <Header />
        <NavBar data={testData}/>
        {this.props.children}
      </StyleRoot>
    )
  }
}

export default App;
