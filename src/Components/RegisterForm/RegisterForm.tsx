import { FormControl, TextField, Typography } from "@mui/material";
import SubmitButton from "../Buttons/SubmitBtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import Spinner from "../Spinner";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      <FormControl
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <TextField
          id="outlined-basic"
          type="text"
          label="Your username"
          variant="outlined"
        />
        <TextField
          type="email"
          label="Your email"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="text"
          label="Your username"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="Your passowrd"
          variant="outlined"
        />
        <SubmitButton onClick={() => handleSubmit()}>Submit</SubmitButton>
        <Typography sx={{ textAlign: "center" }}>
          Already signed up ?{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Go to sign in.
          </Link>
        </Typography>
      </FormControl>
      {loading == true ? <Spinner /> : ""}
    </>
  );
};

export default RegisterForm;
