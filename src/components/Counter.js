import { Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";

function Counter(props) {
  const { name, counts, loading } = props;
  return (
    <>
      {loading ? (
        <Skeleton variant="rectangular" width="100" height={10} />
      ) : (
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
      )}
    </>
  );
}

export default Counter;
