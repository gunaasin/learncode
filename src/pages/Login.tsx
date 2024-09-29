import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Modal,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");
//   const history = useHistory();

  useEffect(() => {
    // Retrieve registered user data from local storage
    const registeredUserData = localStorage.getItem("registeredUser");
    if (registeredUserData) {
      const { email } = JSON.parse(registeredUserData);
      // Set the email field with the registered email
      setEmail(email);
    }
  }, []);

  const handleLogin = () => {
    // Retrieve registered user data from local storage
    const registeredUserData = localStorage.getItem("registeredUser");
    if (registeredUserData) {
      const { email: storedEmail, password: storedPassword , name} = JSON.parse(
        registeredUserData
      );
      // Check if email and password match
      if (storedEmail === email && storedPassword === password) {
        // Set login success state
        setIsLoginSuccess(true);
        setLoginError("");
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
            window.location.href = "/"; 
          }, 2000);
      } else {
        // Set login error state
        setIsLoginSuccess(false);
        setLoginError("Incorrect email or password.");
        // Clear password field
        setPassword("");
      }
    } else {
      // Set login error state
      setIsLoginSuccess(false);
      setLoginError("No registered user found.");
    }
  };

  const handleCloseSuccessPopup = () => {
    setIsLoginSuccess(false);
  };

  return (
    <>
      <Container maxWidth="xs"   >
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            position: "relative",
            right: "-120px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar sx={{ m: 1,  bgcolor: "#030305" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Link to="/register">Don't have an account? Register</Link>
              </Grid>
            </Grid>
          </Box>
          {loginError && (
            <Typography variant="body1" sx={{ color: "red", mt: 2 }}>
              {loginError}
            </Typography>
          )}
        </Box>
      </Container>
      <Modal
        open={isLoginSuccess}
        onClose={handleCloseSuccessPopup}
        aria-labelledby="login-success-popup"
        aria-describedby="login-success-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#030305",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" id="login-success-popup">
            Login Successful!
          </Typography>
          <Typography variant="body1" id="login-success-description">
            You are now logged in.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
