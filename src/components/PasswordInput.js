import { useState } from "react";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";

function PasswordInput({ name, password, required, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (prop) => (event) => {
    setPassword((prev) => ({ ...prev, [prop]: event.target.value }));
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth sx={{ m: 1 }} required={required} variant="outlined">
      <OutlinedInput
        id={name}
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange(name)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default PasswordInput;
