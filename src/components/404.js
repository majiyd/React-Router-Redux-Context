import React from 'react'

export default class NotFound extends React.Component {
  
  render() {
    const location = this.props.location
    return (
      <h1>Resource Not Found at {location.pathname}</h1>
    );
  }
}
