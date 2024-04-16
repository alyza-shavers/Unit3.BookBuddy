import React from 'react';

const BookDetails = ({ book }) => {
  // Render book details here
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetails;
