import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobDetails } from '../actions/index';
import Divider from 'material-ui/Divider';

class JobDetails extends Component {
  componentWillMount() {
    const { id } = this.props.match.params
    this.props.getJobDetails(id)
  }
  render() {
    //console.log(this.props.jobs);
    const { containerStyle } = styles;
    const {
      Title,
      Description,
      Headquarters,
      Website,
      Posted
    } = this.props.jobs.jobDetails
    return (
      <div style={containerStyle}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <h1>{Title}</h1>
            <h4>Posted {Posted}</h4>
            <h3>Company Name</h3>
            <h3>Headquarters: {Headquarters}</h3>
            <a href={Website} target='_blank'>{Website}</a>
          </div>
          <div>
            <img src={`//logo.clearbit.com/${Website}`} alt="Company Logo"></img>
          </div>
        </div>
        <Divider />
        <p>{Description}</p>
      </div>
    )
  }
}

const styles = {
  containerStyle: {
    width: 60 + '%',
    margin: '0 auto'
  }
}

const mapStateToProps = state => {
  const { jobs } = state;
  return { jobs }
}

export default connect(mapStateToProps, { getJobDetails })(JobDetails)
