const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://hack22:22hack@cluster0.zlykkml.mongodb.net/hackaton?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
