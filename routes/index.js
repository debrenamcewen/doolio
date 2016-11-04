var express = require('express');
var router = express.Router();
const { User } = require( '../database/sql' )

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/pro', function(req, res, next) {
  const projects = [
    {
      id: 1234,
      Name: 'Build a go cart',
    },
    {
      id: 434,
      Name: 'buy a new dress',
    },
    {
      id: 3232,
      Name: 'pet a goat',
    },
    {
      id: 3232,
      Name: 'slap a fish',
    }
  ]
  res.render('dashboard', {
    title: 'Express',
    projects: projects
  });
  // getAllProjects()
  //   .then(projects => {
  //     res.render('dashboard', {
  //       title: 'Express',
  //       projects: projects
  //     });
  //   })
  //   .catch(error => {
  //     res.send('THERE WAS AN ERROR GETTING PROJECTS')
  //   })
})

router.get('/tasks', function(req, res, next) {
  res.render('tasks', { title: 'Express' });
})


router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Express' });
})


router.post( '/user/signup', ( request, response ) => {
  const { body } = request
  User.insert( body )
    .then( user => response.redirect( '/dashboard' ) )
    .catch( error => response.json( { error } ) )

})

router.get( '/user/login', (request, response ) => {
  res.render('login', {
    email: ''
  })
})

router.post( '/user/login', ( request, response ) => {
  const email = request.body.email
  const password = request.body.password
  db.authenticateUser( email, password )
  .then( userId => {
    if (userId) {
      request.session.userId = userId
      response.redirect('/dashboard')
    } else {
      response.render('login')
        error: 'Email or Password not Found'
    }
  })
})

router.post('/project/newproject',(request,response) => {
  const {body} = request
  Project.insert(body)
    .then(project => response.redirect('/dashboard'))
    .catch(error => response.json({error}))
})

module.exports = router
