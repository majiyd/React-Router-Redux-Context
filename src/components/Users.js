import React from "react";

export default class Users extends React.Component {
  render() {
    const {params} = this.props.match
    console.log(this.props);
    return (
      <React.Fragment>
        <h1>User {params.id}</h1>
      </React.Fragment>
    );
  }
}
