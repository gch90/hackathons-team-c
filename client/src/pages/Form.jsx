import React, {useState, useRef, useEffect} from 'react';
import api from '../api';
import {updateUserValue} from '../hooks/useUserStorage'
import { BrowserRouter as Redirect } from 'react-router-dom'
import { useHandlePageAccess } from '../hooks/useHandlePageAccess'

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
  useHandlePageAccess(props.history);
  useEffect(() => {
    updateUserValue('state', 'form')
  }, [])

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(0);
  const [isDisabledName, setIsDisabledName] = useState(true);
  const [isDisabledAge, setIsDisabledAge] = useState(true);
  const [isDisabledFirstName, setIsDisabledFirstName] = useState(true);
  const [isDisabledEmail, setIsDisabledEmail] = useState(true);
  const [isDisabledQuantity, setIsDisabledQuantity] = useState(true);

  const handleClickLabelName = () => {
    setIsDisabledName(!isDisabledName);
  }
  const handleClickLabelAge = () => {
    setIsDisabledAge(!isDisabledAge);
  }
  const handleClickLabelQuantity = () => {
    setIsDisabledQuantity(!isDisabledQuantity);
  }
  const handleClickLabelFirstName = () => {
    setIsDisabledFirstName(!isDisabledFirstName);
  }
  const handleClickLabelEmail = () => {
    setIsDisabledEmail(!isDisabledEmail);
  }

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
        <Label onClick={handleClickLabelName} htmlFor='inputName' >Name:</Label>
        <InputText
          id="inputName"
          disabled={isDisabledName}
          type="text"
          value={name}
          onBlur={handleClickLabelName}
          onChange={handleChangeInputName}
          />

        <Label onClick={handleClickLabelAge}  htmlFor='inputAge' >Age: </Label>
        <InputText
          id="inputAge"
          disabled={isDisabledAge}
          type="number"
          step="1"
          lang="en-US"
          min="0"
          max="150"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={age}
          onBlur={handleClickLabelAge}
          onChange={handleChangeInputAge}
        />

        <Label onClick={handleClickLabelFirstName}  htmlFor='inputFirstName'>First Name: </Label>
        <InputText
          id='inputFirstName'
          disabled={isDisabledFirstName}
          type="text"
          value={firstName}
          onBlur={handleClickLabelFirstName}
          onChange={handleChangeInputFirstName}
        />

        <Label onClick={handleClickLabelQuantity} htmlFor='inputTicketQuantity'>Ticket Quantity: </Label>
        <InputText
          id='inputTicketQuantity'
          disabled={isDisabledQuantity}
          type="number"
          lang="en-US"
          min="1"
          max="3"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={ticketQuantity}
          onBlur={handleClickLabelQuantity}
          onChange={handleChangeInputTicketQuantity}
        />

        <Label onClick={handleClickLabelEmail} htmlFor='inputTicketEmail'>Email: </Label>
        <InputText
          id='inputTicketEmail'
          disabled={isDisabledEmail}
          type="text"
          value={email}
          onBlur={handleClickLabelEmail} 
          onChange={handleChangeInputEmail}
        />
        <CancelButton href={'/tickets/list'}>Cancel</CancelButton>
        <Button onClick={handlePurchaseTicket}>Purchase Ticket</Button>
      </Wrapper>
    )
}

export default Form;
