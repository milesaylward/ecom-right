import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Radium from 'radium';

class JobCard extends Component {

  renderTags = (style) => {
    const { tags } = this.props.jobs;
    if(tags) {
        let tagButton = tags.map((tag, i) => {
          return (
            <div value={tag} key={i} style={style} onClick={() => this.tagClick(tag)}>
              {tag}
            </div>
          )
        });

        return tagButton;
      }
      return;
  }

  tagClick = (tag) => {
    //console.log(tag);
  }

  render() {

    const { Title, Posted } = this.props.job;
    const { id } = this.props;
    const {cardStyle, chipStyle, titleStyle } = styles;
    return (
      <Link to={`jobs/${id}/${Title}`} >
        <div style={cardStyle}>
          <div>
            <p style={titleStyle}>{Title}</p>
            <p>Company Name</p>
          </div>
          <div style={{display: 'flex'}}>
            {this.renderTags(chipStyle)}
          </div>
          <p>{Posted}</p>
        </div>
      </Link>
    )
  }
}

const styles = {
  cardStyle: {
    height: 50,
    margin: '20px 0',
    fontFamily: 'Montserrat',
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#E8F2F9'
    }
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  chipStyle: {
    backgroundColor: 'transparent',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
    padding: 5,
    width: 100,
    height: 15,
    margin: 5,
    ':hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  }
}

const mapStateToProps = state => {
  const { jobs } = state.jobs

  return { jobs }
}

export default connect(mapStateToProps)(Radium(JobCard));
