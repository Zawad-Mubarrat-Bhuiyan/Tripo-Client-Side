import { Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Offer from '../Offer/Offer';

const Offers = () => {
      const [offer, setOffer] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/offers')
                  .then(res => res.json())
                  .then(data => setOffer(data))

      }, [])
      return (
            <div>
                  <div className="container">
                        <h1 style={{ color: "#56D5C4" }} className="fw-bold mt-5 fs-1">We Offering</h1>
                        <Row xs={1} md={3} className="g-4">

                              {
                                    offer.length === 0 ?
                                          <div className="d-flex justify-content-center">
                                                <Spinner animation="border" />
                                          </div> :
                                          offer.map(offers => <Offer
                                                key={offers._id}
                                                offers={offers}
                                          ></Offer>)
                              }

                        </Row>

                  </div>

            </div>
      );
};

export default Offers;