import axios from "axios";
import { GET_CONTACTS } from "../constants/actionTypes";

export const getContacts = () => (dispatch) => {
  axios
    .get("/api/contacts/")
    .then((res) => dispatch({ type: GET_CONTACTS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addContacts = (newContact) => (dispatch) => {
  axios
    .post("/api/contacts/add", newContact)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const deleteContacts = (idContact) => (dispatch) => {
  axios
    .delete(`/api/contacts/delete/${idContact}`)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const editContacts = (idContact, editedContact) => (dispatch) => {
  axios
    .put(`/api/contacts/update/${idContact}`, editedContact)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};
