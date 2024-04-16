import React from 'react';
import PropTypes from 'prop-types';

const BooksCard = ({ books, oncheckoutBooks, onreturnBooks, onDetails }) => {
  return (
    <li>
      <h2>{books.title}</h2>
      <img src={books.coverimage} alt={books.title} width="125" height="125" />
      <p>Author: {books.author}</p>
      <p>Description: {books.description}</p>
      <p>Available: {books.available ? 'Yes' : 'No'}</p>
      <button className="checkout-button" onClick={() => oncheckoutBooks(books.id)}>Checkout</button>
      <button className="return-button" onClick={() => onreturnBooks(books.id)}>Return</button>
      <button className="details-button" onClick={() => onDetails(books.id)}>See Details</button>
    </li>
  );
};

BooksCard.propTypes = {
  books: PropTypes.object.isRequired,
  oncheckoutBooks: PropTypes.func.isRequired,
  onreturnBooks: PropTypes.func.isRequired,
  onDetails: PropTypes.func.isRequired,
};

export default BooksCard;
