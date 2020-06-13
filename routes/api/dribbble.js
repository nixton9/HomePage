const express = require('express')
const router = express.Router()
const cors = require('cors')
const axios = require('axios')
const cheerio = require('cheerio')

router.use(cors())

router.get('/', (req, res) => {
  const url = 'https://dribbble.com/'

  axios(url)
    .then((response) => {
      const html = response.data
      const $ = cheerio.load(html)
      const shots = $('#main > ol > li')
      const dribbleUrl = 'https://dribbble.com'
      const dribbbleShots = []

      shots.each(function () {
        const authorName = $(this)
          .find('.user-information .display-name')
          .text()
        const authorImage = $(this)
          .find('.user-information img.photo')
          .attr('src')
        const authorUrl = $(this).find('.user-information a.url').attr('href')
        const title = $(this).find('.shot-title').text()
        const url = $(this).find('.dribbble-link').attr('href')
        const image = $(this).find('picture source').attr('srcset')
        dribbbleShots.push({
          authorName,
          authorImage,
          authorUrl: dribbleUrl + authorUrl,
          title,
          url: dribbleUrl + url,
          image
        })
      })

      res.status(200).json(dribbbleShots)
    })
    .catch((err) => {
      res.status(500).send('Erro retrieving Dribbble shots')
    })
})

router.get('/categories', (req, res) => {
  const url = 'https://dribbble.com/'

  axios(url)
    .then((response) => {
      const html = response.data
      const $ = cheerio.load(html)
      const categories = $('.filter-categories li.category')
      const dribbbleCategories = []

      categories.each(function () {
        const value = $(this).find('a').attr('data-value')
        const name = $(this).find('a').attr('title')

        dribbbleCategories.push({
          value,
          name
        })
      })

      res.status(200).json(dribbbleCategories)
    })
    .catch((err) => {
      res.status(500).send('Erro retrieving Dribbble categories')
    })
})

router.get('/:category', (req, res) => {
  const category = req.params.category
  const url = `https://dribbble.com/shots/popular/${category}`

  axios(url)
    .then((response) => {
      const html = response.data
      const $ = cheerio.load(html)
      const shots = $('#main > ol > li')
      const dribbleUrl = 'https://dribbble.com'
      const dribbbleShots = []

      shots.each(function () {
        const authorName = $(this)
          .find('.user-information .display-name')
          .text()
        const authorImage = $(this)
          .find('.user-information img.photo')
          .attr('src')
        const authorUrl = $(this).find('.user-information a.url').attr('href')
        const title = $(this).find('.shot-title').text()
        const url = $(this).find('.dribbble-link').attr('href')
        const image = $(this).find('picture source').attr('srcset')

        dribbbleShots.push({
          authorName,
          authorImage,
          authorUrl: dribbleUrl + authorUrl,
          title,
          url: dribbleUrl + url,
          image
        })
      })

      res.status(200).json(dribbbleShots)
    })
    .catch((err) => {
      res.status(500).send('Erro retrieving Dribbble shots')
    })
})

module.exports = router
