import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className='my-5'>
      <h2 className='text-capitalized text-center'>It all starts in the kitchen.</h2>
      <Row xs={1} md={2}>
        <Col className="p-3 p-sm-5">
          <div className="bg-light p-2 p-md-5">
            <p>
              Our Cooking School features a long and proud history of more than
              100 years.
            </p>
            <p>
              Founded at the end of the XIXth century by few NYC top Chefs of
              the time, the Cooking School has always been the ultimate
              destination for anyone who’ve ever wanted to become a professional
              Chef!
            </p>
            <p>
              We’re also known to be one of the pioneering facilities, that
              defied the racism and sexism of the age, always having accepted
              students based solely on their skills and perspective!
            </p>
            <p>
              Over the years we’ve been evolving together with the culinary
              trends that spanned across the culinary world…
            </p>
            <p>
              For example, when the Asian cuisine became trending, we instantly
              added it to our Classes List, just as we did later with the Fusion
              cuisine as it was rising in the ’90s.
            </p>
            <p>
              All in all, we always feature a strong team of professional Chefs,
              a strong list of cooking classes and a forward-only attitude!
            </p>
          </div>
          <div className="bg-light">
            <img
              className="img-fluid img-border"
              src="https://ld-wp.template-help.com/wordpress_59011/wp-content/uploads/2016/08/Depositphotos_7880893_original.jpg"
              alt=""
            />
          </div>
        </Col>
        <Col className="p-2 p-sm-5">
          <div className="bg-light">
            <img
              className="img-fluid img-border-left"
              src="https://ld-wp.template-help.com/wordpress_59011/wp-content/uploads/2016/08/Depositphotos_5023547_original.jpg"
              alt=""
            />
          </div>
          <div className="bg-light p-2 p-md-5">
            <p className="fw-bolder">
              Today we have more than 6 main cooking classes and more than 35
              sub-classes, all taught by a team of well-known New England Chefs.
            </p>
            <h5>Our current list of Classes includes:</h5>
            <p className="py-2 fw-bold">* Baking & Pastr</p>
            <p className="py-2 fw-bold">* Fish, Meat & Poultry</p>
            <p className="py-2 fw-bold">* International Cuisine</p>
            <p className="py-2 fw-bold">* Desserts</p>
            <p className="py-2 fw-bold">* Seafood & Wine</p>
            <p className="py-2 fw-bold">* Exotic Cuisines</p>
            <p className="py-2 fw-bolder">… and 35 more sub-classes!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
