import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';

const Banner = () => {
      return (
            <div>
                  <Container>
                        <Carousel variant="dark">
                              <Carousel.Item>
                                    <img style={{ filter: 'blur(2px)', height: '500px' }}
                                          className="d-block w-100"
                                          src="https://i.ibb.co/3zpnnHP/japan.jpg"
                                          alt="First slide"
                                    />
                                    <Carousel.Caption>
                                          <h3 style={{ color: "#56D5C4" }} className="fw-bolder fs-1">BOOK YOUR HOTEL AND ENJOY THE CITY</h3>

                                          <Button style={{ background: "#56D5C4", border: "none" }}>BOOK NOW</Button>{' '}

                                    </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                    <img style={{ filter: 'blur(2px)', height: '500px' }}
                                          className="d-block w-100"
                                          src="https://i.ibb.co/SKVPjc4/thailand.jpg"
                                          alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                          <h3 style={{ color: "#56D5C4" }} className="fw-bolder fs-1">BOOK AND EXPLORE THE CITY</h3>

                                          <Button style={{ background: "#56D5C4", border: "none" }}>BOOK NOW</Button>{' '}

                                    </Carousel.Caption>
                              </Carousel.Item>

                        </Carousel>
                  </Container>
            </div>
      );
};

export default Banner;