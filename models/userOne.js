const { Schema } = require('mongoose')

const userOne = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = userOne
