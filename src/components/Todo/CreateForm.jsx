import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

// Create a form to get data from useResolvedPath.
function CreateForm(props) {
  return (
    <Form className="col-md-4" onSubmit={props.handleSubmit}>

      {/* Description */}
      <Form.Group as={Row} className="mb-3" controlId="formDescription">
        <Form.Label column md={3}>
          Description:{" "}
        </Form.Label>
        <Col md={9}>
          <Form.Control
            type="text"
            name="Description"
            onChange={props.handleChange}
            value={props.Data.Description}
          />
        </Col>
      </Form.Group>

      {/* Category */}
      <Form.Group as={Row} className="mb-3" controlId="formCategory">
        <Form.Label column md={3}>
          Category:{" "}
        </Form.Label>
        <Col md={9}>
          <Form.Select
            aria-label="category"
            name="Category"
            onChange={props.handleChange}
            value={props.Data.Category}
          >
            <option></option>
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="HTML">HTML</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Content */}
      <Form.Group as={Row} className="mb-3" controlId="formContent">
        <Form.Label column md={3}>
          Content:{" "}
        </Form.Label>
        <Col md={9}>
          <Form.Control
            type="textarea"
            name="Content"
            onChange={props.handleChange}
            value={props.Data.Content}
          />
        </Col>
      </Form.Group>
    
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateForm;
