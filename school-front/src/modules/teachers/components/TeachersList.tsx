import { Button, Row, Table } from "react-bootstrap";
import { TTeacher, TTeachers } from "../types/list";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllTeachers } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";

function TeachersList() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const data = useSelector((state: any) => state.teachers);

  const [teachers, setTeachers] = useState<TTeachers>([]);

  useEffect(() => {
    dispatch(getAllTeachers());
  }, []);

  useEffect(() => {
    if (data) {
      data.then((res: TTeachers) => {
        setTeachers(res);
      });
    }
  }, [data]);

  return (
    <>
      <Row className="w-100 mt-4">
        <h1 className="text-center">Teachers List</h1>
      </Row>

      <div className="my-4 w-100">
        <Button
          onClick={() => {
            navigate("/teachers/add");
          }}
          className="w-100"
        >
          Add new
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((item: TTeacher) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.image}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default TeachersList;
