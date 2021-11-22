const express = require("express");
const router = require( 'express' ).Router();
const feedbackRouter = express.Router();
const pool = require("../modules/pool");

//POST ROUTE
// router.post('/', (req, res) => {
//   console.log( 'POST route hit!');
//   let queryString = 'INSERT INTO feedback ( "feeling", "understanding", "support", "comments" ) VALUES ( $1, $2, $3, $4 )';
//   let values = [ req.body.feeling, req.body.understanding, req.body.support, req.body.comments ];
//   pool.query( queryString, values ).then( (results)=>{
//       res.sendStatus( 201 )
//   }).catch( (err)=>{
//       console.log( err );
//       res.sendStatus( 500 );
//   })
// }); // END POST Route

//GET ROUTE
router.get('/', (req, res) => {
  console.log('GET /feedback');
  pool.query('SELECT * from "feedback" ORDER BY date DESC;').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error GET /feedback', error)
      res.sendStatus(500);
  });
}) // end GET route



module.exports = feedbackRouter;