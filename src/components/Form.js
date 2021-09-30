/* eslint-disable no-return-assign */
import React, { useEffect, useRef } from 'react';
import {
  Alert, Row, Form, Button, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const formStyle = [
  {
    width: '100%',
    height: '1.5rem',
    margin: '1.8rem 33rem 1.2rem 0',
    fontSize: '1.25rem',
    fontWeight: 'Bold',
    letterSpacing: '-0.18px',
    color: '#888',
    borderTop: 'solid 1px #e8e8e8',
    padding: '2rem 0',
  },
];

const FormComponent = ({ submitBook }) => {
  const inputRef = useRef([]);

  const inputs = ['title', 'category', 'alert'];

  useEffect(() => {
    if (inputs.length !== 0) {
      inputRef.current[0].focus();
    }
  }, [inputs]);

  const addBook = (e) => {
    e.preventDefault();
    if (inputRef.current[0].value && inputRef.current[1].value) {
      const newBook = {
        title: inputRef.current[0].value,
        category: inputRef.current[1].value,
      };
      submitBook(newBook);
      const alert = inputRef.current[2];
      alert.className = 'd-none';
      inputRef.current[0].value = '';
      inputRef.current[1].value = 'Category';
    } else {
      const alert = inputRef.current[3];
      alert.className = 'd-block';
    }
  };

  return (
    <div className="form">
      <h2 style={formStyle[0]}>ADD NEW BOOK</h2>
      <Alert
        variant="danger"
        ref={(el) => inputRef.current[2] = el}
        className="d-none"
      >
        <Alert.Heading className="text-danger">
          {' '}
          Please Add A Book!
        </Alert.Heading>
      </Alert>
      <Form>
        <Row className="mb-4">
          <Col xs={7}>
            <Form.Control
              placeholder="Book title"
              ref={(el) => inputRef.current[0] = el}
              className="py-2"
            />
          </Col>
          <Form.Group as={Col}>
            <Form.Select
              defaultValue="Category"
              ref={(el) => inputRef.current[1] = el}
              className="py-2"
            >
              <option>Category</option>
              <option>Action</option>
              <option>Drama</option>
              <option>Romance</option>
            </Form.Select>
          </Form.Group>
          <Button
            as={Col}
            className="py-2"
            variant="primary"
            type="submit"
            onClick={addBook}
          >
            ADD BOOK
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default FormComponent;

FormComponent.propTypes = {
  submitBook: PropTypes.func.isRequired,
};
