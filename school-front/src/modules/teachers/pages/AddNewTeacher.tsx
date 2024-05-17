import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { TTeacher } from "../types/list";
import { useDispatch } from "react-redux";
import { addNewTeacher } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";

export default function AddNewTeacher() {
  const [name, setName] = useState<TTeacher["name"]>();
  const [email, setEmail] = useState<TTeacher["email"]>();
  const [image, setImage] = useState<TTeacher["image"]>();
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submit = () => {
    const { payload } = dispatch(
      addNewTeacher({
        name,
        email,
        image,
      })
    );

    payload
      .then((res) => {
        console.log(res);
        
        if (res.status == 200) {
          navigate("/teachers/list");
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
        setIsError(true);
      });
  };

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image url</Form.Label>
        <Form.Control
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Image url"
        />
      </Form.Group>

      {isError && <div className="alert alert-danger">Server Error</div>}

      <Button onClick={submit} variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
}
