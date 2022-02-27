import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectFiveDaysForecast } from "../../../redux/main/mainSelectors";
import ForecstCard from "./ForecastCard";

const FiveDaysForecastContiner = () => {
  const fiveDaysForecat = useSelector(selectFiveDaysForecast);
  return (
    <Grid container spacing={1} justifyContent="center">
      {fiveDaysForecat.map((day, i) => (
        <Grid item xs={12} sm={2}>
          <ForecstCard key={i} data={day} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FiveDaysForecastContiner;
