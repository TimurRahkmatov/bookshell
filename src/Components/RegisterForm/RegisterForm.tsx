import { FormControl, TextField, Typography } from "@mui/material";
import SubmitButton from "../Buttons/SubmitBtn";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../Spinner";
import { toast } from "react-toastify";
import { auth_api } from "../../Api/auth.api";

const RegisterForm = () => {
  const navigate = useNavigate();
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
          id="outlined-basic"
          type="text"
          onChange={handleInputChange}
          value={values.name}
          name="name"
          label="Your username"
          variant="outlined"
        />
        <TextField
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
          id="outlined-basic"
          type="password"
          onChange={handleInputChange}
          value={values.secret}
          name="secret"
          label="Your passowrd"
          variant="outlined"
        />
        <SubmitButton>Submit</SubmitButton>
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
