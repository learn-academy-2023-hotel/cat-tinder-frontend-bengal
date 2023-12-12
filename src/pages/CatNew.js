import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CatNew = ({ createCat }) => {
    const navigate = useNavigate()
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
    navigate("/catindex")
  };

  return (
    <>
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
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input id="age" name="age" placeholder="Enter age" type="text" onChange={handleChange}
            value={newCat.age}/>
        </FormGroup>
        <FormGroup>
          <Label for="enjoy">Enjoy</Label>
          <Input id="enjoy" name="enjoy" placeholder="enjoy..." type="email" onChange={handleChange}
            value={newCat.enjoy}/>
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input id="image" name="image" placeholder="image.png" type="text" onChange={handleChange}
            value={newCat.image}/>
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit} name="submit">
        Submit
      </Button>
    </>
  );
};

export default CatNew;
