import { useTheme } from "@emotion/react";
import BaseButton from "../BaseButton";

function FriendRequestButtons({ acceptFriend }) {
  const theme = useTheme();
  const handleClickAcceptFriend = (event) => {
    event.preventDefault();
    acceptFriend();
  };

  return (
    <>
      <BaseButton label={"Confirm"} onClick={handleClickAcceptFriend} />
      <BaseButton
        label={"Delete"}
        labelColor="black"
        btnColor={theme.palette.grey[300]}
      />
    </>
  );
}

export default FriendRequestButtons;
