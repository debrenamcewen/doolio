const connectString = `postgres://${process.env.USER}@localhost:5432/dooliodb`
const pgp = require('pg-promise')()
const db = pgp( connectString )

const userSignUp = 'INSERT INTO "Users" ("UserName", "Email", "Password") VALUES ($1, $2, $3) RETURNING "UserID"'
const createProject = 'INSERT INTO "Projects" ("Name", "Notes", "UserID_Users") VALUES ($1, $2, $3) RETURNING "ProjectID"'


const grabProjects = 'SELECT "Name" FROM "Projects"'
const User = {
  insert: user => db.oneOrNone( userSignUp, [ user.UserName, user.Email, user.Password ] )
}

const Project = {
  insert: project => db.oneOrNone(createProject,[project.Name,project.Notes,1]),
  //SERAFIN SUBTRACTED: getAllProjects: () =>  {
  getAllProjects: (callback) =>  { //SERAFIN ADDED
    db.any('SELECT "Name" FROM "Projects"')
      .then( (projects) => {
        console.log("success", projects);
        // SERAFIN SUBTRACTED: return projects;
        callback(projects) // SERAFIN ADDED
      })
      .catch( (error) => {
        console.error("error", error);
      })
    }
}

module.exports = { User,Project }
