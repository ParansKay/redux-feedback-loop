import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';


function CheckOut() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>CheckOut</h1>
    </div>
  )
}

export default CheckOut;