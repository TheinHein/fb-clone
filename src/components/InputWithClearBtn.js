import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function InputWithClearBtn({
  name,
  placeholder,
  type,
  required,
  value,
  setValue,
}) {
  const handleChange = (prop) => (event) => {
    setValue((prev) => ({ ...prev, [prop]: event.target.value }));
  };

  const handleClearInput = (prop) => () => {
    setValue((prev) => ({ ...prev, [prop]: "" }));
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl required={required} fullWidth sx={{ m: 1 }} variant="outlined">
      <OutlinedInput
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange(name)}
        endAdornment={
          <InputAdornment position="end">
            <InputAdornment position="end">
              <IconButton
                aria-label="clear input"
                onClick={handleClearInput(name)}
                onMouseDown={handleMouseDown}
                edge="end"
              >
                {value && <HighlightOffIcon />}
              </IconButton>
            </InputAdornment>
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "last name",
        }}
      />
    </FormControl>
  );
}

export default InputWithClearBtn;
