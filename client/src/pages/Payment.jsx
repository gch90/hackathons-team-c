import React, { useEffect } from 'react'
import { getUserValue, updateUserValue } from '../hooks/useUserStorage'
import api from '../api';

const Payment = () => {
  
  useEffect(() => {
	sendUserData();
  }, []);	

  const sendUserData = async () => {
  	const name = getUserValue('name');
  	const email = getUserValue('email');
  	const age = getUserValue('age');
  	const firstName = getUserValue('firstName');
  	const ticketQuantity = getUserValue('ticketQuantity');

    const payload = { name, email, age, firstName, ticketQuantity };
	updateUserValue('state', 'payment');

    await api.purchaseTicket(payload).then(res => {
      window.alert(`Ticket purchased successfully`);
     
    })
  }

  return (
    <>Payer ici : </>
  )
}

export default Payment;