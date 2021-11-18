import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Error = () => {
      return (
            <div className="container">
                  <Row>
                        <Col>
                              <div className="text-center design">
                                    <h1>404</h1>
                                    <h3>The page you are looking for is not available</h3>
                                    <Link to="/home"> <button type="button" style={{ background: "#56D5C4" }} className="btn">Go Back</button></Link>
                              </div>
                        </Col>
                  </Row>

            </div>
      );
};

export default Error;