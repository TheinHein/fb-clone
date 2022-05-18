import FriendCard from "./Cards/FriendCard";
import UserCard from "./Cards/UserCard";

function SearchDrawerResults({ results, toggleDrawer }) {
  return (
    <>
      {results.map((result) => (
        <>
          {result.friend ? (
            <FriendCard
              user={result}
              key={result.id}
              toggleDrawer={toggleDrawer}
            />
          ) : (
            <UserCard
              user={result}
              key={result.id}
              toggleDrawer={toggleDrawer}
            />
          )}
        </>
      ))}
    </>
  );
}

export default SearchDrawerResults;
