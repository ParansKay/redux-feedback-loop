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

// reducers are defined below. THIS IS THE ORIGIN of the "collectResponses" reducer. All other components will look to this function to run their actions. 
// "state" does not have to be "state" it could be "taco"
const collectResponses = ( state={
    //this way we can pass multiple values once via an object
    Feeling: 0,
    Understanding: 0, 
    Support: 0,
    Comments: ''
    //action can be taco. It's an argument that can be used inside function. NOTE! The dispatch call with the type and payload is carrying the action from other components to our index (because that's where the store lives)
}, action ) =>{
    // if the action type carried over from a component is named 'ADD_FEELING'
    if( action.type === 'ADD_FEELING' ){
        // set state to everything state is, except feeling. Where you find feeling(in our state object), replace the property value with action.payload
        state={...state, Feeling: action.payload}   
    }
    // if the action type carried over from a component is named 'ADD_UNDERSTANDING'
    else if( action.type === 'ADD_UNDERSTANDING' ){
        // set state to everything state is, except understanding. Where you find understanding(in our state object), replace the property value with action.payload
        state={...state, Understanding: action.payload}
    }
    // if the action type carried over from a component is named 'ADD_SUPPORT'
    else if( action.type === 'ADD_SUPPORT' ){
        // set state to everything state is, except understanding. Where you find support(in our state object), replace the property value with action.payload
        state={...state, Support: action.payload} 
    }
    // if the action type carried over from a component is named 'ADD_SUPPORT'
    else if( action.type === 'ADD_COMMENT'){
        // set state to everything state is, except understanding. Where you find support(in our state object), replace the property value with action.payload
        state={...state, Comments: action.payload}
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

