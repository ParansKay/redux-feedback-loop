import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
//Material UI import
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@material-ui/core/TextField';

function CommentInput() {

    // const reducerName = useSelector(store => store.reducerName);
    //the next three line of code are the same for EVERY component. This is a one way road to the store 
    const collectResponses = useSelector(store => store.collectResponses); //looking at index.js for the value of collectResponses
    console.log('collectResponse -------->', collectResponses);
    const dispatch = useDispatch();

     // previously, I used useState(''). That sets the input selector to 0 everytime we go back a page, so I modified it to set it's value to the properties of our reducer :) 
    const [newComment, setNewComment] = useState(collectResponses.Comments);
    
    const addComment = (event) => {
        setNewComment(event.target.value);
      console.log( 'new comment is:', newComment );
    };
    
    const buttonClick = ()=>{
        console.log( 'in buttonClick' );
        dispatch({type: 'ADD_COMMENT',
        payload: newComment }) //everything inside the ( ) is an action that the dispatch call takes to the store
    }

     //creating a function that console logs when we have returned to the previous page
     const goBack = ()=>{
        console.log( 'In goBack—going back to previous page!' )
    }

  return (
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
                            <h3>Write down your comments below!</h3>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <TextField
                            id="outlined-multiline-static"
                            label="Write your comments here"
                            multiline
                            //lets figure out how to make this box larger!!!!!!!!!!!
                            rows={4}
                            defaultValue={collectResponses.Comments}
                            onChange={ ( event )=>addComment( event )}
                            />
                    </CardContent>    
                    <CardActions sx={{ justifyContent: "right" }}> 
                    {/* ^^ centers the button, but not the card itself */}
                        <div className="NextPageButton">
                            <Link to="/support">
                                <Button size="large" onClick={goBack} variant="outlined" color="secondary" fontSize="large">go back</Button>
                            </Link>
                            <Link to="/review">
                                <Button className="next" variant="contained" color="secondary" size="large" onClick={buttonClick}>Next</Button>
                            </Link>
                        </div>
                    </CardActions>
                </Card>
            </Grid>      
            </Grid>
        </div>
        {/* <div>
            <h2>JSON.stringify {newComment}</h2>
        </div> */}
    </div>
  )
  }

export default CommentInput;