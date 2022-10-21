const mongoose = require('mongoose')
const UserSchema = require('./userOne')
const DocumentsSchema = require('./covidDocuments')

const UserOne = mongoose.model('UserOne', UserSchema)
const CovidDocuments = mongoose.model('CovidDocument', DocumentsSchema)

module.exports = {
  UserOne,
  CovidDocuments
}
