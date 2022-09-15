const express = require('express');

const ticketCtrl = require('../controllers/ticket-ctrl');
const userCtrl = require('../controllers/user-ctrl');

const router = express.Router();

// router.post('/ticket', TicketCtrl.createTicket)
// router.put('/ticket/:id', TicketCtrl.updateTicket)
// router.delete('/ticket/:id', TicketCtrl.deleteTicket)
// router.get('/ticket/:id', TicketCtrl.getTicketById)
// router.get('/tickets', TicketCtrl.getTickets)

router.get('/', (req, res) => res.send('ok'));
// user routes
router.post('/user/create', userCtrl.create);
router.post('/user/find', userCtrl.find);
router.post('/user/find/ticket/:id', userCtrl.ticketsByUser);
router.post('/user/find/many/:ids', userCtrl.findMany);
router.get('/tickets', ticketCtrl.getAllTickets);
// ticket routes
// router.post('/ticket/create/:id', ticketCtrl.create);
// router.post('/ticket/populate/:id', ticketCtrl.userByTicket);

module.exports = router;
