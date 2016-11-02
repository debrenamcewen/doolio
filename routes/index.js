var express = require('express');
var router = express.Router();
const { User } = require( '../database/queries' )

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
})

router.post( '/user/signup', ( request, response ) => {
  const { body } = request
  User.insert( body )
    .then( user => response.redirect( '/dashboard' ) )
    .catch( error => response.json( { error } ) )

})

module.exports = router
