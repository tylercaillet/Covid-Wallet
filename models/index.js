const mongoose = require('mongoose')
const UserSchema = require('./userOne')
const DocumentsSchema = require('./covidDocuments')

const userOne = mongoose.model('userOne', UserSchema)
const covidDocuments = mongoose.model('covidDocument', DocumentsSchema)

module.exports = {
  userOne,
  covidDocuments
}
