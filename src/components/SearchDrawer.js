import { Divider, Box, IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useSearchUsers from "../hooks/useSearchUsers";
import SearchDrawerResults from "./SearchDrawerResults";

function SearchDrawer({ toggleDrawer }) {
  const [input, setInput] = useState("");
  const users = useSearchUsers(input);

  function handleInputSearch(event) {
    setInput(event.target.value);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={0}
        square
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="search"
          onClick={toggleDrawer}
          sx={{ m: 1 }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <SearchBar input={input} handleInputSearch={handleInputSearch} />
      </Paper>
      <Divider />
      <SearchDrawerResults results={users} />
    </Box>
  );
}

export default SearchDrawer;
