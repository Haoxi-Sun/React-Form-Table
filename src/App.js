import React, { Fragment } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo/Todo";
import Details from "./components/Todo/Details";
import About from "./components/About/about";

function App() {
  return (
    <Fragment>
      {/* Navbar to 'todo' and 'about' sections. */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">todo</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Routers. */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Todo />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo/:id" element={<Details />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
