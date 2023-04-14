import React from 'react';
import ReactDOM from 'react-dom/client';
import {  legacy_createStore as createStore} from 'redux'
import './index.css';
import App from './Components/App';
import reducer from './reducers';
import { applyMiddleware } from 'redux';

const logger=function ({dispatch,getState}){
  return function(next){
    return function(action){
         console.log("ACTION_TYPE",action.type);
         next(action);
    }
  }
}
const store=createStore(reducer,applyMiddleware(logger));
console.log(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);


