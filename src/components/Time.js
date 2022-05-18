import { Typography } from "@mui/material";
import calcTimeDistance from "../utils/calcTimeDistance";

function Time({ timestamp }) {
  const time = calcTimeDistance(timestamp);
  return <Typography sx={{ fontSize: "inherit" }}>{time}</Typography>;
}

export default Time;
