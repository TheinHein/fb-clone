import UserCard from "./Cards/UserCard";

function SearchDrawerResults({ results }) {
  return (
    <>
      {results.map((result) => (
        <UserCard user={result} key={result.id} />
      ))}
    </>
  );
}

export default SearchDrawerResults;
