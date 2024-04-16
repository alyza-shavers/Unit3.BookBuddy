import React, { useState, useEffect } from "react";

const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

const fetchSingleBook = async (bookId, setSelectedBook, setError) => {
    try {
      const response = await fetch(APIURL + "/books/" + bookId);
      if (!response.ok) {
        throw new Error(`Failed to fetch book #${bookId}`);
      }
      const bookData = await response.json();
      setSelectedBook(bookData.book);
    } catch (err) {
      setError(err.message);
    }
  };

const BookDetails = ({ bookId }) => {
    const [selectedBook, setSelectedBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(APIURL + "/books/" + bookId);
          if (!response.ok) {
            throw new Error(`Failed to fetch book #${bookId}`);
          }
          const bookData = await response.json();
          setSelectedBook(bookData.book);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [bookId]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    return (
      <div>
        {selectedBook && (
          <>
            <h2>{selectedBook.title}</h2>
            <img src={selectedBook.coverimage} alt={selectedBook.title} width="125" height="125" />
            <p>ID: {selectedBook.id}</p>
            <p>Author: {selectedBook.author}</p>
            <p>Description: {selectedBook.description}</p>
          </>
        )}
      </div>
    );
  };

export default BookDetails;
