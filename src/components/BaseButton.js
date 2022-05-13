import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";

function BaseButton(props) {
  const { icon, label, form, type, labelColor, onClick, btnColor, disabled } =
    props;
  const theme = useTheme();
  return (
    <Button
      form={form}
      type={type}
      disabled={disabled}
      disableElevation
      disableRipple
      disableTouchRipple
      fullWidth
      variant="contained"
      onClick={onClick}
      startIcon={label && icon && icon}
      endIcon={label && icon && label}
      sx={{
        padding: "10px 0",
        textTransform: "capitalize",
        color: `${labelColor}`,
        bgcolor: `${btnColor}`,
        "&:hover": {
          bgcolor: `${theme.palette.action.hover}`,
        },
      }}
    >
      {label && !icon && label}
      {icon && !label && icon}
    </Button>
  );
}

export default BaseButton;
