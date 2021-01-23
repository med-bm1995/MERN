import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteContacts } from "../redux/actions/contactsActions";
import EditModal from "../components/EditModal";

function ContactCarte({ contact }) {
  const dispatch = useDispatch();
  const delet = () => {
    dispatch(deleteContacts(contact._id));
  };
  return (
    <div style={{ minWidth: "300px", margin: "10px" }}>
      <Card>
        <Card.Header>{contact.name}</Card.Header>
        <Card.Body>
          <Card.Title> {contact.email} </Card.Title>
          <Card.Text>{contact.phone} </Card.Text>
          <Card.Header>
            {contact.dateCreation.slice(0, 10)}/
            {contact.dateCreation.slice(11, 19)}
          </Card.Header>
        </Card.Body>
        <Button onClick={delet}>DELETE</Button>
        <EditModal contact={contact} />
      </Card>
    </div>
  );
}

export default ContactCarte;
