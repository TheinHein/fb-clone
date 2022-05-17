import {
  Divider,
  Box,
  IconButton,
  Paper,
  TextField,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useSearchUsers from "../hooks/useSearchUsers";
import SearchDrawerResults from "./SearchDrawerResults";
import SearchIcon from "@mui/icons-material/Search";

function SearchDrawer({ toggleDrawer }) {
  const [input, setInput] = useState("");
  const users = useSearchUsers(input);

  function handleInputSearch(event) {
    setInput(event.target.value);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" alignItems="center" px={1}>
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
        <TextField
          fullWidth
          placeholder="Search ..."
          InputProps={{ startAdornment: <SearchIcon /> }}
          value={input}
          onChange={handleInputSearch}
        />
      </Stack>
      <Divider />
      <SearchDrawerResults results={users} />
    </Box>
  );
}

export default SearchDrawer;
