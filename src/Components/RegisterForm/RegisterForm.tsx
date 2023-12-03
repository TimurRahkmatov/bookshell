import { FormControl, TextField, Typography } from "@mui/material";
import SubmitButton from "../Buttons/SubmitBtn";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../Spinner";
import { toast } from "react-toastify";
import { auth_api } from "../../Api/auth.api";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    key: "",
    secret: "",
  });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e: any): void {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  const handleRegisterSubmit = async (e: any) => {
    e.preventDefault();
    if (values.name == "") {
      setUsernameError(true);
    } else if (values.email === "") {
      setEmailError(true);
    } else if (values.secret === "") {
      setPasswordError(true);
    } else {
      try {
        setLoading(true);
        const { data } = await auth_api.register(values);
        if (data?.isOk == true) {
          toast("Success registered", { type: "success" });
          localStorage.setItem("Key", data?.data?.key);
          localStorage.setItem("Secret", data?.data?.secret);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <FormControl
        component="form"
        onSubmit={handleRegisterSubmit}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <TextField
          error={usernameError}
          id="outlined-basic"
          type="text"
          onChange={handleInputChange}
          value={values.name}
          name="name"
          label="Your username"
          variant="outlined"
        />
        <TextField
          error={emailError}
          onChange={handleInputChange}
          value={values?.email}
          name="email"
          type="email"
          label="Your email"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="text"
          onChange={handleInputChange}
          value={values.key}
          name="key"
          label="Your username"
          variant="outlined"
        />
        <TextField
          error={passwordError}
          id="outlined-basic"
          type="password"
          onChange={handleInputChange}
          value={values.secret}
          name="secret"
          label="Your passowrd"
          variant="outlined"
        />
        <SubmitButton>Submit</SubmitButton>
        <Typography
          sx={{
            textAlign: "center",
            width: { xs: "150px", sm: "170px", md: "250px", lg: "250px" },
            margin: { xs: "auto", sm: "auto" },
          }}
        >
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
