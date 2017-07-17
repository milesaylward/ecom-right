import React, { Component } from 'react';
import Radium from 'radium';

class JobCard extends Component {

  renderTags = (style) => {
    const { tags } = this.props.data;
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
    console.log(tag);
  }

  render() {
    const { cardStyle, titleStyle, chipStyle } = styles;
    const { Title, Posted } = this.props.data
    return (
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

export default Radium(JobCard);
