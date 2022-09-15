import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Socials extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='d-flex justify-content-center justify-content-lg-end'>
                    <a target="_blank" href="https://www.instagram.com/spacex/?hl=en" className="nav-link">Instagram</a>
                    <a target="_blank" href="https://twitter.com/SpaceX" className="nav-link">Twitter</a>
                    <a target="_blank" href="https://www.facebook.com/spacenewsx/" className="nav-link">Facebook</a>
                </div>
            </React.Fragment>
        )
    }
}

export default Socials
