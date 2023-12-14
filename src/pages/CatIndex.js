import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const Catindex = ({ cats }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
      {cats?.map((cat, index) => {
        return (
          <Card
            style={{
              width: "18rem", height: "300px", margin: "10px", 
            }}
            key={index}
          >
            <img alt="big cat profile pic" src={cat.image} style={{ objectFit: "cover" }} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {cat.age}
              </CardSubtitle>
              <CardText>{cat.enjoy}</CardText>
              <NavLink to={`/catshow/${cat.id}`}>
                <Button>View Profile</Button>
              </NavLink>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default Catindex;
