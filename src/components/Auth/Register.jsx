import React, { useState } from 'react';

const NewRegistrationForm = ({ addNewUser }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleNewUserSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      firstname,
      lastname,
      email,
      password,
    };
    await addNewUser(newUser);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className='container' onSubmit={handleNewUserSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="firstname" style={styles.label}>
          <p>First Name:</p>
          <input
            type="text"
            id="firstname"
            placeholder="First Name (4-20 characters)"
            minLength={4}
            maxLength={20}
            required
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.input}
          />
        </label>
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="lastname" style={styles.label}>
          <p>Last Name:</p>
          <input
            type="text"
            id="lastname"
            placeholder="Last Name (1-20 characters)"
            minLength={1}
            maxLength={20}
            required
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            style={styles.input}
          />
        </label>
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>
          <p>Email:</p>
          <input
            type='email'
            id="email"
            placeholder="Email (max 20 characters)"
            maxLength={20}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </label>
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>
          <p>Password:</p>
          <input
            type="password"
            id="password"
            placeholder="Password (4-20 characters)"
            minLength={4}
            maxLength={20}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
      </div>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default NewRegistrationForm;
