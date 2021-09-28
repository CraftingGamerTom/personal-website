
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

module.exports = {
  path: '/api/contact/',
  handler: app
}

app.post('/', async (req, res) => {
  console.log('recieved: ' + req)
  const URL = process.env.STRAPI_DOMAIN + '/contact-me-messages'
  const API_KEY = process.env.STRAPI_API_KEY_CONTACT_ME
  try {
    const requestUrl = URL + '?token=' + API_KEY
    const strapiResponse = await axios.post(requestUrl, {
      name: req.body.name,
      emailAddress: req.body.email,
      phoneNumber: req.body.phone,
      messageBody: req.body.message
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })

    res.send(strapiResponse)
  } catch (error) {
    throw new Error(error)
  }
})
