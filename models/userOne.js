const { Schema } = require('mongoose')

const UserOne = new Schema(
  {
    firstName: { type: String, required: false },
    lastName: { type: String, required: true },
    email: { type: String, required: true }
    // documents: {type: String, required: true}
  },
  { timestamps: true }
)

module.exports = UserOne
