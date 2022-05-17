import {
  Divider,
  IconButton,
  Stack,
  Input,
} from "@mui/material";
import { useState } from "react";
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
    <Stack divider={<Divider />}>
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
        <Input
          disableUnderline
          fullWidth
          placeholder="Search ..."
          startAdornment={<SearchIcon />}
          value={input}
          onChange={handleInputSearch}
        />
      </Stack>
      <SearchDrawerResults results={users} />
    </Stack>
  );
}

export default SearchDrawer;
