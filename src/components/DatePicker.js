import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { FormControl, TextField } from "@mui/material";
import { FormLabel } from "@mui/material";

export default function DatePicker({ name, value, setValue, required }) {
  const handleChange = (prop) => (newValue) => {
    setValue((prev) => ({ ...prev, [prop]: newValue }));
  };

  return (
    <FormControl fullWidth sx={{ m: 1 }} required={required}>
      <FormLabel component="legend">Date of Birth</FormLabel>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange(name)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
