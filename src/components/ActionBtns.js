import Button from "@mui/material/Button";

function ActionBtns({ actions, color }) {
  return (
    <>
      {actions.map(({ name, icon }) => (
        <Button
          key={name}
          sx={{ color, width: "100%", textTransform: "capitalize" }}
          size="small"
          startIcon={icon}
          endIcon={name}
        />
      ))}
    </>
  );
}

export default ActionBtns;
