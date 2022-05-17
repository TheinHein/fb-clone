import { Stack } from "@mui/material";
import UserCard from "./UserCard";

function SearchDrawerResults({ results }) {
  return (
    <Stack>
      {results.map((result) => (
        <UserCard user={result} key={result.id} />
      ))}
    </Stack>
  );
}

export default SearchDrawerResults;
