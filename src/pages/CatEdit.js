import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";

const CatEdit = ({cats, updateCat}) => {
    const navigate= useNavigate()
    const { id }= useParams ()
    let currentCat=cats?.find((cat)=> cat.id === +id)

    const [editCat, setEditCat]=useState({
        name: currentCat.name,
        age: currentCat.age,
        enjoy: currentCat.enjoy,
        image: currentCat.image
    })
    const handleChange = (e) => {
        setEditCat({...editCat, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        updateCat(editCat, currentCat.id)
        navigate(`/catshow/${currentCat.id}`)
    }

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter Name"
            type="text"
            onChange={handleChange}
            value={editCat.name}
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
            value={editCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoy">Enjoy</Label>
          <Input
            id="enjoy"
            name="enjoy"
            placeholder="enjoy..."
            type="text"
            onChange={handleChange}
            value={editCat.enjoy}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            id="image"
            name="image"
            placeholder="image.png"
            type="text"
            onChange={handleChange}
            value={editCat.image}
          />
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit} name="submit">
        Submit
      </Button>
    </div>
  );
};

export default CatEdit;
