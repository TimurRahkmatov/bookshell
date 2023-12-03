import {
  Box,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import SubmitButton from "../../Components/Buttons/SubmitBtn";
import ContinueButton from "../../Components/Buttons/ContinueBtn";

const Login = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginLeft: "0.2rem",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <Box
            sx={{
              padding: "2rem 1.3rem",
              width: { xs: "270px", lg: "400px", sm: "300px" },

              height: "550px",
              background: "#fff",
              borderRadius: "15px",
              boxShadow: "0px 0px 15px #80808050",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            component="div"
          >
            <Typography sx={{ fontWeight: "500" , fontSize: "30px" }}>
              Sign In
            </Typography>
            <ContinueButton>
              <i style={{ color: "red" }} className="fa-brands fa-google"></i>{" "}
              Continue with Google
            </ContinueButton>
            <ContinueButton style={{marginTop: "0.5rem"}} >
              <i
                style={{ color: "blue" }}
                className="fa-brands fa-facebook"
              ></i>{" "}
              Continue with Facebook
            </ContinueButton>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Box
                sx={{ width: "50%", height: "1px", backgroundColor: "black" }}
                component="div"
              ></Box>
              <Typography variant="body2">OR</Typography>
              <Box
                sx={{ width: "50%", height: "1px", backgroundColor: "black" }}
                component="div"
              ></Box>
            </Box>
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
                label="Your name"
                
                variant="outlined"
              />
              <TextField
                label="Your email"
                id="outlined-basic"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Your username"
                variant="outlined"
              />
              <SubmitButton>Submit</SubmitButton>
              <Typography sx={{ textAlign: "center" ,  width: {xs: "170px" , sm: "170px" , md: "270px" , lg: "270px"} , margin: {xs: "auto" , sm: "auto"}  }}>
                Already signed up ?{" "}
                <Link to="/register" style={{ color: "blue" }}>
                  Go to sign up.
                </Link>
              </Typography>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
