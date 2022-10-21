const { Schema } = require('mongoose')

const CovidDocuments = new Schema(
  {
    title: { type: String, default: null },
    DOB: { type: String, required: false },
    first: { type: String, required: false },
    second: { type: String, default: null },
    userOne_id: { type: Schema.Types.ObjectId, ref: 'userOne_id' }
  },
  { timestamps: true }
)

module.exports = CovidDocuments
