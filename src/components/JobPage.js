import React, { Component } from 'react';

class JobPage extends Component{
  render() {
    const { pageName } = this.props.match.params
    return (
      <div>
        Hello, {pageName}
      </div>
    )
  }
}

export default JobPage
