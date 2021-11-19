import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';


function Feeling() {
  
  // const reducerName = useSelector(store => store.reducerName);
//   const dispatch = useDispatch(); //for some reason unhappy about this line? 

  return (
    <div>
        <div className="CardStuff">
        <Grid
            container
            alignItems="center"
            justify="center"
            style={{ width: '100%', height: 'auto'}}
            >

            <Grid item xs={8}>
            {/* the number inside {} indicates how wide the card can be. Weird. */}
                <Card className="card" variant="outlined">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h2>How are you FEELING today?</h2>
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}> 
                    {/* ^^ centers the button, but not the card itself */}
                        <Button className="pizzItemButton" variant="contained" color="secondary" size="small">Next</Button>
                    </CardActions>
                </Card>
            </Grid>      
            </Grid>
        </div>
    </div>
  )
}

export default Feeling;