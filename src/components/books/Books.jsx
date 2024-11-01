import PropTypes from "prop-types";
import BookItem from "../bookItem/BookItem";

const Books = ({ books, onDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          summary={book.summary}
          titleProp={book.bookTitle}
          author={book.bookAuthor}
          rating={book.bookRating.length}
          pageCount={book.pageCount}
          imageUrl={book.imageUrl}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.array,
  onDelete: PropTypes.func,
};

export default Books;