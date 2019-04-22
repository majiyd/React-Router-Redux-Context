import React from 'react'

const Context = React.createContext()

class ParentWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 1 };
  }
  componentWillUnmount() {
    console.log("unmounting")
  }
  
  render() {
    return (
      <Context.Provider
        value = {{
          state: this.state,
          increment: ()=>{
            this.setState({number: this.state.number + 1})
          },
          decrement: ()=>{
            this.setState({number: this.state.number - 1})
          },
        }}
      >
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
          {context=><button onClick={context.increment}>Increment +</button>}
        </Context.Consumer>
        <Context.Consumer>
          {context=><button onClick={context.decrement}>Decrement -</button>}
        </Context.Consumer>
        <Context.Consumer>
          {context=><p>{context.state.number}</p>}
        </Context.Consumer>
      </React.Fragment>
    );
  }
}

export default ParentWindow;