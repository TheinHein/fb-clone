import { useTheme } from "@emotion/react";
import React from "react";
import BaseButton from "../BaseButton";

function PeopleYouMayKnowButtons({ addFriend }) {
  const theme = useTheme();

  const handleClickAddFriend = (event) => {
    event.preventDefault();
    addFriend();
  };

  return (
    <>
      <BaseButton label={"Add Friend"} onClick={handleClickAddFriend} />
      <BaseButton
        label={"Remove"}
        labelColor="black"
        btnColor={theme.palette.grey[300]}
      />
    </>
  );
}

export default PeopleYouMayKnowButtons;
