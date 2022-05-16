import React from "react";
import FriendCard from "./FriendCard";
import PeopleYouMayKnowButtons from "./PeopleYouMayKnowButtons";
import { useAuthContext } from "../../context/AuthContext";
import FB from "../../FB";

function PeopleYouMayKnowCard({ friend }) {
  const context = useAuthContext();

  const requestFriend = async () => {
    await FB.handleFriendShip(context.user.id, friend.id, "request");
  };

  return (
    <FriendCard
      friend={friend}
      buttons={<PeopleYouMayKnowButtons requestFriend={requestFriend} />}
    />
  );
}

export default PeopleYouMayKnowCard;
