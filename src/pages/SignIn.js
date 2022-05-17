import { Button, Stack, Divider, Typography } from "@mui/material";

import PasswordInput from "../components/PasswordInput.js";
import { useAuthContextUpdater } from "../context/AuthContext.js";
import { useLocation, useNavigate } from "react-router-dom";
import useErrorHandler from "../hooks/useErrorHandler";
import { useForm } from "react-hook-form";
import InputWithClearBtn from "../components/InputWithClearBtn.js";

const ariaLabel = { "aria-label": "description" };

const defaultValues = {
  email: "",
  password: "",
};

function SignIn() {
  const errorContext = useErrorHandler();
  const navigate = useNavigate();
  const location = useLocation();
  const validator = useForm({
    defaultValues,
  });
  const {
    handleSubmit,
    control,
    resetField,
    register,
    getValues,
    formState: { errors },
  } = validator;

  let from = location.state?.from?.pathname || "/";

  const context = useAuthContextUpdater();

  const onSubmit = async (user) => {
    console.log(user);
    try {
      await context.handleSignIn(user);
      navigate(from, { replace: true });
    } catch (error) {
      errorContext.setError("error", error);
    }
  };

  return (
    <Stack
      component={"form"}
      id="sign-in-form"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      spacing={3}
      mx="auto"
      my={10}
      alignItems="center"
      width={{ sm: "50%", md: "40%", lg: "30%" }}
      noValidate
    >
      <Typography variant="h1" sx={{ color: "#1878f3" }}>
        facebook
      </Typography>

      <InputWithClearBtn
        name="email"
        type="email"
        getValues={getValues}
        placeholder="Email"
        control={control}
        errors={errors}
        resetField={resetField}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
            message: "Invalid email",
          },
        })}
      />

      <PasswordInput
        control={control}
        {...register("password", {
          required: "Password is required",
        })}
        errors={errors}
      />

      <Button
        fullWidth
        variant="contained"
        form="sign-in-form"
        type="submit"
        // disabled={!user.email || !user.password}
      >
        Log in
      </Button>

      <Button>Forgot password?</Button>

      <Divider sx={{ width: "100%" }}>
        <Typography variant="body2">or</Typography>
      </Divider>

      <Button
        variant="contained"
        color="success"
        onClick={() => navigate("/sign-up")}
        sx={{ width: "fit-content" }}
      >
        Create new account
      </Button>
    </Stack>
  );
}

export default SignIn;
