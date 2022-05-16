import { useState } from "react";
import { Button, LinearProgress, Stack, Typography } from "@mui/material";
import InputWithClearBtn from "../components/InputWithClearBtn.js";
import DatePicker from "../components/DatePicker.js";
import RadioButtons from "../components/RadioButtons.js";
import PasswordInput from "../components/PasswordInput.js";
import { useAuthContextUpdater } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useErrorHandler from "../hooks/useErrorHandler.js";
import Loading from "./Loading.js";

function SignUp() {
  const navigate = useNavigate();
  const context = useAuthContextUpdater();
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
    <Stack
      spacing={3}
      mx="auto"
      my={10}
      alignItems="center"
      width={{ sm: "50%", md: "40%", lg: "30%" }}
      component={"form"}
      autoComplete="off"
      id={"sign-up-form"}
      onSubmit={handleSubmitSignup}
    >
      {loading ? (
        <Loading>
          <Typography mb={10} color="primary" variant="h3">
            Creating account
          </Typography>
          <LinearProgress sx={{ width: 200 }} />
          <Typography variant="body2">Please wait</Typography>
        </Loading>
      ) : (
        <>
          <Typography color="primary" variant="h1">
            Create an account
          </Typography>
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
          <Button
            fullWidth
            variant="contained"
            color="success"
            type={"submit"}
            form={"sign-up-form"}
          >
            Sign Up
          </Button>
          <Button size="small" onClick={() => navigate("/sign-in")}>
            Already have an account?
          </Button>
        </>
      )}
    </Stack>
  );
}

export default SignUp;
