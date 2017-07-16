import React from 'react';

const JobPage = (props) => {
  return (
    <div>
      Hello, {props.pageName}
      {
        props.pageName === "Development"
        ?
        <h1>Welcome to Dev</h1>
        :
        <h1>I dont know where you are</h1>

      }
    </div>
  )
}

export default JobPage
