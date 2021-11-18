import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
const MyBooking = () => {
      const { user } = useAuth();
      const [userOrders, setUserOders] = useState([]);
      useEffect(() => {
            fetch(`http://localhost:5000/orders`)
                  .then(res => res.json())
                  .then(data => setUserOders(data))
      }, [])

      const handleDeleteOrder = id => {
            const proceed = window.confirm('Are you sure,you want to delete');
            if (proceed) {
                  const url = `http://localhost:5000/orders/${id}`
                  fetch(url, {
                        method: 'DELETE',

                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.deletedCount > 0) {
                                    alert('deleted Successfully!')
                                    const remainingOrders = userOrders.filter(userOrder => userOrder._id !== id)
                                    setUserOders(remainingOrders);
                              }
                        });
            }
      }

      return (
            <div>
                  <Container className="my-5">

                        <Row xs={1} md={2} lg={2} className="g-4">
                              {
                                    userOrders.filter(userOrder => userOrder.email.includes(user.email)).map(myOrder =>
                                    (
                                          <Col key={myOrder._id}>

                                                <Card>
                                                      <Card.Body className="text-start">
                                                            <Card.Text>
                                                                  <h6>Email: {myOrder.email}</h6>
                                                            </Card.Text>
                                                            <Card.Text>
                                                                  <h6>phone: {myOrder.phone}</h6>
                                                            </Card.Text>
                                                            <Card.Text>
                                                                  <h6>service-name: {myOrder.name}</h6>
                                                            </Card.Text>
                                                            <Card.Text>
                                                                  <h6>Hotel Name: {myOrder.offerName}</h6>
                                                            </Card.Text>

                                                            <div className="d-flex align-items-center">
                                                                  <Card.Text>
                                                                        <h6>status: {myOrder.status}</h6>
                                                                  </Card.Text>

                                                            </div>
                                                            <button onClick={() => handleDeleteOrder(myOrder._id)} className="btn btn-danger">Delete</button>
                                                      </Card.Body>
                                                </Card>
                                          </Col>
                                    )
                                    )
                              }
                        </Row>
                  </Container>
            </div>
      );
};

export default MyBooking;