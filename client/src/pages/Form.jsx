import React, {useState, useEffect} from 'react';
import {updateUserValue} from '../hooks/useUserStorage';
import {useHandlePageAccess} from '../hooks/useHandlePageAccess';

import styled from 'styled-components';
import { COLORS } from '../const';

const Form = (props) => {
  useHandlePageAccess(props.history);
  useEffect(() => {
    updateUserValue('state', 'form');
  }, [])

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(0);
  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isAgeDisabled, setIsAgeDisabled] = useState(true);
  const [isFirstNameDisabled, setIsFirstNameDisabled] = useState(true);
  const [isTicketQuantityDisabled, setIsTicketQuantityDisabled] = useState(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);

  const handleChangeInputName = (e) => {
    const getName = e.target.value;
    setName(getName);
  }

  const handleChangeInputAge = (e) => {
    const getAge = e.target.validity.valid ? e.target.value : age;
    setAge(getAge);
  }

  const handleChangeInputEmail = (e) => {
    const getEmail = e.target.value;
    setEmail(getEmail);
  }

  const handleChangeInputFirstName = (e) => {
    const getFirstName = e.target.value;
    setFirstName(getFirstName);
  }

  const handleChangeInputTicketQuantity = (e) => {
    const getTicketQuantity = e.target.validity.valid ? e.target.value : ticketQuantity;
    setTicketQuantity(getTicketQuantity);
  }

  const handlePurchaseTicket = async () => {
    updateUserValue('name', name);
    updateUserValue('email', email);
    updateUserValue('age', age);
    updateUserValue('firstName', firstName);
    updateUserValue('ticketQuantity', ticketQuantity);
    updateUserValue('state', 'game');
  }

  return (
    <Wrapper>
      <Title>Purchase Ticket</Title>
      <Label htmlFor='name-input' onClick={() => setIsNameDisabled(false)}>Name:</Label>
      <InputText
        id='name-input'
        disabled={isNameDisabled}
        type="text"
        value={name}
        onBlur={() => setIsNameDisabled(true)}
        onChange={handleChangeInputName}
      />
      <Label htmlFor='age-input' onClick={() => setIsAgeDisabled(false)}>Age:</Label>
      <InputText
        id='age-input'
        disabled={isAgeDisabled}
        type="number"
        step="1"
        lang="en-US"
        min="0"
        max="150"
        pattern="[0-9]+([,\.][0-9]+)?"
        value={age}
        onBlur={() => setIsAgeDisabled(false)}
        onChange={handleChangeInputAge}
      />
      <Label htmlFor='first-name-input' onClick={() => setIsFirstNameDisabled(false)}>First Name:</Label>
      <InputText
        id='first-name-input'
        disabled={isFirstNameDisabled}
        type="text"
        value={firstName}
        onBlur={() => setIsFirstNameDisabled(false)}
        onChange={handleChangeInputFirstName}
      />
      <Label htmlFor='ticket-quantity-input' onClick={() => setIsTicketQuantityDisabled(false)}>Ticket Quantity:</Label>
      <InputText
        id='ticket-quantity-input'
        disabled={isTicketQuantityDisabled}
        type="number"
        lang="en-US"
        min="1"
        max="3"
        pattern="[0-9]+([,\.][0-9]+)?"
        value={ticketQuantity}
        onBlur={() => setIsTicketQuantityDisabled(false)}
        onChange={handleChangeInputTicketQuantity}
      />
      <Label htmlFor='email-input' onClick={() => setIsEmailDisabled(false)}>Email:</Label>
      <InputText
        id='email-input'
        disabled={isEmailDisabled}
        type="text"
        value={email}
        onBlur={() => setIsEmailDisabled(false)} 
        onChange={handleChangeInputEmail}
      />
      <CancelButton href={'/tickets/list'}>Cancel</CancelButton>
      <Button onClick={handlePurchaseTicket}>Purchase Ticket</Button>
    </Wrapper>
  )
}

const Title = styled.h2.attrs({
  className: 'color-main',
})`
  text-align:center;
`;
const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
  margin: 0 auto;
  padding:50px;
  max-width: 640px;
  border: 1px solid ${COLORS.mainBorder};
  border-radius: 30px;
`;
const Label = styled.label`
  margin-top:10px;
  margin-bottom:2px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;

const InputText = styled.input`
  margin: 5px;
  border-radius: 0!important;
  background-color: transparent!important;
  border-color:${COLORS.mainBorder}!important;
  min-height:60px!important;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
  border-radius: 0!important;
  padding:10px 15px!important;
  border:1px solid ${COLORS.mainColor}!important;
  background:transparent!important;

  &:hover {
    border:1px solid ${COLORS.overlayButtonColor}!important;
    color: ${COLORS.overlayButtonColor}!important;
  }
`;
const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
  margin: 15px 15px 15px 5px;
  border-radius: 0!important;
  background-color:${COLORS.mainColor}!important;
  padding:10px 15px!important;
  border:0!important;

  &:hover {
    background-color:${COLORS.overlayButtonColor}!important;
  }
`;

export default Form;
