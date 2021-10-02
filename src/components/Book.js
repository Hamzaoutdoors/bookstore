import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ChapterProgress from './ChapterProgress';

const cardStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '1.5rem',
  alignItems: 'center',
  padding: '1rem 2rem',
};

const Book = ({
  title, category, rmvBook,
}) => (
  <>
    <div className="book">
      <Card style={cardStyle}>
        <Card.Body style={{ width: '50%' }}>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
          <Card.Title className="book-title">{title}</Card.Title>
          <Card.Text className="book-author">Anonym</Card.Text>
          <button type="button" className="book-btn" style={{ border: 'none' }}>Comments</button>
          <button type="button" className="book-btn" onClick={rmvBook}>Remove</button>
          <button type="button" className="book-btn">Edit</button>
        </Card.Body>
        <Card.Body className="book-progress">
          <ChapterProgress />
        </Card.Body>
        <Card.Body style={{ width: '20%' }}>
          <Card.Subtitle className="mb-2 text-muted font-weight-light">CURRENT CHAPTER</Card.Subtitle>
          <Card.Title>Chapter 17</Card.Title>
          <Button variant="primary" className="px-4 w-100 mt-4">UPDATE PROGRESS</Button>
        </Card.Body>
      </Card>
    </div>
  </>
);

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  rmvBook: PropTypes.func.isRequired,
};
