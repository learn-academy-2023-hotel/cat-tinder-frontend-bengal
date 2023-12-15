import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const Catindex = ({ cats }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cats?.map((cat, index) => {
        return (
          <div>
            <Card
              className="text-center"
              style={{
                width: "18rem",
                height: "100%",
                maxHeight: "100%",
                margin: "50px",
                marginBottom: "100px",
                opacity: ".8",
              }}
              key={index}
            >
              <CardBody>
                <img
                  className="index-img"
                  alt="big cat profile pic"
                  src={cat.image}
                  style={{
                    objectFit: "cover",
                    opacity: 1 + "!important",
                  }}
                />
                <CardTitle tag="h5">{cat.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {cat.age}
                </CardSubtitle>
                <CardText>{cat.enjoy}</CardText>
              </CardBody>
              <NavLink to={`/catshow/${cat.id}`}>
                <Button
                  className="view-button"
                  style={{ fontFamily: "Trade Winds, sans-serif" }}
                >
                  View Profile
                </Button>
              </NavLink>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Catindex;
