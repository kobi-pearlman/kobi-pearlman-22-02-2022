import { Card, Typography } from "@mui/material";
import React from "react";
import { getDayName } from "../../../utils";
import "./forecastCard.scss";

const ForecstCard = ({ data }) => {
  const { date, icon, iconPhrase, temperature } = data;
  const day = getDayName(date);
  return (
    <div className="card-container">
      <Card className="card-styles">
        <Typography fontWeight="bold" variant={"div"}>
          {day}
        </Typography>
        <div className="forecast-icon">
          <img src={icon} alt="" />
        </div>

        <Typography variant="p">{iconPhrase}</Typography>
        <Typography variant="h4">{`${temperature}°`}</Typography>
      </Card>
    </div>
  );
};

export default ForecstCard;
