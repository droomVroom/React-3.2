import { useState } from 'react';
import './Library.css';

function Library() {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleAddBook = () => {
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: "", author: "" });
    }
  };

  const handleDelete = (index) => {
    const updated = books.filter((_, i) => i !== index);
    setBooks(updated);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library-container">
      <h1>Library Management</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="add-book-form">
          <input
            type="text"
            placeholder="Book Title"
            className="add-book-input"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author Name"
            className="add-book-input"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.g.target.value })}
          />
          <button className="add-book-btn" onClick={handleAddBook}>
            Add Book
          </button>
        </div>
      </div>

      <ul className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <li key={index} className="book-item">
              <span><strong>{book.title}</strong> by {book.author}</span>
              <button className="remove-btn" onClick={() => handleDelete(index)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="no-books-message">No books found.</p>
        )}
      </ul>
    </div>
  );
}

export default Library;