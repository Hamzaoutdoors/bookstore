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

const Book = ({
  title, category, rmvBook,
}) => (
  <>
    <div className="book">
      <Card style={cardStyle}>
        <Card.Body style={{ width: '50%' }}>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
          <Card.Title className="book-title">{title}</Card.Title>
          <Card.Text>Anonym</Card.Text>
          <button type="button" className="book-btn" style={{ border: 'none' }}>Comments</button>
          <button type="button" className="book-btn" onClick={rmvBook}>Remove</button>
          <button type="button" className="book-btn">Edit</button>
        </Card.Body>
        <Card.Body style={{
          display: 'flex', flexDirection: 'column', textAlign: 'center', width: '30%',
        }}
        >
          <Card.Title style={{ fontSize: '2rem' }}>65%</Card.Title>
          <Card.Text>Completed</Card.Text>
        </Card.Body>
        <Card.Body style={{ width: '20%' }}>
          <Card.Subtitle className="mb-2 text-muted">Current chapter</Card.Subtitle>
          <Card.Title>Chapter 17</Card.Title>
          <Button variant="primary">Update progress</Button>
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
