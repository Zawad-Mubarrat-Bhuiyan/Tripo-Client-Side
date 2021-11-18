import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = ({ offers }) => {
      const { _id, name, price, description, img } = offers;
      return (
            <div >
                  <Col>
                        <Card style={{ height: '30rem' }}>
                              <Card.Img style={{ height: '14rem' }} variant="top" src={img} />
                              <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                          {description.slice(0, 100)}
                                    </Card.Text>
                                    <Card.Text>
                                          <span style={{ color: "#56D5C4" }}>Price:</span>{price}$
                                    </Card.Text>
                                    <Link to={`/details/${_id}`}>
                                          <button style={{ background: "#56D5C4", color: "white" }} className="btn">Book Now</button>
                                    </Link>
                              </Card.Body>
                        </Card>
                  </Col>

            </div>
      );
};

export default Offer;