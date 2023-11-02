import BookList from "./BookList";

export default function HomePage({ currency, exchangeRate }) {
  return (
    <>
      <h2 className="page-title">Home</h2>
      <BookList currency={currency} exchangeRate={exchangeRate} />
    </>
  );
}
