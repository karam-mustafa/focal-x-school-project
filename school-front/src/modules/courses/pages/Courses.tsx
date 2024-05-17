import React from "react";
import { Row } from "react-bootstrap";
import CoursesList from "../components/CoursesList";

function Courses() {
  return (
    <>
      <Row className="text-center">
        <h1>Courses List</h1>
      </Row>

      <Row className="container mx-auto">
        <CoursesList />
      </Row>
    </>
  );
}

export default Courses;
