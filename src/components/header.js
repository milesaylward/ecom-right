import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Logo from '../images/LogoEcomRight.png';
import Radium from 'radium';

const styles = {
  containerStyle: {
    padding: '20px 0',
    backgroundColor: '#E8F2F9',
  },
  logoSearch: {
    width: 80 + '%',
    margin: '0 auto'
  },
  logoStyle: {
    display: 'block',
    width: 200,
    margin: '0 auto'
  },
  searchStyle: {
    display: 'block',
    margin: '0 auto'
  }
}

const testData = [
  "Development",
  "Design",
  "Marketing",
  "Customer Success",
  "Other"
]

const { containerStyle, logoStyle, logoSearch, searchStyle } = styles;

const Header = () => (
  <div style={containerStyle}>
    <div style={logoSearch}>
      <img src={Logo} style={logoStyle} alt='Ecom Right Logo'></img>
      <h3 style={{fontSize: 18, textAlign: 'center', marginTop: 30}}>The best solution in finding your next job in the world of Ecommerce</h3>
      <AutoComplete
        floatingLabelText="Search jobs by tags"
        filter={AutoComplete.fuzzyFilter}
        dataSource={testData}
        maxSearchResults={5}
        style={searchStyle}
      />
    </div>
  </div>
)

export default Radium(Header);
