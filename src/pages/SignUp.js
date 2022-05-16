import { useState } from "react";
import { Grid, LinearProgress, Typography } from "@mui/material";
import InputWithClearBtn from "../components/InputWithClearBtn.js";
import DatePicker from "../components/DatePicker.js";
import RadioButtons from "../components/RadioButtons.js";
import PasswordInput from "../components/PasswordInput.js";
import BaseButton from "../components/BaseButton";
import { useAuthContextUpdater } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import useErrorHandler from "../hooks/useErrorHandler.js";
import Loading from "./Loading.js";

function SignUp() {
  const navigate = useNavigate();
  const context = useAuthContextUpdater();
  const theme = useTheme();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    bod: new Date("2014-08-18T21:11:54"),
    gender: "",
    phoneNumber: "",
    email: "",
    password: "",
    showPassword: false,
  });
  const errorContext = useErrorHandler();
  const [loading, setLoading] = useState(false);

  const handleSubmitSignup = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await context.handleSignUp(values);
      navigate("/");
    } catch (error) {
      errorContext.setError("error", error);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
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
        autoComplete="off"
        id={"sign-up-form"}
        onSubmit={handleSubmitSignup}
      >
        {loading ? (
          <Loading>
            <Typography
              sx={{ color: theme.palette.primary.main }}
              variant={"h1"}
            >
              Creating account
            </Typography>
            <LinearProgress sx={{ width: "100%" }} />
          </Loading>
        ) : (
          <>
            <Typography variant={"h1"}>Create an account</Typography>
            <InputWithClearBtn
              name={"firstName"}
              placeholder={"First name"}
              value={values.firstName}
              setValue={setValues}
              required={true}
            />
            <InputWithClearBtn
              name={"lastName"}
              placeholder={"Last name"}
              value={values.lastName}
              setValue={setValues}
              required={true}
            />
            <DatePicker
              name={"bod"}
              value={values.bod}
              setValue={setValues}
              required={true}
            />
            <RadioButtons
              name={"gender"}
              value={values.gender}
              setValue={setValues}
              required={true}
            />
            <InputWithClearBtn
              name={"email"}
              placeholder={"Email"}
              value={values.email}
              setValue={setValues}
              required={true}
            />
            <InputWithClearBtn
              name={"phoneNumber"}
              placeholder={"Mobile Number"}
              value={values.phoneNumber}
              setValue={setValues}
              required={true}
            />
            <PasswordInput
              name={"password"}
              password={values.password}
              setPassword={setValues}
              required={true}
            />
            <BaseButton
              btnColor={theme.palette.success.light}
              label="Sign Up"
              type={"submit"}
              form={"sign-up-form"}
            />
            <BaseButton
              label="Login to an existing account"
              onClick={() => navigate("/sign-in")}
            />
          </>
        )}
      </Grid>
      <Grid item md={3} lg={4} />
    </Grid>
  );
}

export default SignUp;
