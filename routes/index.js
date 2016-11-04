var express = require('express');
var router = express.Router();
const { User,Project } = require( '../database/queries' )

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
  // SERAFIN ADDED:
  Project.getAllProjects( function(things) {
      console.log( "SERAFIN TEST:", things );
      res.render('projects', { title: 'Express', deliveredObject: things });
  }); // END OF SERAFIN ADDED

  /* SERAFIN SUBTRACTED
  const allProjects = Project.getAllProjects();
  console.log( "SERAFIN TEST:", allProjects );
  res.render('projects', { title: 'Express', allProjects: allProjects });
  */
})


router.post( '/user/signup', ( request, response ) => {
  const { body } = request
  User.insert( body )
    .then( user => response.redirect( '/projects' ) )
    .catch( error => response.json( { error } ) )

})

router.post('/projects/createProject',(request,response) => {
  const {body} = request
  Project.insert(body)
    .then(project => response.redirect('/projects'))
    .catch(error => response.json({error}))
})

module.exports = router
