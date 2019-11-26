'use strict'

const nodemailer = require('nodemailer')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ACCOUNT,
    pass: process.env.PASSWORD
  }
})

const options = {
  from: 'mmosconii@gmail.com',
  to: 'mmosconii@gmail.com',
  subject: '發送測試信件',
  text: 'Hello world'
}

transport.sendMail(options, (error, info) => {
  error ? console.log(error) : console.log('訊息發送: ' + info.response)
})