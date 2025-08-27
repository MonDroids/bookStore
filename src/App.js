import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/api/books")
    .then((response) => {
      setBooks(response.data);
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
  }, []);

  return (
    <div className="App">
      <h1>Номын дэлгүүр</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h2>{book.title}</h2>
            <p>Зохиолч: {book.author}</p>
            <p>Төрөл: {book.genre}</p>
            <p>Үнэ: {book.price}$</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
