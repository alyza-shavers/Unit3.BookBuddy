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
    <form className='nuform' onSubmit={handleNewUserSubmit}>
      <label htmlFor="firstname">
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
        />
      </label>
      <label htmlFor="lastname">
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
        />
      </label>
      <label htmlFor="email">
        <p>Email:</p>
        <input
          type='email'
          id="email"
          placeholder="Email (max 20 characters)"
          maxLength={20}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
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
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewRegistrationForm;
