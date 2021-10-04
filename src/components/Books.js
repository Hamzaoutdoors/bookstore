import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import FormComponent from './Form';
import { createBook, removeBook, getBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const booksData = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getBook());
  }, []);

  const submitBookToStore = (book) => {
    const newBook = {
      item_id: uuidv4(),
      title: book.title,
      category: book.category,
    };
    dispatch(createBook(newBook));
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book.item_id));
  };

  const booksList = booksData.map((book) => (
    <Book
      title={book.title}
      category={book.category}
      key={booksData.indexOf(book)}
      rmvBook={() => {
        deleteBook(book);
      }}
    />
  ));
  return (
    <div className="books">
      <div className="container-fluid">
        { booksList }
      </div>
      <FormComponent submitBook={submitBookToStore} />
    </div>

  );
};

export default Books;
