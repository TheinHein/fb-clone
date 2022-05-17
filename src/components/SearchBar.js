import React from "react";
import SearchIconWrapper from "./SearchIconWrapper";
import Search from "./Search";
import StyledInputBase from "./StyledInputBase";

function SearchBar({ input, handleInputSearch }) {
  return (
    <Search>
      <SearchIconWrapper />
      <StyledInputBase
        onChange={handleInputSearch}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
