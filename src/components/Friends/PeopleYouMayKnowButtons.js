import { useTheme } from "@emotion/react";
import React from "react";
import BaseButton from "../BaseButton";

function PeopleYouMayKnowButtons({ requestFriend }) {
  const theme = useTheme();

  const handleClickAddFriend = (event) => {
    event.preventDefault();
    requestFriend();
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
