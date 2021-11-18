import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const AllOrder = () => {
      const [orders, setOrders] = useState([])
      const [isUpdate, setIsUpdate] = useState(null)
      useEffect(() => {
            fetch('http://localhost:5000/orders')
                  .then(res => res.json())
                  .then(data => setOrders(data))
      }, [isUpdate])

      const clickHandle = id => {

            const url = `http://localhost:5000/orders/${id}`
            fetch(url)
                  .then(res => res.json())
                  .then(data => {
                        if (data.matchedCount > 0) {
                              alert('approved successfully!')
                              setIsUpdate(true)
                        } else {
                              setIsUpdate(false)
                        }
                        console.log(data)
                  });
      }
      const deletehandeler = id => {

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
                                    const remainingOrders = orders.filter(userOrder => userOrder._id !== id)
                                    setOrders(remainingOrders);
                              }
                        });
            }


      }
      return (
            <div className="container">
                  {
                        orders.map(order => <Row xs={1} md={2} className="g-4">
                              <Col>
                                    <Card>

                                          <Card.Body>
                                                <Card.Title>{order.email}</Card.Title>
                                                <Card.Title>{order.offerName}</Card.Title>
                                                <button onClick={() => deletehandeler(order._id)} className="btn btn-primary">DELETE</button>
                                                <h4 className="text-danger">{order.status}</h4>
                                                <button className="btn btn-primary" onClick={() => clickHandle(order._id)}>Change Status</button>
                                          </Card.Body>
                                    </Card>
                              </Col>
                        </Row>
                        )
                  }

            </div>
      );
};

export default AllOrder;