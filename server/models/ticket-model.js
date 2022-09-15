const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ticket = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
    
  { timestamps: true },
)

module.exports = mongoose.model('tickets', Ticket)
