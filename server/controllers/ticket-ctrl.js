const Ticket = require('../models/ticket-model');
const User = require('../models/user-model');

module.exports = {
  
  getAllTickets: async (req, res) => {
    await Ticket.find({}, (err, tickets) => {

        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tickets.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }

        const max = tickets.length > 99 ? 99 : tickets.length

        let selectedTicketsIndex = [];
        while(selectedTicketsIndex.length < max){
            let r = Math.floor(Math.random() * tickets.length);
            if(selectedTicketsIndex.indexOf(r) === -1) selectedTicketsIndex.push(r);
        }

        let selectedTickets = selectedTicketsIndex.map((index) => {
            return tickets[index].user
        })

        return res.status(200).json({ success: true, data: selectedTickets })
    }).catch(err => console.log(err))
  }
}
