import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
// Material UI imports
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

function UnderstandingSelector() {

    // const reducerName = useSelector(store => store.reducerName);
    //the next three line of code are the same for EVERY component. This is a one way road to the store 
    const collectResponses = useSelector(store => store.collectResponses); //looking at index.js for the value of collectResponses
    console.log('collectResponse -------->', collectResponses);
    const dispatch = useDispatch();

    const [newUnderstanding, setNewUnderstanding] = useState(0);
    
    const addUnderstanding = (event) => {
        setNewUnderstanding(event.target.value);
      console.log( 'understanding is at:', newUnderstanding );
    };
    
    const buttonClick = ()=>{
        console.log( 'in buttonClick' );
        dispatch({type: 'ADD_UNDERSTANDING',
        payload: newUnderstanding }) //everything inside the ( ) is an action that the dispatch call takes to the store
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
                            <h3>How well are you understanding the material today?</h3>
                        </Typography>

                        <FormControl className="formClass" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="understanding-select-label">Today my understanding is at...</InputLabel>
                                <Select
                                    labelId="understanding-select-label"
                                    // this ID needs to be the same as the ID of InputLabel ^^
                                    id="understanding-select"
                                    // but this id needs to be different from the other two above ^^
                                    value={newUnderstanding}
                                    label="Understanding"
                                    //when the user selects a value, run addUnderstanding (defined aboved)
                                    onChange={( event )=>addUnderstanding( event )}
                                >
                                    <MenuItem value="">
                                        <em>Today my understanding is at...</em>
                                        {/* this is an empty value. when a user clicks on this, the selector box will go back to displaying the label */}
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                                <FormHelperText>Rate your understanding! 5 is highest and 1 is the lowest.</FormHelperText>
                                {/* this places a "helper text" for the user under the select box */}
                        </FormControl>
                    </CardContent>    
                    <CardActions sx={{ justifyContent: "right" }}> 
                    {/* ^^ centers the button, but not the card itself */}
                     {/* button needs to be wrapped inside of link, otherwise it won't work */}
                        <Link to="/support">
                            <Button className="pizzItemButton" variant="contained" color="primary" size="large" onClick={buttonClick}>Next</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>      
            </Grid>
        </div>
        <div>
            <h2>JSON.stringify {newUnderstanding}</h2>
        </div>
    </div>
  )
  }

export default UnderstandingSelector;