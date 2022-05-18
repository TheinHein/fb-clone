import { Input } from "@mui/material";
import { useState } from "react";
import useSearchUsers from "../../hooks/useSearchUsers";
import SearchDrawerResults from "../SearchDrawerResults";
import SearchIcon from "@mui/icons-material/Search";
import Back from "../Buttons/Back";
import BaseDrawer from "../Base/BaseDrawer";

function SearchDrawer({ toggleDrawer }) {
  const [input, setInput] = useState("");
  const users = useSearchUsers(input);
  console.log(users);
  function handleInputSearch(event) {
    setInput(event.target.value);
  }

  return (
    <BaseDrawer
      toggleDrawer={toggleDrawer}
      header={
        <>
          <Back toggleDrawer={toggleDrawer} />
          <Input
            disableUnderline
            fullWidth
            placeholder="Search ..."
            startAdornment={<SearchIcon />}
            value={input}
            onChange={handleInputSearch}
          />
        </>
      }
      body={<SearchDrawerResults results={users} toggleDrawer={toggleDrawer} />}
    />
  );
}

export default SearchDrawer;
