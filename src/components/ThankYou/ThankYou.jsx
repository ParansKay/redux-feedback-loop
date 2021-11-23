import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
//Material UI import
import FeelingSelector from '../Feeling/Feeling';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';


function ThankYou() {
  
    const collectResponses = useSelector(store => store.collectResponses); //looking at index.js for the value of collectResponses
    console.log('collectResponse -------->', collectResponses);
    const dispatch = useDispatch();

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
                        <h3>Thank you for your feedback!</h3>
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "right" }}> 
                {/* ^^ centers the button, but not the card itself */}
                {/* button needs to be wrapped inside of link, otherwise it won't work */}
                <Link to="/">
                    <Button className="redoFeedback" variant="contained" color="primary" size="large">Submit another feedback</Button>
                </Link>
                </CardActions>
            </Card>
        </Grid>      
        </Grid>
    </div>
</div>
)
}

export default ThankYou;