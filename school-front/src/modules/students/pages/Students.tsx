import React from "react";
import { Row, Table } from "react-bootstrap";
import StudentsList from "../components/StudentsList";

function Students() {
  return (
    <>
      <Row className="w-100 mt-4">
        <h1 className="text-center">Students List</h1>
      </Row>
      <Row className="container mx-auto">
        <StudentsList />
      </Row>
    </>
  );
}

export default Students;
