import React from "react";
import "./navBar.scss";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectColorMode } from "../../redux/prefernces/preferencesSelectors";
import { useDispatch } from "react-redux";
import { changeColorMode } from "../../redux/prefernces/prefrencesActions";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { HomeOutlined, StarOutlineOutlined } from "@mui/icons-material";
import { PROJECT_URL } from "../../constants";

const NavBar = () => {
  const dispatch = useDispatch();
  const colorMode = useSelector(selectColorMode);
  const pathName = useLocation().pathname;

  const toggleColorMode = () => {
    const oppositeColor = colorMode === "dark" ? "light" : "dark";
    dispatch(changeColorMode(oppositeColor));
  };
  return (
    <div className="nav-bar">
      <div className="color-mode-btn">
        <IconButton
          style={{ color: "white" }}
          onClick={() => toggleColorMode()}
        >
          {colorMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
      <div className="links">
        <Link
          to={`/${PROJECT_URL}`}
          className={`${pathName === `/${PROJECT_URL}` ? "active" : ""}`}
        >
          <span className="link-title"> Home Page</span>{" "}
          <span className="link-icon">
            <HomeOutlined fontSize="large" />
          </span>
        </Link>
        <Link
          to={`/${PROJECT_URL}/favorites`}
          className={`${
            pathName === `/${PROJECT_URL}/favorites` ? "active" : ""
          }`}
        >
          <span className="link-title"> Favorites</span>
          <span className="link-icon">
            <StarOutlineOutlined fontSize="large" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
