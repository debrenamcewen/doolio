const connectString = `postgres://${process.env.USER}@localhost:5432/dooliodb`
const pgp = require('pg-promise')()
const db = pgp( connectString )

const userSignUp = 'INSERT INTO "Users" ("UserName", "Email", "Password") VALUES ($1, $2, $3) RETURNING "UserID"'


const User = {
  insert: user => db.oneOrNone( userSignUp, [ user.UserName, user.Email, user.Password ] )
}

const Project = {
  insert: project => db.oneOrNone(createProject)
}

module.exports = { User }
