import "./booklist.scss";
import { useEffect, useState, useContext } from "react";
import CurrencyContext from "./context/CurrencyContext";

export default function BookList({ exchangeRate }) {
  const { currency } = useContext(CurrencyContext);
  const [books, setBooks] = useState([]);
  const [bookPage, setBookPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(3);

  // fetch and render books ************************

  const loadBooks = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php"
    );
    const data = await response.json();
    setBooks(data);
    // console.log(books);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // pagination ******************************

  const lastBookIndex = bookPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const displayedBooks = books.slice(firstBookIndex, lastBookIndex);

  const pageLimitsArray = [3, 6, 9, 12];
  const nextPage = () => {
    setBookPage(bookPage + 1);
  };

  const previousPage = () => {
    setBookPage(bookPage - 1);
  };

  const handleChange = (ev) => {
    setBooksPerPage(ev.target.value);
  };
  return (
    <>
      <h3 className="book-list__title">Book List</h3>

      <div className="book-list__list">
        {displayedBooks.map((book, index) => (
          <div key={index} className="book">
            <p className="book__title">{book.title}</p>

            <img className="book__image" src={book.image} alt={book.slug} />

            {currency === "EUR" ? (
              <p>{book.price + " " + currency}</p>
            ) : (
              <p>{book.price * exchangeRate.toFixed() + " " + currency}</p>
            )}
          </div>
        ))}
      </div>
      <button onClick={previousPage}>Prev</button>

      <button onClick={nextPage}>Next</button>

      <select value={booksPerPage} onChange={handleChange}>
        Books per-page:
        {pageLimitsArray.map((limit, index) => (
          <option key={index} name="limit" id={index}>
            {limit}
          </option>
        ))}
      </select>
    </>
  );
}
