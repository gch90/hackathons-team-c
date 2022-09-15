import React, {useState, useEffect} from 'react';
import api from '../api';

import styled from 'styled-components';

const Title = styled.h1.attrs({
  className: 'h1',
})``

const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
  display: flex;
  flex-direction: column;
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input`
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

const Form = () => {
  
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
    const getAge = e.target.validity.valid ? e.target.value : age
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
    const getTicketQuantity = e.target.validity.valid ? e.target.value : ticketQuantity
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

        <Label htmlFor='name-input' onClick={() => setIsNameDisabled(false)}>Name: </Label>
        <InputText
          id='name-input'
          disabled={isNameDisabled}
          type="text"
          value={name}
          onChange={handleChangeInputName}
        />

        <Label htmlFor='age-input' onClick={() => setIsAgeDisabled(false)}>Age: </Label>
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
          onChange={handleChangeInputAge}
        />

        <Label htmlFor='first-name-input' onClick={() => setIsFirstNameDisabled(false)}>First Name: </Label>
        <InputText
          id='first-name-input'
          disabled={isFirstNameDisabled}
          type="text"
          value={firstName}
          onChange={handleChangeInputFirstName}
        />


        <Label htmlFor='ticket-quantity-input' onClick={() => setIsTicketQuantityDisabled(false)}>Ticket Quantity: </Label>
        <InputText
          id='ticket-quantity-input'
          disabled={isTicketQuantityDisabled}
          type="number"
          lang="en-US"
          min="1"
          max="3"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={ticketQuantity}
          onChange={handleChangeInputTicketQuantity}
        />

        <Label htmlFor='email-input' onClick={() => setIsEmailDisabled(false)}>Email: </Label>
        <InputText
          id='email-input'
          disabled={isEmailDisabled}
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
