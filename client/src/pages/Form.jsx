import React, {useState} from 'react';
import api from '../api';

import styled from 'styled-components';
import { COLORS } from '../const';

const Title = styled.h2.attrs({
  className: 'color-main',
})`
text-align:center;`

const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
    margin: 0 auto;
    padding:50px;
    max-width: 640px;
    border: 1px solid ${COLORS.mainBorder};
    border-radius: 30px;
`

const Label = styled.label`
  margin-top:10px;
  margin-bottom:2px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`

const InputText = styled.input.attrs({
  className: 'form-control',
})`
    margin: 5px;
    border-radius: 0!important;
    background-color: transparent!important;
    border-color:${COLORS.mainBorder}!important;
    min-height:60px!important;
`

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

`

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
`

const Form = (props) => {
  
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(0);

  const handleChangeInputName = async event => {
    const getName = event.target.value;
    setName(getName);
  }

  const handleChangeInputAge = async event => {
    const getAge = event.target.validity.valid
      ? event.target.value
      : age

    setAge(getAge);
  }

  const handleChangeInputEmail = async event => {
    const getEmail = event.target.value;
    setEmail(getEmail);
  }

  const handleChangeInputFirstName = async event => {
    const getFirstName = event.target.value;
    setFirstName(getFirstName);
  }

  const handleChangeInputTicketQuantity = async event => {
    const getTicketQuantity = event.target.validity.valid
      ? event.target.value
      : ticketQuantity

    setTicketQuantity(getTicketQuantity);
  }

  const handlePurchaseTicket = async () => {
    const payload = { name, email, age, firstName, ticketQuantity }

    await api.purchaseTicket(payload).then(res => {
      window.alert(`Ticket purchased successfully`)
      setName('');
      setAge(0);
      setEmail('');
      setFirstName('');
      setTicketQuantity(0);
    })
  }
    return (
      <Wrapper>
        <Title>Purchase Ticket</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={handleChangeInputName}
        />

        <Label>Age: </Label>
        <InputText
          type="number"
          step="1"
          lang="en-US"
          min="0"
          max="150"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={age}
          onChange={handleChangeInputAge}
        />

        <Label>First Name: </Label>
        <InputText
          type="text"
          value={firstName}
          onChange={handleChangeInputFirstName}
        />


        <Label>Ticket Quantity: </Label>
        <InputText
          type="number"
          lang="en-US"
          min="1"
          max="3"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={ticketQuantity}
          onChange={handleChangeInputTicketQuantity}
        />

        <Label>Email: </Label>
        <InputText
          type="text"
          value={email}
          onChange={handleChangeInputEmail}
        />
        <CancelButton href={'/tickets/list'}>Cancel</CancelButton>
        <Button onClick={handlePurchaseTicket}>Purchase Ticket</Button>
      </Wrapper>
    )
}

export default Form;
