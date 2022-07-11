import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList - Digitas Pixelpark</h1>
            <Link style={linkStyle} to="/">Home - </Link>
        </header>
    )
}

const headerStyle = {
    background: '#806e6e',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'

}
export default Header;