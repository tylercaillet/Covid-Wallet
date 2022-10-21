const { Schema } = require('mongoose')

const UserOne = new Schema(
  {
    firstName: { type: String, required: false },
    lastName: { type: String, default: null },
    email: { type: String, required: false }
    // documents: {type: String, required: true}
  },
  { timestamps: true }
)

module.exports = UserOne
