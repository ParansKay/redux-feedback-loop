import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
// import redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; //provider provides the store to all the other components
import logger from 'redux-logger'; //this essentially acts as a console log 
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

// reducers
//defined here! Below. THIS IS THE ORIGIN
// state does not have to be "state" it could be taco
const collectResponses = ( state={
    //this way we can pass multiple values once via an object
    Feeling: 0,
    Understanding: 0, 
    Support: 0,
    Comments: ''
    //action can be taco. It's an argument that can be used inside function. NOTE! The dispatch call with the type and payload is carrying the action.
}, action ) =>{
    if( action.type === 'ADD_FEELING' ){
        // set state to everything state is, except feeling. Where you find feeling, replace with action.payload
     state={...state, Feeling: action.payload}   
    }
    else if( action.type === 'ADD_UNDERSTANDING' ){
        // set state to everything state is, except understanding. Where you find understanding, replace with action.payload
     state={...state, Understanding: action.payload}
    }
    else if( action.type === 'ADD_SUPPORT' ){
        state={...state, Support: action.payload} 
    }

    console.log( 'in collectResponses!', action.type, action.payload );
    
    // needs to be the same name as "state" from line 16
    return state;
}

// create a store
const storeInstance = createStore(
    combineReducers(
      // this still needs to reference a variable (defined up above^^)
       {collectResponses} //Feeling component reducer looks to this line for reference. This line looks to line 15 (const collectResponses)
      
    ),
    applyMiddleware(
      logger
    )
  );


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
reportWebVitals();

