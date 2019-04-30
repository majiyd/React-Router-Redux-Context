import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './reset.css'
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const initialState = {
  count: 0
}
function reducer(state=initialState, action){
  switch (action.type){
    case 'INCREMENT':
      return{
        count: state.count + 1
      };
    case 'DECREMENT':
      return{
        count: state.count - 1
      };
    case 'RESET':
      return{
        count: 0
      };
    default:
      return state
  }
}
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
