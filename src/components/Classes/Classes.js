import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Classes = () => {
  //  Declaring state & Getting data from programs json file
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch("./programs.json")
      .then((resp) => resp.json())
      .then((data) => setPrograms(data));
  }, []);
  return (
    <Container className="my-5">
      <h2 className="text-dark text-capitalized fw-blod fs-2 text-center">
        Programs
      </h2>
      <Row xs={1} md={2} lg={3}>
        {programs.map((program) => (
          <Col className="p-2" key={program.id}>
            <Card>
              <Card.Img variant="top" src={program.img} />
              <Card.Body>
                <Card.Title>{program.name}</Card.Title>
                <Button className="btn d-block mx-auto mt-3 text-white btn-bg border-0">
                  Program Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Classes;
