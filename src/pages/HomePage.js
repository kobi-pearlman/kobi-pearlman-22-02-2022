import React from "react";
import SearchBarContainer from "../components/searchBar/SearchBarContainer";
import MainCardContainer from "../components/mainCard/MainCardContainer";

import "./homePage.scss";
import { useSelector } from "react-redux";
import { selectIsCurrentWeatherReady } from "../redux/main/mainSelectors";
import { selectIsWeatherLoading } from "../redux/requestsStatus/requestsStatusSelectors";

const HomePage = () => {
  const isLoading = useSelector(selectIsWeatherLoading);
  const isDataReady = useSelector(selectIsCurrentWeatherReady);
  return (
    <div className="home-page">
      <SearchBarContainer />
      <MainCardContainer isLoading={isLoading} isReady={isDataReady} />
    </div>
  );
};

export default HomePage;
