import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Radium from 'radium';

const styles = {
  buttonStyles: {
    borderRadius: 10,
    display: 'block',
    margin: '10px auto'
  },
  containerStyle: {
    backgroundColor: '#E8F2F9',
    padding: 30,
    width: 60 + '%',
    borderRadius: 10,
    margin: '30px auto'
  }
}

class Home extends Component {

  render() {
    return (
      <div>
        <div style={styles.containerStyle}>
          <h4 style={{lineHeight: 2, fontSize: 20, textAlign: 'center'}}>Searching for great employees? Post a job for free to reach thousands of ecommerce workers.</h4>
          <FlatButton
            className='post-job-btn'
            label='Post Jobs'
            backgroundColor='#00B3EC'
            hoverColor="white"
            labelStyle={{color: 'white'}}
            style={styles.buttonStyles}
          />
        </div>
      </div>
    )
  }
}

export default Radium(Home);
