import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Catindex = ({ cats }) => {
  return (
    <div>
      {cats?.map((cat, index) => {
        return (
          <Card
            style={{
              width: "18rem",
            }}
            key={index}
          >
            <img data-testid="custom-element" alt="big cat profile pic" src={cat.image} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {cat.age}
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <NavLink to={`/catshow/${cat.id}`}>Button</NavLink>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default Catindex;
