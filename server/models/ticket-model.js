const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ticket = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true},
        age: { type: Number, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('tickets', Ticket)
