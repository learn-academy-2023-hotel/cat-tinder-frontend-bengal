import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">WildCat Tinder</div>
      <div>
        <Nav pills className="navbar">
          <NavItem>
            <NavLink active to="/">
              <img
                src="https://images.unsplash.com/photo-1627608221028-63314f261558?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Big Cat Tinder logo with outline of cat"
                height={50}
                width={50}
              />
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/catindex">Meet the cats</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="catnew">New account</NavLink>
          </NavItem>
        </Nav>
      </div>
    </>
  );
};

export default Header;
