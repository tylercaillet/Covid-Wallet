const { Schema } = require('mongoose')

const CovidDocuments = new Schema(
  {
    title: { type: String, default: null },
    Date: { type: String, required: false },
    info: { type: String, required: false },
    userOne_id: { type: Schema.Types.ObjectId, ref: 'userOne_id' }
  },
  { timestamps: true }
)

module.exports = CovidDocuments
