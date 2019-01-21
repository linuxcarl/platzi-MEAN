import express from  'express'
import { question } from './routes';
import bodyParser from 'body-parser'

const app = express()
var cors = require('cors')

//Permite leer datos que provengan desde formato JSON desde el cliente
app.use(bodyParser.json())
//Permite al server leer formato UTF8
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS')
    next()
  })
}

app.use('/api/questions',question, cors())

export default app