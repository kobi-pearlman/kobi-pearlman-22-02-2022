import React from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { seletSuggestions } from "../../redux/main/mainSelectors";
import { useDispatch } from "react-redux";
import { getSuggestions, getWeatherData } from "../../redux/main/mainActions";

const SearchBarContainer = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector(seletSuggestions);

  const handleSearchChange = (query) => {
    if (!query) return;
    dispatch(getSuggestions(query));
  };

  const handleClick = (value) => {
    if (value < 1) return;
    const selectedResult = suggestions.find((city) => city.Key === value.Key);
    if (selectedResult !== -1) {
      const { Key, LocalizedName } = selectedResult;
      dispatch(getWeatherData(Key, LocalizedName));
    }
  };
  return (
    <SearchBar
      handleClick={handleClick}
      handleSearchChange={handleSearchChange}
      suggestions={suggestions}
    />
  );
};

export default SearchBarContainer;
