import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import img from "../../images/404.svg";

const NotFound = () => {
  const history = useHistory();
  const handleBackToHome = () => {
    history.push("/");
  };
  return (
    <Container>
      <Row>
        <img className="my-5 fluid" src={img} alt="" />
        <div>
          <Button onClick={handleBackToHome} className='d-block mx-auto mb-5'>Back To Home</Button>
        </div>
      </Row>
    </Container>
  );
};

export default NotFound;
