import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'

import {
  HomeIcon,
  DevelopmentIcon,
  DesignIcon,
  MarketingIcon,
  CustomerSucessIcon,
  OtherIcon
} from './svgIcons'

const Styles = {
  buttonStyles: {
    padding: 0,
    height: 69,
    width: 69,
    color: '#777877',
    border: 50
  },
  navBarStyles: {
    display: 'flex',
    justifyContent: 'space-around',
    width: 70 + '%',
    margin: '30px auto'
  }
};

const { buttonStyles, navBarStyles } = Styles;

class NavBar extends Component {

  getIcons = (page) => {
    switch (page) {
      case 'Development':
        return <DevelopmentIcon />
      case 'Design':
        return <DesignIcon />
      case 'Marketing':
        return <MarketingIcon />
      case 'Customer Success':
        return <CustomerSucessIcon />
      case 'Other':
        return <OtherIcon />
      default:
        return <HomeIcon />
    }
  }

  getLinks(){
    const { data } = this.props;
    let links = data.map((route, index) => {
      return (
        <Link to={route} key={index} title={`Ecom Right | ${route}`}>
          <IconButton
            tooltip={route}
            tooltipStyles={{marginLeft: 10}}
            style={buttonStyles}
            touch={true}>
            {this.getIcons(route)}
          </IconButton>
        </Link>
      );
    });

    return links;
  }
  render() {
    return (
      <div style={navBarStyles}>
        <Link to='/'>
          <IconButton
            tooltip="Home"
            touch={true}
            style={buttonStyles}
            tooltipStyles={{marginLeft: 10}}>
            <HomeIcon />
          </IconButton>
        </Link>
        {this.getLinks()}
      </div>
    )
  }
}

export default NavBar
