import React from "react";
import { Carousel } from "react-bootstrap";
import carousel1 from "../../images/cuisine (1).jpg";
import carousel2 from "../../images/cuisine (2).jpg";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="bg-dark">
          <img
            className="d-block w-100 opacity-50"
            src={carousel1}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Welcome To The Master Cuisine</h3>
          <p className='text-capitalized'>Just join us we will do the rest</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="bg-dark">
          <img
            className="d-block w-100 opacity-50"
            src={carousel2}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h3>We Will Teach You How You Can Be Master Of Your Cuisine</h3>
          <p className='text-capitalized'>Just join us we will do the rest.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
