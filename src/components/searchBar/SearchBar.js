import React, { useEffect, useRef, useState } from "react";

import { Autocomplete, TextField } from "@mui/material";
import _ from "lodash";
const SearchBar = ({ handleSearchChange, handleClick, suggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = _.debounce(handleSearchChange, 500);
  }, [handleSearchChange]);
  return (
    <Autocomplete
      id="cities-auto-complete"
      size="small"
      variant="outlined"
      sx={{ width: "50%", margin: "20px auto" }}
      onChange={(e, value) => handleClick(value)}
      inputValue={inputValue}
      autoComplete
      options={suggestions}
      getOptionLabel={(option) =>
        option.Country && `${option.LocalizedName} ${option.Country.ID}`
      }
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search city"
          onChange={(e) => {
            setInputValue(e.target.value);
            inputRef.current(e.target.value);
          }}
        />
      )}
    />
  );
};

export default SearchBar;
