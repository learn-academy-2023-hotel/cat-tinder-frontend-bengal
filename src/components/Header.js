import React, { useState } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import useSound from "use-sound";
import scratch from "../assests/scratch2.png";
import Noise from "../assests/ART OF NOISE_  MOMENTS IN LOVE (THE ORIGINAL).mp3";

const Header = () => {
  const [play, { stop }] = useSound(Noise, { volume: 1 });
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="header">
        WildCat Tinder
        <button
          onClick={handleButtonClick}
          className={`bounce ${isPlaying ? "playing" : ""}`}
          style={{
            border: "none",
            background: "none",
            padding: 0,
            animationDuration: "0.5s",
          }}
        >
          <img
            alt="logo"
            src={scratch}
            width={"180"}
            height={"180"}
            style={{ cursor: "pointer" }}
          />
        </button>
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
