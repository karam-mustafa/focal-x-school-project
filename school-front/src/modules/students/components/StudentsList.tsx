import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

type TDataItem = {
  id?: string;
  name?: string;
  username?: string;
  website?: string;
};

type TData = Array<TDataItem>;

function StudentsList() {
  const [data, setData] = useState<TData>([]);
  const [reCallCounter, setReCallCounter] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  }, [reCallCounter]);

  return (
    <>
      <Button
        onClick={() => setReCallCounter((reCallCounter) => reCallCounter + 1)}
      >
        Re render data {reCallCounter}
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.website}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default StudentsList;
