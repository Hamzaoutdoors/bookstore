import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pu9kvo4W2aaAHOXLkIzL/books';

const initialBooks = [];

export const createBook = (book) => async (dispatch) => {
  const res = await axios.post(baseURL,
    {
      item_id: book.item_id,
      title: book.title,
      category: book.category,
    });
  const created = await res.data;
  if (created === 'Created') {
    dispatch({
      type: ADD_BOOK,
      book,
    });
  }
};

export const removeBook = (bookId) => async (dispatch) => {
  const res = await axios.delete(`${baseURL}/${bookId}`);
  const deleted = await res.data;
  if (deleted) {
    dispatch({
      type: REMOVE_BOOK,
      bookId,
    });
  }
};

export const getBook = () => async (dispatch) => {
  const res = await axios.get(baseURL);
  const data = await res.data;
  if (data) {
    const objectArray = Object.entries(data);
    const booksArray = [];
    objectArray.forEach(([key, value]) => {
      const item = { ...value, item_id: key };
      const itemObj = Object.values(item);
      booksArray.push(itemObj[0]);
    });
    dispatch({
      type: GET_BOOKS,
      booksArray,
    });
  }
};

const reducer = (state = initialBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.bookId);

    case GET_BOOKS:
      return [...action.booksArray];

    default:
      return state;
  }
};

export default reducer;
