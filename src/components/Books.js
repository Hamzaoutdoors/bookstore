import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const Books = () => {
  const booksInfo = [
    { category: 'Action', title: 'The Hunger Games', author: 'Suzanne Colins' },
    { category: 'Romance', title: 'Love hero', author: 'Tom Cruise' },
    { category: 'Science fiction', title: 'the other world', author: 'Winston' },
  ];

  const booksCard = booksInfo.map((book) => (
    <Book category={book.category} title={book.title} author={book.author} key={uuidv4()} />
  ));

  return (

    <div className="books">
      {booksCard}
    </div>
  );
};

export default Books;
