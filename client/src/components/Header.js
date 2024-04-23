import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={headerStyle}>
            <nav>
                <ul style={navStyle}>
                    <li style={navItemStyle}>
                        <Link to="/" style={linkStyle}>Home</Link>
                    </li>
                    <li style={navItemStyle}>
                        <Link to="/dragdrop" style={linkStyle}>Drag and Drop</Link>
                    </li>
                    <li style={navItemStyle}>
                        <Link to="/manualupload" style={linkStyle}>Manual Upload</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

// Styles
const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center'
};

const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: 0
};

const navItemStyle = {
    marginRight: '20px',
    fontSize: '20px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
};

export default Header;
