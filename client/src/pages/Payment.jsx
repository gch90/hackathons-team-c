import React, { useEffect } from 'react'
import { getUserValue, updateUserValue } from '../hooks/useUserStorage'
import api from '../api';
import { useHandlePageAccess } from '../hooks/useHandlePageAccess'

const Payment = (props) => {
  useHandlePageAccess(props.history);

  useEffect(() => {
  	if (getUserValue('payed'))
		sendUserData();
  }, []);	

  const sendUserData = async () => {
  	const name = getUserValue('name');
  	const email = getUserValue('email');
  	const age = getUserValue('age');
  	const firstName = getUserValue('firstName');
  	const ticketQuantity = getUserValue('ticketQuantity');

    const payload = { name, email, age, firstName, ticketQuantity };
	updateUserValue('payed', 'true');

    await api.purchaseTicket(payload).then(res => {
      window.alert(`Ticket purchased successfully`);
     
    })
  }

  return (
    <>Payer ici : </>
  )
}

export default Payment;