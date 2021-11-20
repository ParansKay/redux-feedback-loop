import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
// import redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; //this essentially acts as a console log 
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';


// create a store
// const storeInstance = createStore(
//     combineReducers(
      
//        feeling
      
//     ),
//     applyMiddleware(
//       logger
//     )
//   );


ReactDOM.render(
    //   <Provi<Provider>
        <App />,
    document.getElementById('root'));
registerServiceWorker();
reportWebVitals();

