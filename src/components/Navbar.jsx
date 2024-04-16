
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/register">Registration</Link>
            <Link to="/login">Login</Link>
            <Link to="/books">Books</Link>
        </div>
    );
}

export default Navbar;
