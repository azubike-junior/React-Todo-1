import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <h1>My Todo</h1>
                <Link style={linkStyle} to='/' >Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
            </div>
        )
    }
}

const headerStyle = {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    color: '#000',
    border: '#ccc 2px solid'
}

const linkStyle = {
    color: '#000',
    textDecoration: 'none'
}

export default Header
