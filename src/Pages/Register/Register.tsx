import { Box, Container, Typography } from "@mui/material";
import ContinueButton from "../../Components/Buttons/ContinueBtn";
import RegisterForm from "../../Components/RegisterForm";
const Register = () => {
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

              height: "660px",
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
            <Typography sx={{ fontWeight: "500", fontSize: "30px" }}>
              Sign Up
            </Typography>
            <ContinueButton>
              <i style={{ color: "red" }} className="fa-brands fa-google"></i>{" "}
              Continue with Google
            </ContinueButton>
            <ContinueButton>
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
            <RegisterForm />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
