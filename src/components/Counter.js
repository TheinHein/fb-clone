import Typography from "@mui/material/Typography";

function Counter(props) {
  const { name, counts } = props;
  return (
    <Typography
      variant="body2"
      sx={{
        color: "gray",
        fontSize: "0.7rem",
        textDecoration: "underline",
      }}
    >
      {counts} {name}
    </Typography>
  );
}

export default Counter;
