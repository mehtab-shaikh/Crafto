import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import HeaderComponent from "../shared/HeaderComponent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Background from "../assets/background.svg";

const LayoutComponent = ({ currentTheme, toggleTheme }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const location = useLocation();
  const navigate = useNavigate();

  const tabPaths = ["/"];
  const getTabIndexFromPath = (path) => {
    const index = tabPaths.indexOf(path);
    return index !== -1 ? index : false;
  };

  const [value, setValue] = useState(getTabIndexFromPath(location.pathname));

  useEffect(() => {
    const tabIndex = getTabIndexFromPath(location.pathname);
    setValue(tabIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue !== false) {
      navigate(tabPaths[newValue]);
    }
  };

  const handleProfileClick = (profilePath) => {
    setValue(false); // Deselect all tabs
    navigate(profilePath); // Navigate to the profile page
  };

  const handleNotificationClick = (notificationPath) => {
    setValue(false); // Deselect all tabs
    navigate(notificationPath); // Navigate to the notifications page
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <HeaderComponent
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
        onProfileClick={handleProfileClick}
        onNotificationClick={handleNotificationClick}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 1,
        }}
      >
        <Tabs
          value={value !== false ? value : false}
          onChange={handleChange}
          variant={isMobile || isTablet ? "scrollable" : "standard"}
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          sx={{
            boxShadow:
              "0 4px 10px rgba(0, 0, 0, 0.1), 0 -4px 10px rgba(0, 0, 0, 0.1), 4px 0 10px rgba(0, 0, 0, 0.1), -4px 0 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: currentTheme
              ? theme.palette.primary.main
              : "#f0f0f0",
            borderRadius: "8px",
            padding: "4px",
            minHeight: "40px",
            "& .MuiTab-root": {
              minWidth: "100px",
              padding: "6px 12px",
              borderRadius: "8px",
              margin: "0 4px",
              textTransform: "none",
              color: currentTheme ? "#E0E0E0" : "#333333",
              "&.Mui-selected": {
                color: "var(--secondary-dark)",
                backgroundColor: currentTheme
                  ? theme.palette.secondary.main
                  : "#dcdcdc",
                fontWeight: "bold",
                fontSize: "14px",
              },
              "&:hover": {
                backgroundColor: currentTheme ? "#444" : "#e0e0e0",
              },
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab label="Quote List" component={Link} to="/" />
        </Tabs>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          borderRadius: "24px",
          backgroundColor: currentTheme
            ? theme.palette.secondary.main
            : "#f0f0f0",
          overflow: "hidden", // Disable scroll on this container
          backgroundImage: `url(${Background})`, // Set the background image
          backgroundSize: "contain", // Cover the entire area
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent image repetition
          boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.3)", // Top side shadow
        }}
        className="mt-2 p-4"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default LayoutComponent;
