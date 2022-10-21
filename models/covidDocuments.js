const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const covidDocuments = new Schema(
  {
    title: { type: String, default: null },
    DOB: { type: String, required: true },
    first: { type: String, required: true },
    second: { type: String, required: true },
    id: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('covidDocuments', covidDocuments)
