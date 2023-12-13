import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "reactstrap";

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams();
  let currentCat = cats?.find((cat) => cat.id === +id);

  const handleSubmit = () => {
    deleteCat(currentCat.id)
  }
  return (
    <div>
      {currentCat && (
        <>
          <img
            alt={`profile of a cat  named ${currentCat.name}`}
            src={currentCat.image}
          />
          {currentCat.enjoy}
          {currentCat.age}
          <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
           <Button> {" "}
            Edit Purrrfile
            </Button>
          </NavLink>
          <NavLink to={"/catindex/"} className="nav-link">
            <Button onClick={handleSubmit}>{" "}
            Delete Profile
            </Button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default CatShow;
