import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import FormComponent from './Form';
import { addBook, removeBook } from '../redux/books/books';
import store from '../redux/cofigureStore';

const Books = () => {
  const dispatch = useDispatch();
  const [booksData, setBooksData] = useState(store.getState().booksReducer);

  const submitBookToStore = (book) => {
    const newBook = {
      id: uuidv4(), // generate unique ID
      title: book.title,
      author: book.author,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
    setBooksData((prevState) => [...prevState, newBook]);
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book));
    const newBooks = booksData.filter((item) => item.id !== book.id);
    setBooksData(newBooks);
  };

  return (

    <div className="books">
      { booksData.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          key={book.id}
          rmvBook={() => {
            deleteBook(book);
          }}
        />
      ))}

      <FormComponent submitBook={submitBookToStore} />
    </div>
  );
};

export default Books;
