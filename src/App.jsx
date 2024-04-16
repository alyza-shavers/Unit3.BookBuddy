import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Container from './components/Container.jsx';
import NewRegistrationForm from './components/Register.jsx';
import BooksCard from './components/Books.jsx';
import UserDetails from './components/UserDetails.jsx';
import BookDetails from './components/BookDetails';


const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

function App() {
  const [token, setToken] = useState(null);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchAllBooks();
  }, []);

  useEffect(() => {
    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, books]);

  const fetchAllBooks = async () => {
    try {
      const response = await fetch(APIURL + "/books");
      if (!response.ok) {
        throw new Error("Failed to fetch books!");
      }
      const data = await response.json();
      setBooks(data.books);
    } catch (error) {
      console.error('Error fetching books!', error);
    }
  };

  const fetchSingleBook = async (bookId) => {
    try {
      const response = await fetch(APIURL + "/books/" + bookId);
      if (!response.ok) {
        throw new Error(`Failed to fetch book #${bookId}`);
      }
      const bookData = await response.json();
      setSelectedBook(bookData.book);
    } catch (err) {
      console.error(`Error fetching book #${bookId}!`, err);
    }
  };

  const addNewUser = async (userObj) => {
    try {
      const response = await fetch(APIURL + "/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObj),
      });
      if (!response.ok) {
        throw new Error("Failed to create new User");
      }
      await fetchAllBooks();
      console.log(response);
    } catch (err) {
      console.error('Error adding new user!', err);
    }
  };

  const checkoutBook = async (bookId) => {
    try {
      const response = await fetch(APIURL + "/books" + `/${bookId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ available: false })
      });
      if (!response.ok) {
        console.log("Failed to checkout book. Response status:", response.status);
        throw new Error("Failed checkout process");
      }
      await fetchAllBooks();
      console.log(response);
    } catch (err) {
      console.error(`Error checking out #${bookId} from the list!`, err);
    }
  };

  const returnBook = async (bookId) => {
    try {
      const response = await fetch(APIURL + "/books" + `/${bookId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ available: true })
      });
      if (!response.ok) {
        console.log("Failed to return book. Response status:", response.status);
        throw new Error("Failed return process");
      }
      await fetchAllBooks();
      console.log(response);
    } catch (err) {
      console.error(`Error returning #${bookId} to the list!`, err);
    }
  };

  const handleSeeDetails = async (bookId) => {
    await fetchSingleBook(bookId);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Router>
      <Container>
        <Navbar />
        <div id="main-section">
          <Routes>
            <Route path="/login" element={<Login token={token} setToken={setToken} />} />
            <Route path="/register" element={<NewRegistrationForm addNewUser={addNewUser} />} />
            <Route path="/books" element={
              <BooksCard
                books={searchResults}
                onCheckoutBook={checkoutBook}
                onReturnBook={returnBook}
                onSeeDetails={handleSeeDetails}
              />
            } />
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path="/book/:id" element={<BookDetails book={selectedBook} />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

export default App;
