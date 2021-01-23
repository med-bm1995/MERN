import "./App.css";
import Navvbar from "./components/Navbar";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Button } from "react-bootstrap";

import ContactList from "./components/ContactList";
import AddModal from "./components/AddModal";
function App() {
  return (
    <BrowserRouter>
      <Navvbar />
      <div className="App">
        <Link to="/list">
          {" "}
          <Button>contact list</Button>
        </Link>
        <Link to="/from">
          {" "}
          <Button>add contact</Button>
        </Link>
      </div>
      <Route
        exact
        path="/"
        render={() => <h1>you can see your contact list</h1>}
      />
      <Route path="/list" render={() => <ContactList />} />
      <Route path="/from" render={() => <AddModal />} />
    </BrowserRouter>
  );
}

export default App;
