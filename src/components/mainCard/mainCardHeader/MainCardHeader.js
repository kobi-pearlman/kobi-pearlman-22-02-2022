import React from "react";
import "./mainCardHeader.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { selectCityInfo } from "../../../redux/main/mainSelectors";
import {
  addtoFavorites,
  removeFromFavorites,
} from "../../../redux/main/mainActions";
import { IconButton } from "@mui/material";
import { selectMessureMethod } from "../../../redux/prefernces/preferencesSelectors";
import { changMessureMethod } from "../../../redux/prefernces/prefrencesActions";

const MainCardHeader = () => {
  const dispatch = useDispatch();
  const { isFavorite, cityKey, cityName } = useSelector(selectCityInfo);
  const isCelcius = useSelector(selectMessureMethod);

  const handleMethodClick = (val) => {
    if (val === isCelcius) return;
    dispatch(changMessureMethod(val));
  };

  const handleFavClick = () => {
    isFavorite
      ? dispatch(removeFromFavorites(cityKey))
      : dispatch(addtoFavorites({ cityKey, cityName }));
  };
  return (
    <div className="weather-header">
      <div className="btns">
        <span className="method-btn">
          <span
            className={`toggle left ${isCelcius === "c" && "active"}`}
            onClick={() => handleMethodClick("c")}
          >
            C°
          </span>
          <span
            className={`toggle right ${isCelcius === "f" && "active"}`}
            onClick={() => handleMethodClick("f")}
          >
            F°
          </span>
        </span>
        <span className="fav-btn">
          <IconButton onClick={() => handleFavClick()}>
            <FavoriteIcon
              sx={
                isFavorite && {
                  color: "red",
                }
              }
            />
          </IconButton>
        </span>
      </div>
    </div>
  );
};

export default MainCardHeader;
