// const Ticket = require('../models/ticket-model');
// const User = require('../models/user-model');

// module.exports = {
  
//   create: async (req, res) => {

//     console.log(req.params);
//     user = req.params;
//     id = user.id;
//     const { quantity } = req.body;
//     const ticket = await Ticket.create({
//       user:id
//     });
//     await ticket.save();

//     const userById = await User.findById(id);

//     userById.tickets.push(ticket);
//     await userById.save();

//     return res.send(userById);
//   },
//   userByTicket: async (req, res) => {
//     const { id } = req.params;
//     const userByTicket = await Ticket.findById(id).populate('user');
//     res.send(userByTicket);
//   }
// }
