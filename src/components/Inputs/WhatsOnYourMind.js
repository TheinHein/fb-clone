import { useAuthContext } from "../../context/AuthContext";
import { TextField } from "@mui/material";

export default function WhatsOnYourMind({ handleChangeInput }) {
  const context = useAuthContext();
  return (
    <TextField
      sx={{ bgcolor: "white" }}
      fullWidth
      autoFocus
      multiline
      variant="filled"
      onChange={handleChangeInput}
      aria-label={`what's on your mind, ${context.user.displayName}?`}
      placeholder={`What's on your mind, ${context.user.displayName}?`}
    />
  );
}
