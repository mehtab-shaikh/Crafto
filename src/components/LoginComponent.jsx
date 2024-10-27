import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Tooltip,
  TextField,
  IconButton,
  InputAdornment,
  Link,
  Divider,
  Typography,
} from "@mui/material";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { MdLockOutline } from "react-icons/md";
import { FiLogIn, FiUser } from "react-icons/fi";
import { useForm, Controller } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Background from "../assets/background.svg";
import Logo_CRAFTO from "../assets/CRAFTO.png";
import GoogleLogin from "../assets/googleIcon.png";
import work_In_Progress from "./../assets/Work in progress.svg";
import DialogComponent from "../shared/DialogComponent";
import { HelmetComponent } from "../shared/HelmetComponent";
import { login } from "../utils/api";
import { getToken, setEncryptedLocalStorageItem } from "../utils/localStorage";

const LoginComponent = ({ currentTheme, toggleTheme, title, setIsLoggedIn }) => {
  const [showOtp, setShowOtp] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const { handleSubmit, control } = useForm({ defaultValues: { username: "", otp: "" } });

  const handleClickShowOtp = () => setShowOtp((prev) => !prev);

  const handleGoogleSignIn = () => setDialogOpen(true);

  useEffect(() => {
    // Check if the token is already present in localStorage
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
      navigate("/", { replace: true });
    }
  }, [navigate, setIsLoggedIn]);

  const onSubmit = async (data) => {
    if (data.username !== "sandy") {
      toast.error("Invalid username. Please enter 'sandy' as the username.");
      return setError("Invalid username. Please enter 'sandy' as the username.");
    }
    try {
      const response = await login(data.username, data.otp);
      if (response?.token) {
        setEncryptedLocalStorageItem("token", response.token);
        setIsLoggedIn(true);
        toast.success("Login successful!");
        navigate("/", { replace: true });
      } else {
        toast.error("Invalid login credentials");
        setError("Invalid login credentials");
      }
    } catch {
      toast.error("Failed to login. Please try again.");
      setError("Failed to login. Please try again.");
    }
  };

  const renderTextField = (name, label, type, icon, rules, endAdornment = null) => (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          type={type}
          error={!!error}
          helperText={error ? error.message : ""}
          sx={{ input: { color: currentTheme ? "#E0E0E0" : "#333333" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
            endAdornment,
          }}
        />
      )}
    />
  );

  return (
    <>
      <HelmetComponent title={title} />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${Background})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: currentTheme
            ? theme.palette.secondary.main
            : "#f0f0f0",
        }}
      >
        <Box sx={{ position: "absolute", top: 16, right: 16 }}>
          <Tooltip title="Dark Mode" arrow>
            <IconButton color="inherit">
              <DarkModeSwitch
                checked={currentTheme}
                onChange={toggleTheme}
                size={24}
              />
            </IconButton>
          </Tooltip>
        </Box>

        <Box
          component="img"
          src={Logo_CRAFTO}
          alt="Brand Logo"
          sx={{ width: 150, opacity: 0.8 }}
        />

        <Typography
          sx={{
            color: "#377D99",
            textAlign: "center",
            fontSize: 36,
            fontWeight: "bold",
          }}
        >
          Crafto
        </Typography>

        <Box
          sx={{
            width: "auto",
            padding: 4,
            borderRadius: 2,
            backgroundColor: "transparent",
            zIndex: 1,
          }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography
            sx={{
              color: "#377D99",
              textAlign: "center",
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            Login
          </Typography>

          {error && (
            <Typography color="error" variant="body2" align="center" mb={2}>
              {error}
            </Typography>
          )}

          {renderTextField(
            "username",
            "Username",
            "text",
            <FiUser color={currentTheme ? "#E0E0E0" : "#333333"} />,
            { required: "Username is required" }
          )}

          {renderTextField(
            "otp",
            "OTP",
            showOtp ? "text" : "password",
            <MdLockOutline color={currentTheme ? "#E0E0E0" : "#333333"} />,
            { required: "OTP is required" },
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle OTP visibility"
                onClick={handleClickShowOtp}
                edge="end"
                sx={{ color: currentTheme ? "#E0E0E0" : "#333333" }}
              >
                {showOtp ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )}

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
            <Link
              href="#"
              underline="hover"
              sx={{ color: currentTheme ? "#E0E0E0" : "#377D99", fontSize: 14 }}
            >
              Forgot OTP?
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "var(--secondary-dark)",
                color: "#E0E0E0",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": {
                  backgroundColor: "var(--secondary-dark)",
                  transform: "scale(1.05)",
                  transition: "transform 0.5s ease-in-out",
                },
              }}
            >
              <FiLogIn size={20} />
              Login
            </Button>
          </Box>

          <Divider sx={{ my: 3, color: currentTheme ? "#E0E0E0" : "#333333" }}>
            OR
          </Divider>

          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                borderColor: currentTheme ? "#E0E0E0" : "#333333",
                color: currentTheme ? "#E0E0E0" : "#333333",
                "&:hover": {
                  borderColor: currentTheme ? "#E0E0E0" : "#333333",
                  backgroundColor: currentTheme
                    ? "rgba(224, 224, 224, 0.1)"
                    : "rgba(51, 51, 51, 0.1)",
                },
              }}
              startIcon={
                <Box
                  component="img"
                  src={GoogleLogin}
                  alt="Google Icon"
                  sx={{ width: 20, height: 20, borderRadius: "6px" }}
                />
              }
              onClick={handleGoogleSignIn}
            >
              Login with Google
            </Button>
          </Box>
        </Box>

        <DialogComponent
          title="Google Sign-In"
          open={dialogOpen}
          close={() => setDialogOpen(false)}
        >
          <Box
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={work_In_Progress}
              loading="lazy"
              alt="Work In Progress"
              style={{ height: "250px", width: "250px", marginBottom: "16px" }}
            />
            <Typography variant="h5" sx={{ color: "red", textAlign: "center" }}>
              ‘‘Currently, Google login work is under process.’’
            </Typography>
          </Box>
        </DialogComponent>
      </Box>
    </>
  );
};

export default LoginComponent;
