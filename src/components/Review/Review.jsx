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
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//make sure to ask why we pass the props argument in here
function Review(props) {
  
    const dispatch = useDispatch();
    const collectResponses = useSelector(store => store.collectResponses); //looking at index.js for the value of collectResponses
    
      //creating a function that console logs when we have returned to the previous page
      const goBack = ()=>{
        console.log( 'In goBack—going back to previous page!' )
    }

    const theme = createMuiTheme({
        Typography: {
          fontFamily: [
            'oxygen',
            'noto',
          ].join(','),
        },});

    // const handleGet=()=>{
    // axios.get('/feedback').then( ( response )=>{
    //     console.log( response )
    //     setFeedbackList( response.data );
    // }).catch( ( error )=>{
    // })
    // }
    //END handleGet

    // POST ROUTE 
    const handlePost = () =>{
        console.log( 'in handlePost' );
        axios.post( `/feedback`, collectResponses ).then( (response)=>{
            //send a dispatch to empty out the store
            dispatch({ type: 'EMPTY_REDUCER' });
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
                    <createMuiTheme>
                    <Typography gutterBottom variant="h5" component="div" >
                        <h3>Let's review your feedback!</h3>
                    </Typography>
                    <div className="listReview">
                    <Typography className="reviewItems" align="left" variant="h6">Feelings: {collectResponses.Feeling} </Typography>
                    <br />
                    <Typography className="reviewItems" align="left" variant="h6">Understanding: {collectResponses.Understanding} </Typography>
                    <br />
                    <Typography className="reviewItems" align="left" variant="h6">Support: {collectResponses.Support} </Typography>
                    <br />
                    <Typography className="reviewItems" align="left" variant="h6">Comments: {collectResponses.Comments} </Typography>
                    <br />
                    </div>
                    </createMuiTheme>
                </CardContent>
                <CardActions sx={{ justifyContent: "right" }}> 
                {/* ^^ centers the button, but not the card itself */}
                {/* button needs to be wrapped inside of link, otherwise it won't work */}
                    <Link to="/comments">
                        <Button size="large" onClick={goBack} variant="outlined" color="secondary" fontSize="large">go back</Button>
                    </Link>
                    <Link to="/thankyou">
                        <Button className="submitbtn" variant="contained" color="secondary" size="large" onClick={handlePost}>Submit</Button>
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