import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore} from 'redux'
import './index.css';
import App from './Components/App';
import movies from './reducers';


const store=createStore(movies);
console.log(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);


