import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContacts } from "../redux/actions/contactsActions";
import { Redirect } from "react-router-dom";
function AddModale() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cancel, setCancel] = useState(false);
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addContacts({ name, email, phone }));
    setCancel(!cancel);
  };
  return (
    <>
      {cancel ? (
        <Redirect to="/list" />
      ) : (
        <div style={{ margin: "50px m-2" }}>
          <Form>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="name"
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>phone</Form.Label>
              <Form.Control
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="phone"
              />
            </Form.Group>
            <Button onClick={add}>AddContact</Button>
            <Button onClick={() => setCancel(!cancel)}>Cancel</Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default AddModale;
