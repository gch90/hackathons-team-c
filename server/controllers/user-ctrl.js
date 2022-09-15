const User = require('../models/user-model');
const Ticket = require('../models/ticket-model');


module.exports = {
  create: async (req, res) => {
    const { name, email, age, firstName, ticketQuantity } = req.body;

    const user = await User.create({
      name,
      email,
      age,
      firstName
    })

    const id = user
      
    for (let i = 0; i < ticketQuantity; i++) {
      const ticket = await Ticket.create({
        user:id
      });
    }

    // await ticket.save();
    return res.send(user)
  },

  find: async (req, res) => {
    const user = await User.find()
    return res.send(user)
  },
  ticketsByUser: async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).populate('tickets');

    res.send(user.tickets);
  }
}
