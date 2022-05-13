import PeopleYouMayKnowCard from "./PeopleYouMayKnowCard";
import { Box } from "@mui/material";

function SearchDrawerResults({ results }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        padding: "0px 15px",
      }}
    >
      {results.map((result) => (
        <PeopleYouMayKnowCard friend={result} key={result.id} />
      ))}
    </Box>
  );
}

export default SearchDrawerResults;
