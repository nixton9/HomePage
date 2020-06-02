const express = require('express')
const router = express.Router()
const cors = require('cors')
const axios = require('axios')

router.use(cors())

router.get('/projects/:key', (req, res) => {
  const url = 'https://api.todoist.com/rest/v1/projects'

  axios(url, { headers: { Authorization: `Bearer ${req.params.key}` } })
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((err) => {
      res.status(500).send('Error retrieving Todoist projects')
    })
})

router.get('/tasks/:key', (req, res) => {
  const url = 'https://api.todoist.com/rest/v1/tasks'

  axios(url, { headers: { Authorization: `Bearer ${req.params.key}` } })
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((err) => {
      res.status(500).send('Error retrieving Todoist tasks')
    })
})

router.post('/tasks/close/:task/:key', (req, res) => {
  const url = `https://api.todoist.com/rest/v1/tasks/${req.params.task}/close`
  axios
    .post(url, {}, { headers: { Authorization: `Bearer ${req.params.key}` } })
    .then((response) => {
      res.status(200).send('Task closed')
    })
    .catch((err) => {
      res.status(500).send('Error completing task')
    })
})

router.post('/tasks/:key', (req, res) => {
  const url = 'https://api.todoist.com/rest/v1/tasks'
  axios
    .post(
      url,
      {
        content: req.body.content,
        due_date: req.body.due_date,
        project_id: req.body.project_id
      },
      {
        headers: {
          Authorization: `Bearer ${req.params.key}`
        }
      }
    )
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((err) => {
      res.status(500).send('Error adding task')
    })
})

module.exports = router
