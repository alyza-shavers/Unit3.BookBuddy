import React, { useState, useEffect } from 'react';
import fetchSingleUser from './Account.jsx'; 

const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me`;

function UserDetails({ userId, token }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchSingleUser(userId, token, APIURL);
        setUser(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!user) {
    return <p>User not found!</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <ul>
        <li>ID: {user.id}</li>
        <li>First Name: {user.firstname}</li>
        <li>Last Name: {user.lastname}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  );
}

export default UserDetails;
