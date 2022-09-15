import React, { Component } from 'react'
import api from '../api'


import styled from 'styled-components'

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

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      email: '',
      firstName: '',
      ticketQuantity: '',
    }
  }

  handleChangeInputName = async event => {
    const name = event.target.value
    this.setState({ name })
  }

  handleChangeInputAge = async event => {
    const age = event.target.validity.valid
      ? event.target.value
      : this.state.age

    this.setState({ age })
  }

  handleChangeInputEmail = async event => {
    const email = event.target.value
    this.setState({ email })
  }

  handleChangeInputFirstName = async event => {
    const firstName = event.target.value
    this.setState({ firstName })
  }

  handleChangeInputTicketQuantity = async event => {
    const ticketQuantity = event.target.validity.valid
      ? event.target.value
      : this.state.ticketQuantity

    this.setState({ ticketQuantity })
  }

  handlePurchaseTicket = async () => {
    const { name, email, age, firstName, ticketQuantity } = this.state
    const payload = { name, email, age, firstName, ticketQuantity }

    await api.purchaseTicket(payload).then(res => {
      window.alert(`Ticket purchased successfully`)
      this.setState({
        name: '',
        age: '',
        email: '',
        firstName: '',
        ticketQuantity: '',
      })
    })
  }

  render() {
    const { name, age, email, firstName, ticketQuantity  } = this.state
    return (
      <Wrapper>
        <Title>Purchase Ticket</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
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
          onChange={this.handleChangeInputAge}
        />

        <Label>First Name: </Label>
        <InputText
          type="text"
          value={firstName}
          onChange={this.handleChangeInputFirstName}
        />


        <Label>Ticket Quantity: </Label>
        <InputText
          type="number"
          lang="en-US"
          min="1"
          max="3"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={ticketQuantity}
          onChange={this.handleChangeInputTicketQuantity}
        />

        <Label>Email: </Label>
        <InputText
          type="text"
          value={email}
          onChange={this.handleChangeInputEmail}
        />

        <Button onClick={this.handlePurchaseTicket}>Purchase Ticket</Button>
        <CancelButton href={'/tickets/list'}>Cancel</CancelButton>
      </Wrapper>
    )
  }
}
// const Form = () => {
//   return (
//     <>COUCOU</>
//   )
// }

export default Form
