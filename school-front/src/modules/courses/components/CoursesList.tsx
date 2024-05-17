import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getCourses } from "../services/list.services";
import { TCourse, TCourses } from "../type/list.types";

function CoursesList() {
  const [courses, setCourses] = useState<TCourses>([]);

  useEffect(() => {
    getCourses(setCourses);
  }, []);

  return (
    <Row>
      {courses.map((course: TCourse) => {
        return (
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={course.url}
                style={{ width: "100%", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.title}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default CoursesList;
