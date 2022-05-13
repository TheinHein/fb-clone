import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtons({ required, name, value, setValue }) {
  const handleChange = (prop) => (event) => {
    setValue((prev) => ({ ...prev, [prop]: event.target.value }));
  };

  return (
    <FormControl required={required} fullWidth sx={{ m: 1 }} variant="outlined">
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="gender"
        name={name}
        value={value}
        onChange={handleChange(name)}
      >
        <FormControlLabel
          value=""
          control={<Radio />}
          label=""
          labelPlacement="start"
          sx={{ display: "none" }}
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
          labelPlacement="start"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
          labelPlacement="start"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        />
        <FormControlLabel
          value="others"
          control={<Radio />}
          label="Others"
          labelPlacement="start"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        />
      </RadioGroup>
    </FormControl>
  );
}
