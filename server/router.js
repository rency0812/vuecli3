const express = require('express')
const router = express.Router()
const api = require('./api')

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next)
})

router.get('/setValue', (req, res, next) => {
  api.setValue(req, res, next)
})

router.get('/addValue', (req, res, next) => {
  api.addValue(req, res, next)
})

module.exports = router
