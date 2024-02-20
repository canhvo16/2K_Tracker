//Loads express module so we can use it
const express = require('express')

//Creates object with express framework API
const app = express()

//Loads cors module so we can use it
const cors = require('cors')

//Loads the routes defined in AppRouter.js file
const AppRouter = require('./routes/AppRouter.js')

//Defines environment variable to tell server waht port to listen on
const PORT = process.env.PORT || 3001

//Use cors
app.use(cors())

/******** Allows POST and PUT requests **********/

//Accepts data in the form of JSON
app.use(express.json())
//Accepts data in the form of strings or arrays
app.use(express.urlencoded({ extended: true }))

/************************************************/

//Route to test Server
app.get('/', (req, res) => res.json({ message: "Server is running buddy :)"}))

//Use the routes loaded in AppRouter
app.use('/api', AppRouter)

//Message in the console to know what port the server is running on
app.listen(PORT, () => console.log(`Server working on ${PORT}`))