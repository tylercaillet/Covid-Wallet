const { Schema } = require('mongoose')

const UserOne = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = UserOne
