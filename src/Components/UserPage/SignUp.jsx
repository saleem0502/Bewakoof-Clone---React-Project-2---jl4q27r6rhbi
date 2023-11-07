import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const projectId = "jl4q27r6rhbi";

  let headersList = {
    projectId: projectId,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: "https://academics.newtonschool.co/api/v1/user/signup",
    method: "POST",
    headers: headersList,
  };

  const login = async () => {
    try {
      let response = await axios.request(reqOptions);
      console.log(response);
      if (response.status === 201) {
        console.log(response);
        setUserData(response);
        console.log(userData);
        alert("SuccessFully SignedUp");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      console.error(error, errMsg);
      if (errMsg === "User already exists") {
        alert("User already exist");
      } else {
        console.log("error");
      }
    }
  };
  const handleSignUp = () => {
    const bodyContent = JSON.stringify({
      name: username,
      email: email,
      password: password,
      appType: "ecommerce",
    });

    reqOptions.data = bodyContent;

    login();
  };

  return (
    <Container maxWidth="xs">
      <Box
        mt={5}
        sx={{
          border: "1px solid #E0E0E0",
          borderRadius: "10px",
          padding: "2rem",
          height: "660px",
          width: "25rem",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}>
        <img
          className="google-image"
          alt="Description"
          src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          style={{
            width: "100px",
            height: "30px",
            marginTop: "25px",
          }} // Adjust the width and height as needed
        />
        <Typography variant="h6" align="left" mt={2}>
          Create your Account <br />
          to continue on Bewakoof
        </Typography>

        <form onSubmit={handleFormSubmit}>
          <Box display="flex">
            <TextField
              flex="1"
              margin="normal"
              label="First Name"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Box m={0.5} />
            <TextField
              flex="1"
              margin="normal"
              label="Last Name"
              variant="outlined"
            />
          </Box>



          <TextField
            fullWidth
            margin="normal"
            label="mobile"
            variant="outlined"
          />

          <TextField
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            label="Your email address"
            variant="outlined"
          />
          
          <Box display="flex">
            <TextField
              // fullWidth
              margin="normal"
              label="Password"
              flex="1"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box m={0.5} />
            <TextField
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              label=" Confirm Password"
              flex="1"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Typography variant="subtitle2">
            Use 8 or more characters with a mix of letters, numbers, and
            symbols.
          </Typography>

          <Box
            display="flex"
            flex="1"
            alignItems="center"
            justifyContent="space-between"
            marginTop="30px">
            <Link
              to="/login"
              variant="subtitle2"
              sx={{
                textDecoration: "none",
                cursor: "pointer",
              }}>
              Sign in instead
            </Link>

            <Button
              onClick={handleSignUp}
              variant="contained"
              color="primary"
              type="submit"
              size="large">
              SignUp
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default SignUp;