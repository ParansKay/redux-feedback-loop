import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import '../App/App.css'
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'

function App(props) {
  
    // const dispatch = useDispatch(); //this code allows us to call the redux listener


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feeling/>
      <Understanding/>
      <Support/>
    </div>
  );
}

export default App;
