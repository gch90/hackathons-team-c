import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const purchaseTicket = payload => api.post(`/user/create`, payload)
export const getAllTickets = () => api.get(`/tickets`)
export const updateTicketById = (id, payload) => api.put(`/ticket/${id}`, payload)
export const deleteTicketById = id => api.delete(`/ticket/${id}`)
export const getTicketById = id => api.get(`/ticket/${id}`)

const apis = {
    purchaseTicket,
    getAllTickets,
    updateTicketById,
    deleteTicketById,
    getTicketById,
}

export default apis
