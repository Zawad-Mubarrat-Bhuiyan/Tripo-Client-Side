import React from 'react';
import { Form } from 'react-bootstrap';
const Feedback = () => {
      return (
            <div className="container">
                  <h1 style={{ color: "#56D5C4" }}>Add Your FeedBack</h1>
                  <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                              <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                  </Form>
            </div>
      );
};

export default Feedback;