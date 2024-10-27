import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import { RiAccountCircleLine, RiLogoutCircleRLine } from "react-icons/ri";
import { MdNotifications, MdNotificationsActive } from "react-icons/md";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import logo from "../assets/CRAFTO.png";
import { useTheme } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getEncryptedLocalStorageItem,
  clearEncryptedLocalStorageItem,
} from "../utils/localStorage";
import { showSuccessToast } from "../utils/toastUtil";

const HeaderComponent = ({
  currentTheme,
  toggleTheme,
  onProfileClick,
  onNotificationClick,
  setIsLoggedIn,
}) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const notificationCount = 12; // Replace with actual notification count
  const hasNotifications = notificationCount > 0;

  const isMyProfileSelected = location.pathname === "/my-profile";
  const isNotificationsSelected = location.pathname === "/notifications";

  // Handle logout
  const handleLogout = () => {
    clearEncryptedLocalStorageItem("token"); // Clear token
    if (typeof setIsLoggedIn === "function") {
      setIsLoggedIn(false); // Set login state to false if it's a function
    }
    showSuccessToast("Logged out successfully!");
    navigate("/login", { replace: true }); // Navigate to login page
  };

  useEffect(() => {
    const token = getEncryptedLocalStorageItem("token");
    if (!token) {
      navigate("/login", { replace: true }); // Redirect to login if no token
    }
  }, [navigate]);

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: currentTheme
            ? theme.palette.secondary.main
            : "#f0f0f0",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Toolbar>
          {/* Logo Section */}
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Tooltip title="CRAFTO" arrow>
              <img
                src={logo}
                alt="Brand Logo"
                style={{ height: "40px", cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
            </Tooltip>
          </Box>

          {/* Action Buttons Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Notifications Icon */}
            <Tooltip title="Notifications" arrow>
              <IconButton
                component={Link}
                to="/notifications"
                sx={{
                  color: isNotificationsSelected
                    ? "var(--secondary-dark)"
                    : currentTheme
                    ? "#E0E0E0"
                    : "#333333",
                  backgroundColor: isNotificationsSelected
                    ? currentTheme
                      ? theme.palette.secondary.main
                      : "#dcdcdc"
                    : "transparent",
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: currentTheme ? "#444" : "#e0e0e0",
                  },
                }}
                aria-label="Notifications"
                onClick={() => onNotificationClick("/notifications")}
              >
                <Badge
                  badgeContent={notificationCount}
                  color="error"
                  invisible={!hasNotifications}
                >
                  {hasNotifications ? (
                    <MdNotificationsActive size={24} />
                  ) : (
                    <MdNotifications size={24} />
                  )}
                </Badge>
              </IconButton>
            </Tooltip>

            {/* My Profile Icon */}
            <Tooltip title="My Profile" arrow>
              <IconButton
                component={Link}
                to="/my-profile"
                sx={{
                  color: isMyProfileSelected
                    ? "var(--secondary-dark)"
                    : currentTheme
                    ? "#E0E0E0"
                    : "#333333",
                  backgroundColor: isMyProfileSelected
                    ? currentTheme
                      ? theme.palette.secondary.main
                      : "#dcdcdc"
                    : "transparent",
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: currentTheme ? "#444" : "#e0e0e0",
                  },
                }}
                aria-label="My Profile"
                onClick={() => onProfileClick("/my-profile")}
              >
                <RiAccountCircleLine size={24} />
              </IconButton>
            </Tooltip>

            {/* Dark Mode Switch */}
            <Tooltip title="Dark Mode" arrow>
              <IconButton>
                <DarkModeSwitch
                  checked={currentTheme}
                  onChange={toggleTheme}
                  size={24}
                />
              </IconButton>
            </Tooltip>

            {/* Logout Icon */}
            <Tooltip title="Logout" arrow>
              <IconButton
                sx={{
                  color: currentTheme ? "#E0E0E0" : "#333333",
                  "&:hover": {
                    backgroundColor: currentTheme ? "#444" : "#e0e0e0",
                  },
                }}
                aria-label="Logout"
                onClick={handleLogout}
              >
                <RiLogoutCircleRLine size={24} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
