const connectString = `postgres://${process.env.USER}@localhost:5432/dooliodb`
const pgp = require('pg-promise')()
const db = pgp( connectString )

//Insert Statments
const userSignUp = 'INSERT INTO "Users" ("UserName", "Email", "Password") VALUES ($1, $2, $3) RETURNING "UserID"'
const newProject = 'INSERT INTO "Projects" ("Name", "Notes", "UserID_Users") VALUES ($1, $2, $3) RETURNING "ProjectID"'

//Select Statements
// const currentUser = 'SELECT "UserID" from "Users" WHERE "UserName"=[[Currently Logged In User]]'


const User = {
  insert: user => db.oneOrNone( userSignUp, [ user.UserName, user.Email, user.Password ] )
}

// const Project = {
//   insert: project => db.oneOrNone(newProject, [project.Name, project.Notes])
// }

module.exports = { User }
