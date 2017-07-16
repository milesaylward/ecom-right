import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import firebase from 'firebase'
import { StyleRoot } from 'radium';

import NavBar from './navBar'
import Home from './home'
import JobPage from './JobPage'
import Header from './header'
import '../index.css'
import config from '../firebaseConfig'

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

  getRoutes = () => {
    const { testData } = this.state;
    let routes = testData.map((r, i) => {
      return <Route exact path={`/${r}`} key={i} component={() => (<JobPage pageName={r}/>)} />
    });

    return routes;
  }
  render() {
    const { testData } = this.state;
    return (
      <StyleRoot>
        <Header />
        <NavBar data={testData}/>
        <main>
          <Route exact path="/" component={Home} />
          {this.getRoutes()}
        </main>
      </StyleRoot>
    )
  }
}

export default App
