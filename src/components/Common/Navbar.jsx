// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/register" style={styles.link}>Registration</Link>
      <Link to="/books" style={styles.link}>Books</Link>
      <Link to="/login" style={styles.link}>Login</Link>
    </nav>
  );
}

// CSS styles
const styles = {
  navbar: {
    backgroundColor: '#333', 
    color: '#fff', 
    padding: '1rem',
    textAlign: 'center',
  },
  link: {
    color: '#fff', 
    textDecoration: 'none',
    margin: '0 10px', 
  },
};

export default Navbar;

