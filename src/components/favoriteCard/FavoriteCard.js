import { Card, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchCuurentWeather, getIcon } from "../../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchWeatherDataFailure,
  getWeatherData,
} from "../../redux/main/mainActions";
import { useSelector } from "react-redux";
import { selectMessureMethod } from "../../redux/prefernces/preferencesSelectors";

import "./favoriteCard.scss";
import { ErrorOutlineOutlined } from "@mui/icons-material";
import { PROJECT_URL } from "../../constants";

const FavoriteCard = ({ info }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const messureMethod = useSelector(selectMessureMethod);
  const dispatch = useDispatch();

  const { cityKey, cityName } = info;

  const handleClick = () => {
    dispatch(getWeatherData(cityKey, cityName));
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCuurentWeather(cityKey);

        setData({
          icon: getIcon(data[0].WeatherIcon),
          temp: data[0].Temperature.Metric.Value,
          description: data[0].WeatherText,
        });
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
        dispatch(fetchWeatherDataFailure());
      }
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <Link to={`/${PROJECT_URL}`} onClick={() => handleClick()}>
      <Card
        className="favorite-card-styles"
        style={{ backgroundColor: "var(--color-background-secondery)" }}
      >
        <Typography variant="div">{cityName}</Typography>
        {isLoading && <CircularProgress />}
        {hasError && (
          <div>
            <ErrorOutlineOutlined /> <span>Somthing went wrong</span>{" "}
          </div>
        )}
        {data && (
          <div>
            {" "}
            <Typography>
              <img src={data.icon} alt="" />
            </Typography>
            <Typography>{data.description}</Typography>
            <Typography variant="h5">
              {messureMethod === "c"
                ? Math.round(data.temp)
                : Math.round(data.temp * 1.8 + 32)}
              °
            </Typography>{" "}
          </div>
        )}
      </Card>
    </Link>
  );
};

export default FavoriteCard;
