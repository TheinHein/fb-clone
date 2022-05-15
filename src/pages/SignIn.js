import { useTheme } from "@emotion/react";
import { Grid, Button } from "@mui/material";
import { useState } from "react";
import BaseButton from "../components/BaseButton";
import PasswordInput from "../components/PasswordInput.js";
import InputWithClearBtn from "../components/InputWithClearBtn.js";
import { useAuthContextUpdater } from "../context/AuthContext.js";
import { useLocation, useNavigate } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import useErrorHandler from "../hooks/useErrorHandler";

const ariaLabel = { "aria-label": "description" };

function SignIn() {
  const errorContext = useErrorHandler();

  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState({ email: "", password: "" });

  const context = useAuthContextUpdater();

  const handleSubmitSignIn = async (event) => {
    event.preventDefault();
    try {
      await context.handleSignIn(user);
      navigate(from, { replace: true });
    } catch (error) {
      errorContext.setError("error", error);
    }
  };

  return (
    <>
      <Grid container>
        <Grid item md={3} lg={4} />
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
          }}
          component={"form"}
          id="sign-in-form"
          autoComplete="off"
          onSubmit={handleSubmitSignIn}
        >
          <FacebookOutlinedIcon
            sx={{
              fontSize: 100,
              color: theme.palette.primary.main,
              margin: "20px",
            }}
          />
          <InputWithClearBtn
            name={"email"}
            type={"email"}
            placeholder={"Email"}
            value={user.email}
            setValue={setUser}
            required={true}
          />
          <PasswordInput
            name={"password"}
            password={user.password}
            setPassword={setUser}
            required={true}
          />
          <BaseButton
            label={"Login"}
            form="sign-in-form"
            type="submit"
            disabled={!user.email || !user.password}
          />
          <BaseButton
            label="Create an account"
            btnColor={theme.palette.success.light}
            onClick={() => navigate("/sign-up")}
          />
        </Grid>
        <Grid item md={3} lg={4} />
      </Grid>
    </>
  );
}

export default SignIn;
