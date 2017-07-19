import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router';
import { Route, withRouter } from 'react-router-dom';
import JobPage from './components/JobPage';
import JobDetails from './components/jobDetails';
import Home from './components/home'

class Routes extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jobs/:id/:title" component={JobDetails} />
        <Route path='/:pageName' component={JobPage} />
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  const { jobs } = state.jobs

  return { jobs }
}

export default withRouter(connect(mapStateToProps)(Routes));
