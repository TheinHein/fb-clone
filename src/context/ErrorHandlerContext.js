import { Snackbar, Alert, Slide } from "@mui/material";
import { createContext, useCallback, useEffect, useState } from "react";

const ErrorHandlerContext = createContext(() => {});

let setError = () => {};

const ErrorHandlerProvider = (props) => {
  if (props.callback) {
    setError = props.callback;
  }

  return (
    <ErrorHandlerContext.Provider value={{ setError, error: props.error }}>
      {props.children}
    </ErrorHandlerContext.Provider>
  );
};

function Transition(props) {
  return <Slide {...props} direction="left" />;
}

const ErrorContainer = (props) => {
  const [error, setError] = useState();
  const [errorTitle, setErrorTitle] = useState();
  const [action, setAction] = useState();

  const [transition, setTransition] = useState(undefined);

  if (error) {
    console.error("ERROR", errorTitle, JSON.stringify(error));
  }

  const callback = useCallback((title, err, action) => {
    console.error("ERROR RAISED");
    console.error("Error title: ", title);
    console.error("Error content", JSON.stringify(err));
    setError(err);
    setErrorTitle(title);
    setAction(action);
  }, []);

  useEffect(() => {
    if (error) {
      setTransition(() => Transition);
    }
  }, [error]);
  return (
    <ErrorHandlerProvider callback={callback} error={error}>
      {props.children}
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={error}
          autoHideDuration={6000}
          TransitionComponent={transition}
          key={transition ? transition.name : ""}
          onClose={() => {
            setError(null);
            setErrorTitle("");
          }}
        >
          <Alert
            severity="error"
            onClose={() => {
              setError(null);
              setErrorTitle("");
            }}
          >
            {error.code}
          </Alert>
        </Snackbar>
      )}
    </ErrorHandlerProvider>
  );
};

export { ErrorHandlerContext, ErrorContainer };
