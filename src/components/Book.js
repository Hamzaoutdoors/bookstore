import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const cardStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '1.5rem',
  alignItems: 'center',
  padding: '1rem 2rem',
};

const Book = (props) => {
  const { category, title, author } = props;

  return (
    <>
      <div className="book">
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
            <Card.Title className="book-title">{title}</Card.Title>
            <Card.Text>{author}</Card.Text>
            <button type="button" className="book-btn" style={{ border: 'none' }}>Comments</button>
            <button type="button" className="book-btn">Remove</button>
            <button type="button" className="book-btn">Edit</button>
          </Card.Body>
          <Card.Body style={{ display: 'flex', flexDirection: 'row' }}>
            <Card.Title>65%</Card.Title>
            <Card.Text>Completed</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Current chapter</Card.Subtitle>
            <Card.Title>Chapter 17</Card.Title>
            <Button variant="primary">Update progress</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Book;

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
