import { InputBase } from "@mui/material";
import { useTheme } from "@emotion/react";

function StyledInputBase({ onChange, placeholder, inputProps }) {
  const theme = useTheme();
  return (
    <InputBase
      variant="search"
      onChange={onChange}
      placeholder={placeholder}
      inputProps={inputProps}
    />
  );
}

export default StyledInputBase;
