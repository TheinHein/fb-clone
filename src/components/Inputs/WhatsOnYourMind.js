import { forwardRef } from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { useAuthContext } from "../../context/AuthContext";

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 100vw;
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: white;
  border: none;
  padding: 12px 12px;
  
  &:hover {
    background: white;
    border-color: white;
  }

  &:focus {
    outline: none;
  }
`
);

const StyledTextareaElement = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 100vw;
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: white;
  border: none;
  padding: 12px 12px;

  &:hover {
    background: white;
    border-color: white;
  }

  &:focus {
    outline: none;
  }
`
);

const CustomInput = forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{
        Input: StyledInputElement,
        Textarea: StyledTextareaElement,
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function WhatsOnYourMind({ handleChangeInput }) {
  const context = useAuthContext();
  return (
    <CustomInput
      onChange={handleChangeInput}
      aria-label={`what's on your mind, ${context.user.displayName}?`}
      multiline
      placeholder={`What's on your mind, ${context.user.displayName}?`}
    />
  );
}
