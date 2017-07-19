import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfinteScroll from 'redux-infinite-scroll';

import JobCard from './jobCard';
import loadingGif from '../images/loader.gif';

import { fetchJobs } from '../actions/index';

let jobNum = 5;

class JobList extends Component {
  componentDidMount() {
    this.props.fetchJobs(jobNum);
  }

  renderJobs = () => {
    const { jobs } = this.props;
      let jobCards = jobs.map((job, i) => {
        return (
          <JobCard key={i} id={i} job={job}/>
        )
      })

      return jobCards
  }

  loadMoreJobs() {
    /*if(!this.props.loading) {
      jobNum +=10
      this.props.fetchJobs(jobNum);
    } */
  }

  render() {
    const { containerStyle, loaderStyle } = styles;
    const loader =  (
      <img style={loaderStyle} src={loadingGif} alt='loader' />
    )
    return (
      <div style={containerStyle}>
        {
          this.props.loading
          ?
          loader
          :
          <InfinteScroll
            loadMore={() => this.loadMoreJobs()}
            elementIsScrollable={false}
            loader={loader}
            loadingMore={this.props.newLoading}
          >
            {this.renderJobs()}
          </InfinteScroll>
        }
      </div>
    )
  }
}

const styles = {
  containerStyle: {
    display: 'block',
    width: 60 + '%',
    margin: '0 auto'
  },
  loaderStyle: {
    display: 'block',
    margin: '0 auto'
  }
}

const mapStateToProps = state => {
  const { loading, jobs, newLoading } = state.jobs
  return { jobs, loading, newLoading };
}

export default connect(mapStateToProps, { fetchJobs })(JobList);
