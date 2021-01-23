import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/actions/contactsActions";
import ContactCarte from "./ContactCarte";

function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "50px",
        justifyContent: "space-between",
      }}
    >
      {contacts &&
        contacts.map((contact) => (
          <ContactCarte key={contact._id} contact={contact} />
        ))}
    </div>
  );
}
export default ContactList;
