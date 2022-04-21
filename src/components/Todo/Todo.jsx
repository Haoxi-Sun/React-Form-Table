import React, { useEffect, useState } from "react";
import { Table, Form, Container, Row } from "react-bootstrap";
import CreateForm from "./CreateForm";
import ListItem from "./ListItem";

function SubmitForm() {
  // Collect an object's information from the form
  const [Data, setData] = useState({
    info: {
      Description: "",
      Category: "",
      Content: "",
      isChecked: false
    }
  });

  // Store input data into the State 'Data'
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevValue) => ({
      info: {
        ...prevValue.info,
        [name]: value
      }
    }));
  }

  // Store the object into the ListData while submitted
  function handleSubmit(e) {
    e.preventDefault();
    // Get data from the sessionStorage
    const prevData = sessionStorage.getItem("Data")
      ? JSON.parse(sessionStorage.getItem("Data"))
      : [];
    // Store data into the sessionStorage
    const newData = [...prevData, Data.info];
    sessionStorage.setItem("Data", JSON.stringify(newData));
    // Empty the form
    setData({
      info: {
        Description: "",
        Category: "",
        Content: "",
        isChecked: false
      }
    });
    // Reload the page, and display updated data.
    window.location.reload();
  }

  // Delete a row when 'delete' clicked
  function handleDeleteOne(id) {
    // Filter Data and reStore filtered data into the sessionStorage
    const newItem = JSON.parse(sessionStorage.getItem("Data")).filter(
      (iten, index) => {
        return index != id;
      }
    );
    sessionStorage.setItem("Data", JSON.stringify(newItem));
    // Reload the page, and display updated data.
    window.location.reload();
  }

  // CheckedBox,
  // Selete multiple rows.
  function handleChecked(e, id) {
    const prevData = JSON.parse(sessionStorage.getItem("Data")).map(
      (item, index) => {
        if (index === id) {
          return { ...item, isChecked: e.target.checked };
        }
        return item;
      }
    );
    sessionStorage.setItem("Data", JSON.stringify(prevData));
    // Reload the page, and display updated data.
    window.location.reload();
  }

  // Delete functoin to delete selected rows.
  function handleDeleteAll() {
    const newItem = JSON.parse(sessionStorage.getItem("Data")).filter((item) => {
      return item.isChecked !== true;
    });
    sessionStorage.setItem("Data", JSON.stringify(newItem));
    // Reload the page, and display updated data.
    window.location.reload();
  }

  const [selectAll, setSelectAll] = useState(false);
  return (
    <Container style={{ margin: "50px auto" }}>
      <Row>
        {/* Form */}
        <CreateForm
          Data={Data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="col-md-8">
          <button onClick={handleDeleteAll} style={{ margin: "5px auto 5px" }}>
            Delete selected
          </button>
          {/* Table to diaplay data */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <Form.Group>
                    <Form.Check type={"checkbox"}>
                      <Form.Check.Input
                        type={"checkbox"}
                        checked={selectAll}
                        onChange={(e) => {
                          setSelectAll(e.target.checked);
                          console.log(e.target.checked);
                          // Set all 'isChecked' to have been checked
                          const prevData = JSON.parse(
                            sessionStorage.getItem("Data")
                          ).map((item) => ({
                            ...item,
                            isChecked: e.target.checked
                          }));
                          sessionStorage.setItem(
                            "Data",
                            JSON.stringify(prevData)
                          );
                        }}
                      />
                    </Form.Check>
                  </Form.Group>
                </th>
                <th>Description</th>
                <th>Category</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {JSON.parse(sessionStorage.getItem("Data") || "[]").map(
                (data, index) => {
                  return (
                    <ListItem
                      key={index}
                      id={index}
                      Description={data.Description}
                      Category={data.Category}
                      Content={data.Content}
                      handleDeleteOne={handleDeleteOne}
                      handleChecked={handleChecked}
                      isChecked={data.isChecked}
                    />
                  );
                }
              )}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
}

export default SubmitForm;
