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

class TicketsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            email: '',
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

    handleIncludeTicket = async () => {
        const { name, age, email } = this.state
        const payload = { name, age, email }

        await api.insertTicket(payload).then(res => {
            window.alert(`Ticket inserted successfully`)
            this.setState({
                name: '',
                age: '',
                email: '',
            })
        })
    }

    render() {
        const { name, age, email } = this.state
        return (
            <Wrapper>
                <Title>Create Ticket</Title>

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

                <Label>Email: </Label>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />

                <Button onClick={this.handleIncludeTicket}>Add Ticket</Button>
                <CancelButton href={'/tickets/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default TicketsInsert
