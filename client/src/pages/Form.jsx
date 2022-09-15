import React, {useState, useRef} from 'react';
import api from '../api';

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
    setIsDisabledFirstName(false);
  }
  const handleClickLabelEmail = () => {
    setIsDisabledEmail(false);
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

        <Button onClick={handlePurchaseTicket}>Purchase Ticket</Button>
        <CancelButton href={'/tickets/list'}>Cancel</CancelButton>
      </Wrapper>
    )
}

export default Form;
