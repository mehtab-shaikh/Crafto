import React from "react";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import user_Image from "./../assets/user.png";
import { HelmetComponent } from "../shared/HelmetComponent";

// Mock user data (replace with actual data as needed)
const mockUserData = {
  name: "Sandy",
  email: "sandy@crafto.com",
  profileImage: user_Image,
  additionalInfo: `Experienced frontend developer with expertise in React.js, Vite, and Material UI.
    Passionate about building user-friendly web applications and continuously improving 
    user experience. Skilled in implementing responsive designs and integrating APIs 
    to deliver seamless functionality across different platforms.`,
};

// Profile component
const ProfileComponent = ({ title, theme }) => {
  const { name, email, profileImage, additionalInfo } = mockUserData;

  // Theme-based colors
  const colors = {
    textColor: theme === "dark" ? "#377D99" : "#E0F7FA",
    secondaryTextColor: theme === "dark" ? "#B0BEC5" : "#555",
    infoBoxColor: theme === "dark" ? "#CFD8DC" : "#757575",
  };

  return (
    <>
      <HelmetComponent title={title} />

      <Box
        sx={{
          overflowY: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          color: colors.textColor,
        }}
      >
        <Avatar
          src={profileImage}
          alt={name}
          sx={{
            width: 150,
            height: 150,
            mb: 2,
            p: 0.2,
            border: "2px solid #377D99",
          }}
        />

        <Typography variant="h4" sx={{ color: "#377D99", mb: 1 }}>
          {name}
        </Typography>

        <Typography variant="body1" sx={{ color: colors.secondaryTextColor, mb: 3 }}>
          {email}
        </Typography>

        <Grid container spacing={2} sx={{ maxWidth: 600 }}>
          <Grid item xs={12}>
            <Box
              sx={{
                borderRadius: 2,
                p: 2,
                boxShadow: 5,
                color: colors.infoBoxColor,
              }}
            >
              <Typography variant="h6">About Me</Typography>
              <Typography variant="body2" sx={{ color: "#377D99" }}>
                {additionalInfo}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfileComponent;
