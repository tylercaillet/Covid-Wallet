const { Schema } = require('mongoose')

const CovidDocuments = new Schema(
  {
    title: { type: String, required: true },
    Date: { type: String, required: true },
    info: { type: String, required: true },
    image: { type: String, required: true },
    userOne_id: { type: Schema.Types.ObjectId, ref: 'userOne_id' }
  },
  { timestamps: true }
)

module.exports = CovidDocuments
