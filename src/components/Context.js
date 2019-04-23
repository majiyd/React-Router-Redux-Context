import React from 'react'
import large from '../styles/Button.module.css'
import context from '../styles/Text.module.css'
let styles = {}
Object.assign(styles, context, large)

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
          {context=><button className={styles.large} onClick={context.increment}>+</button>}
        </Context.Consumer>
        <Context.Consumer>
          {context=><button className={styles.large} onClick={context.decrement}> - </button>}
        </Context.Consumer>
        <Context.Consumer>
          {context=><p className={styles.context}>{context.state.number}</p>}
        </Context.Consumer>
      </React.Fragment>
    );
  }
}

export default ParentWindow;