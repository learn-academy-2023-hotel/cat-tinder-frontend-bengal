import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const Catindex = ({ cats }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
      {cats?.map((cat, index) => {
        return (
          <div className="card-wrapper">
          <Card
            style={{
              width: "18rem", height: "300px", margin: "50px", marginBottom: "100px", opacity: ".8",
            }}
            key={index}
          >
            <img alt="big cat profile pic" src={cat.image} style={{ objectFit: "cover", opacity: 1 + '!important' }} />
            <CardBody className="text-center">
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {cat.age}
              </CardSubtitle>
              <CardText>{cat.enjoy}</CardText>
              <NavLink to={`/catshow/${cat.id}`}>
                <Button className="view-button" style={{ fontFamily:'Trade Winds, sans-serif'}} >View Profile</Button>
              </NavLink>
            </CardBody>
          </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Catindex;
