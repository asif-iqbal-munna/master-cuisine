import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import useCourses from "../hooks/UseCourses";

const Courses = () => {
  // Getting data from useCourses hook
  const [courses] = useCourses();
  return (
    <Container className="my-5">
      <h2 className="text-dark text-capitalized fw-blod fs-2 text-center">
        Courses
      </h2>
      <Row xs={1} md={2} lg={3}>
        {courses.map((course) => (
          <Card className="text-white border-0 p-2 s-color" key={course.id}>
            <div className="bg-dark">
              <Card.Img
                className="opacity-50"
                src={course.img}
                alt="Card image"
              />
            </div>
            <Card.ImgOverlay className="mt-5">
              <Card.Title className="fs-2">{course.name}</Card.Title>
              <Card.Text className="fs-3">${course.price}</Card.Text>
              <Card.Text className="fs-6">
                {course.students}+ Students From Different Countries
              </Card.Text>
              <Rating className='text-warning'
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                initialRating={course.rating}
                readonly
              />
              ({course.students / 5})
            </Card.ImgOverlay>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
