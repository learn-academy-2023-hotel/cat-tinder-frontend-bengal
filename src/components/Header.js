import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import scratch from '../assests/scratch2.svg'

const Header = () => {
  return (
    <>
      <div className="header">
        WildCat Tinder
        </div>
      <div className="nav-container">
        <div className="navbar">
        <Nav pills className="nav-center">
          <NavItem>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/catindex" className="nav-link">
              Meet the cats
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="catnew" className="nav-link">
              New account
            </NavLink>
          </NavItem>
        </Nav>
        </div>
      </div>
    </>
  );
};

export default Header;
