const express = require('express')
const app = express()
const morgan = require('morgan')

require('../config/db');


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const courseRoute = require('../routers/course.route')




var cors = require('cors')

app.use(cors())
app.use(morgan('dev'))




app.use( '/allcoures',courseRoute)





//root router
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
//404 error hendel
  app.use((req,res,next) => {
    res.status(404).json({message: 'Data in not Found'})
  })

// server error hendel
  app.use((error,req,res,next) => {
    res.status(500).json({message: error.message})
  })
  module.exports = app 