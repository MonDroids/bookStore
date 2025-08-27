import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  // Номын жагсаалтыг авах функц
  const fetchBooks = async () => {
    try{
      const response = await axios.get("http://localhost:5005/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Номын жагсаалтыг авахад алдаа гарлаа:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
      const newBook = { title, author, genre, price, publishedDate, year, isAvailable, createdAt, updatedAt };
      axios.post("http://localhost:5005/api/books", newBook)
      .then((response) => {
        console.log("Ном амжилттай нэмэгдлээ:", response.data);
        fetchBooks();
        setTitle("");
        setAuthor("");
        setGenre("");
        setPublishedDate("");
        setYear("");
        setIsAvailable(false);
        setCreatedAt("");
        setUpdatedAt("");
        setPrice("");
      })
      .catch((error) => {
        console.error("Ном нэмэхэд алдаа гарлаа:", error);
      });
  };

  return (
    <div className="App">
      <h1>Ном нэмэх</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Номын нэр"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Зохиолч"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Төрөл"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Нийтлэгдсэн огноо"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Жилийн тоо"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <input
          type="checkbox"
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)}
        />
        
        <input
          type="number"
          placeholder="Үнэ"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input 
          type="date"
          placeholder="Огноо"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
        />
        <input
          type="date"
          placeholder="Огноо"
          value={updatedAt}
          onChange={(e) => setUpdatedAt(e.target.value)}
        />
        <button type="submit">Ном нэмэх</button>
      </form>
      <h2>Бүх номын жагсаалт</h2>
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