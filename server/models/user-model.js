const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: false },
    age: { type: Number, required: false },
    firstName: { type: String, required: false },
    ticketsPurchased: {
      type: mongoose.Schema.Types.ObjectID, 
      ref: 'Ticket'
    }
  },
  { timestamps: true },
)

module.exports = mongoose.model('users', User)
