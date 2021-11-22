import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
import axios from 'axios';
//Material UI import
import FeelingSelector from '../Feeling/Feeling';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';

//make sure to ask why we pass the props argument in here
function Review(props) {
  
    const dispatch = useDispatch();
    const collectResponses = useSelector(store => store.collectResponses); //looking at index.js for the value of collectResponses
    
    // const handleGet=()=>{
    // axios.get('/feedback').then( ( response )=>{
    //     console.log( response )
    //     setFeedbackList( response.data );
    // }).catch( ( error )=>{

    // })
 //END handleGet

// POST ROUTE 
    const handlePost = () =>{
        console.log( 'in handlePost' );
        axios.post( `/feedback`, collectResponses ).then( (response)=>{
            //send a dispatch to empty out the store
            dispatch({ type: 'EMPTY' });
          }).catch((err)=>{
             alert('POST Failed');
             console.log(err);
          });
    } //END handlePost

return(
  <div>
    <div>
    <Grid
        container
        alignItems="center"
        justify="center"
        style={{ width: '100%', height: 'auto'}}
        >
        <Grid item xs={7}>
        {/* the number inside {} indicates how wide the card can be. Weird. */}
            <Card className="card" variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h3>Let's review your feedback!</h3>
                    </Typography>
                    <Typography align="center" variant="h5">Feelings: {collectResponses.Feeling} </Typography>
                    <br />
                    <Typography align="center" variant="h5">Understanding: {collectResponses.Understanding} </Typography>
                    <br />
                    <Typography align="center" variant="h5">Support: {collectResponses.Support} </Typography>
                    <br />
                    <Typography align="center" variant="h5">Comments: {collectResponses.Comments} </Typography>
                    <br />
                </CardContent>
                <CardActions sx={{ justifyContent: "right" }}> 
                {/* ^^ centers the button, but not the card itself */}
                {/* button needs to be wrapped inside of link, otherwise it won't work */}
                <Link to="/thankyou">
                    <Button className="pizzItemButton" variant="contained" color="primary" size="large" onClick={handlePost}>Submit</Button>
                </Link>
                </CardActions>
            </Card>
        </Grid>      
        </Grid>
    </div>
</div>
)
}

export default Review;