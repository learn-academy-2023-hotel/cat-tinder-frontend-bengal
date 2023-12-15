import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const CatNew = ({ createCat }) => {
  const navigate = useNavigate();
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoy: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createCat(newCat);
    navigate("/catindex");
  };

  return (
    <div className="new-form">
      <Container fluid="xs">
        <Row className="justify-content-center">
          <Col xs="12" md="6">
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  type="text"
                  onChange={handleChange}
                  value={newCat.name}
                  style={{ width: "100%" }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  placeholder="Enter age"
                  type="text"
                  onChange={handleChange}
                  value={newCat.age}
                  style={{ width: "100%" }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="enjoy">Enjoy</Label>
                <Input
                  id="enjoy"
                  name="enjoy"
                  placeholder="What Makes You Purrr..."
                  type="text"
                  onChange={handleChange}
                  value={newCat.enjoy}
                  style={{ width: "100%" }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image URL</Label>
                <Input
                  id="image"
                  name="image"
                  placeholder="png, jpg, jpeg"
                  type="url"
                  onChange={handleChange}
                  value={newCat.image}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </Form>
            <Button
              className="view-button"
              style={{ fontFamily: "Trade Winds, sans-serif" }}
              onClick={handleSubmit}
              name="submit"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CatNew;
