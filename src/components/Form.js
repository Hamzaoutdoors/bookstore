import React from 'react';
import {
  Row, Form, Button, Col,
} from 'react-bootstrap';

const formStyle = [
  {
    width: '10.875rem',
    height: '1.5rem',
    margin: '1.813rem 32.75rem 1.188rem 0',
    fontSize: '1.25rem',
    fontWeight: 'Bold',
    letterSpacing: '-0.18px',
    color: '#888',
  },
];
const FormComponent = () => (
  <div className="form">
    <h2 style={formStyle[0]}>ADD NEW BOOK</h2>
    <Form>
      <Row className="mb-4">
        <Col xs={5} controlId="formGridCity">
          <Form.Control placeholder="Book title" />
        </Col>
        <Col xs={2} controlId="formGridCity">
          <Form.Control placeholder="Author" />
        </Col>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Select defaultValue="Category">
            <option>Category</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Romance</option>
          </Form.Select>
        </Form.Group>
        <Button as={Col} variant="primary" type="submit">
          ADD BOOK
        </Button>
      </Row>
    </Form>
  </div>
);

export default FormComponent;
