import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ListItem(props) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>
        <Form.Group>
          {/* checkedbox */}
          <Form.Check type={"checkbox"}>
            <Form.Check.Input
              type={"checkbox"}
              checked={props.isChecked}
              onChange={(e) => {
                props.handleChecked(e, props.id);
              }}
            />
          </Form.Check>
        </Form.Group>
      </td>
      <td
        onClick={() => {
          navigate("/todo/" + props.id, {
            state: {
              Description: props.Description,
              Category: props.Category,
              Content: props.Content
            },

            replace: true
          });
        }}
      >
        {props.Description}
      </td>

      <td>{props.Category}</td>
      <td
        style={{ color: "red" }}
        onClick={() => {
          props.handleDeleteOne(props.id);
        }}
      >
        Delete
      </td>
    </tr>
  );
}

export default ListItem;
