import React from 'react';

const BooksCard = ({ books, onCheckoutBook, onReturnBook, onSeeDetails }) => {
  return (
    <li>
      <h2>{books.title}</h2>
      <img src={books.coverimage} alt={books.title} width="125" height="125" />
      <p>Author: {books.author}</p>
      <p>Description: {books.description}</p>
      <p>Available: {books.available ? 'Yes' : 'No'}</p>
      <button className="checkout-button" onClick={() => onCheckoutBook(books.id)}>Checkout</button>
      <button className="return-button" onClick={() => onReturnBook(books.id)}>Return</button>
      <button className="details-button" onClick={() => onSeeDetails(books.id)}>See Details</button>
    </li>
  );
};

export default BooksCard;