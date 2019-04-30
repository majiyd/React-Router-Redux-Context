import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles/Button.module.css'
import {increment, decrement} from '../actions/actions'

function mapStateToProps(state){
  return{
    count: state.count
  };
}
const mapDispatchToProps = {
  increment,
  decrement
}
class ReduxCounter extends React.Component {
  
  increment = ( )=>{
    this.props.increment();
  }
  decrement = ( )=>{
    this.props.decrement();
  }
  render() { 
    const textStyle = {
      margin: "30px 0px 0px 55px",
      fontSize: "45pt",
    }
    return (  
      <React.Fragment>
        <h1>React Redux Counter</h1>
        <div onClick={this.increment} className={styles.redux_button}>+</div>
        <div style={textStyle}>{this.props.count}</div>
        <div onClick={this.decrement} className={styles.redux_button}>-</div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);