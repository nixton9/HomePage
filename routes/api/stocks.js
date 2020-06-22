const express = require('express')
const router = express.Router()
const cors = require('cors')
const axios = require('axios')

router.use(cors())

router.get('/indexes/:ticker/:date/:key', (req, res) => {
  const url = `https://api.tiingo.com/tiingo/daily/${req.params.ticker}/prices?startDate=${req.params.date}&token=${req.params.key}`

  axios(url)
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((err) => {
      res.status(500).send('Error retrieving stock data')
    })
})

module.exports = router
