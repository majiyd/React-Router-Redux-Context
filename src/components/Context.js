import React from 'react'

const Context = React.createContext()

class ParentWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 1 };
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        <ChildWindow />
      </Context.Provider>
    );
  }
}

class  ChildWindow extends React.Component {
  render() { 
    return ( 
      <React.Fragment>
        <Context.Consumer>
          {context=><p>{context.number}</p>}
        </Context.Consumer>
      </React.Fragment>
    );
  }
}

export default ParentWindow;