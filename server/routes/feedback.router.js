const express = require("express");
//naming is long so I can remember which router const is for what component :D 
const feedbackRouterRoute = express.Router();
const pool = require("../modules/pool");

//POST ROUTE
feedbackRouterRoute.post('/', (req, res) => {
  console.log( 'POST route hit!', req.body);
  let queryString = 'INSERT INTO "feedback" ( "feeling", "understanding", "support", "comments" ) VALUES ( $1, $2, $3, $4 )';
  let values = [ req.body.Feeling, req.body.Understanding, req.body.Support, req.body.Comments ];
  pool.query( queryString, values ).then( (result)=>{
      res.sendStatus( 201 )
  }).catch( (err)=>{
      console.log( err );
      res.sendStatus( 500 );
  })
}); // END POST Route

//GET ROUTE
feedbackRouterRoute.get('/', (req, res) => {
  console.log('GET /feedback');
  pool.query('SELECT * from "feedback" ORDER BY date DESC;').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error GET /feedback', error)
      res.sendStatus(500);
  });
}) // end GET route



module.exports = feedbackRouterRoute;