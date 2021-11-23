import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import '../App/App.css'
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
import { BrowserRouter, Link } from 'react-router-dom'; 
import { Routes, Route } from 'react-router';

function App(props) {
  
    const dispatch = useDispatch(); //this code allows us to call the redux listener

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <BrowserRouter>
        <Routes>
          {/* list all the routes together as opening separate routes for each route does not work */}
           <Route path="/" element={ <Feeling/> }></Route>
           <Route path="/understanding" element={ <Understanding/> }></Route>
           <Route path="/support" element={ <Support/> } ></Route>
           <Route path="/comments" element={ <Comments/> } ></Route>
           <Route path="/review" element={ <Review/> } ></Route>
           <Route path="/thankyou" element={ <ThankYou/> } ></Route>
           <Route path="/admin" element={ <Admin/> } ></Route>
        </Routes>
        </BrowserRouter>
</div>
  );
}

export default App;
