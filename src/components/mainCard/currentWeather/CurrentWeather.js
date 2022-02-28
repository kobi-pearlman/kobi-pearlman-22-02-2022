import React from "react";
import { useSelector } from "react-redux";
import {
  selectCityInfo,
  selectCurrentTemp,
  selectDescription,
  selectIcon,
} from "../../../redux/main/mainSelectors";

import "./currentWeather.scss";

const CurrentWeather = () => {
  const temperature = useSelector(selectCurrentTemp);
  const { cityName } = useSelector(selectCityInfo);
  const icon = useSelector(selectIcon);
  const description = useSelector(selectDescription);

  return (
    <div className="basic-data-container">
      <span className="icon">
        <img src={icon} alt="" />
      </span>
      <span>
        <h3>{cityName}</h3>
        <h1>{temperature}°</h1>
        <h3>{description}</h3>
      </span>
    </div>
  );
};

export default CurrentWeather;
