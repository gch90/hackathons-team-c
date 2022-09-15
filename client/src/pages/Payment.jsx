import React, {useEffect} from 'react';
import styled from 'styled-components';
import {COLORS} from '../const';
import api from '../api';
import { getUserValue, updateUserValue } from '../hooks/useUserStorage';

const Payment = () => {

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

    const payload = {name, email, age, firstName, ticketQuantity};
	  updateUserValue('payed', 'true');

    await api.purchaseTicket(payload).then(res => {
      window.alert(`Ticket purchased successfully`);
    })
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min) + min).toString();
    return result.replace(/(.)(?=(\d{3})+$)/g,'$1,')
  }

  return (
    <Wrapper>
      <Text>
        <FirstLine>Pour confirmer votre achat, vous devez envoyer {getRandomInt(54000, 289000)} DogeCoin à cette adresse :</FirstLine>
        <SecondLine> CHXSYsbKGm5Q3RJHFY8vXLS5uHKLDtpjyZcAYD4g9giK</SecondLine>
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
height: 80vh;
background-color: ${COLORS.blackColor};
color: ${COLORS.whiteColor};
display: flex;
justify-content: center;
align-items: center;
padding-left: 100px;
padding-right: 100px;
`;
const Text = styled.div`
font-size: 32px;
`;
const FirstLine = styled.h2`
margin-bottom: 40px;
text-align: center;
`;
const SecondLine = styled.p`
margin-bottom: 10px;
text-align: center;
margin-left: auto;
margin-right: auto;
`;
    
export default Payment;
