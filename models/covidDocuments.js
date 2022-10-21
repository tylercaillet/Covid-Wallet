const { Schema } = require('mongoose')

const covidDocuments = new Schema(
  {
    nameDocument: { type: String, default: null },
    lastDate: { type: String, required: true },
    infoType: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('covidDocuments', covidDocuments)
