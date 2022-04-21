import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  let location = useLocation();
  let Description = location.state.Description;
  let Category = location.state.Category;
  let Content = location.state.Content;
  return (
    <div style={{ margin: "5px 10px" }}>
      <p>
        <span style={{ fontWeight: "bold" }}>Description: </span>
        {Description}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Category: </span>
        {Category}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Content: </span>
        {Content}
      </p>
      <Button
        onClick={() => navigate("/", { replace: true })}
        variant="secondary"
        size="md"
      >
        Back
      </Button>
    </div>
  );
}

export default Details;
