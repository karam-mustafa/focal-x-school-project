import { Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Teachers() {
  return (
    <>
      <Row className="container mx-auto">
        <Outlet />
      </Row>
    </>
  );
}

export default Teachers;
