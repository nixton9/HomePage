const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || '8000'

const dribbbleRoutes = require('./routes/api/dribbble')
const todoistRoutes = require('./routes/api/todoist')
const newsRoutes = require('./routes/api/news')
const stocksRoutes = require('./routes/api/stocks')

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use('/api/dribbble', dribbbleRoutes)
app.use('/api/todoist', todoistRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/stocks', stocksRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

server.listen(port, () => {
  console.log(`Homepage running on Port ${port}`)
})
