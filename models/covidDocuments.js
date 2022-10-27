const { Schema } = require('mongoose')

const CovidDocuments = new Schema(
  {
    title: { type: String, required: true },
    DOB: { type: String, required: true },
    first: { type: String, required: true },
    second: { type: String, required: true },
    image: { type: String, required: true },
    userOne_id: { type: Schema.Types.ObjectId, ref: 'userOne_id' }
  },
  { timestamps: true }
)

module.exports = CovidDocuments
