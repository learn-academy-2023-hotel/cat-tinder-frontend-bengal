import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "reactstrap";

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams();
  let currentCat = cats?.find((cat) => cat.id === +id);

  const handleSubmit = () => {
    deleteCat(currentCat.id);
  };
  return (
    <div>
      {currentCat && (
        <>
          <img
            alt={`profile of a cat  named ${currentCat.name}`}
            src={currentCat.image}
            className="showcat"
          />
          <div className="show-text">Enjoys: {currentCat.enjoy}</div>
          <div className="show-text">Age: {currentCat.age}</div>
          <div className="show-button">
            <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
              <Button className="view-button"> Edit Purrrfile</Button>
            </NavLink>
          </div>
          <div className="show-button">
            <NavLink to={"/catindex/"} className="nav-link">
              <Button onClick={handleSubmit} className="view-button">
                {" "}
                Delete Profile
              </Button>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default CatShow;
