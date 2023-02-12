import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

dotenv.config({})

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Express app')
})

app.get('/json-data', (req, res) => {
  res.status(200).json({
    status: 'OK',
    data: [
      { name: 'Vipul', age: 22 },
      { name: 'Rahul', age: 24 },
      { name: 'Sarthak', age: 21 }
    ]
  })
})

app.listen(PORT, () => {
  console.log('APP listening on port', PORT)
})
