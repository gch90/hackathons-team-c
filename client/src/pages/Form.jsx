import React, {useState} from 'react';
import api from '../api';
import {updateUserValue} from '../hooks/useUserStorage'
import { BrowserRouter as Redirect } from 'react-router-dom'
import { useHandlePageAccess } from '../hooks/useHandlePageAccess'

import styled from 'styled-components';

const Title = styled.h1.attrs({
  className: 'h1',
})``

const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
  className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

const Form = (props) => {
  useHandlePageAccess(props.history);

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

        <Label for="name">Name: </Label>
        <InputText
          id="name"
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

        <Button onClick={handlePurchaseTicket}>Purchase Ticket</Button>
        <CancelButton href={'/tickets/list'}>Cancel</CancelButton>
      </Wrapper>
    )
}

export default Form;
