import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
  Button,
  CircularProgress,
  Chip,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ClearIcon from "@mui/icons-material/Clear";
import { HelmetComponent } from "../shared/HelmetComponent";

// Mock notifications data (expanded)
const mockNotifications = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Notification ${index + 1}`,
  description: `This is the description for notification ${index + 1}.`,
  timestamp: `${index + 1} minutes ago`,
}));

const NotificationComponent = ({ title }) => {
  // State management for notifications, pagination, and loading
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Constants for pagination
  const LIMIT = 10; // Notifications per page

  // Load notifications on component mount or when the page changes
  useEffect(() => {
    loadNotifications(page);
  }, [page]);

  // Function to load notifications with pagination
  const loadNotifications = (page) => {
    setLoading(true);
    const startIndex = (page - 1) * LIMIT;
    const endIndex = startIndex + LIMIT;
    const newNotifications = mockNotifications.slice(startIndex, endIndex);

    setTimeout(() => {
      if (newNotifications.length > 0) {
        setNotifications((prev) => [...prev, ...newNotifications]);
      } else {
        setHasMore(false); // No more notifications available
      }
      setLoading(false);
    }, 1000); // Simulated network delay
  };

  // Clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
    setPage(1);
    setHasMore(false);
  };

  // Load more notifications
  const handleLoadMore = () => {
    if (!loading) setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <HelmetComponent title={title} />

      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Header with Notifications Title and Count */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #ccc",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="h5" sx={{ color: "#377D99", fontWeight: "bold" }}>
              Notifications
            </Typography>

            {/* Notification Count or Loading Indicator */}
            <Chip
              label={
                loading ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <CircularProgress size={16} sx={{ color: "white" }} />
                    <Typography variant="caption" sx={{ color: "white", fontWeight: "bold" }}>
                      Loading...
                    </Typography>
                  </Box>
                ) : (
                  `Total: ${notifications.length}`
                )
              }
              color="primary"
              size="small"
              sx={{
                backgroundColor: "#377D99",
                color: "white",
                fontWeight: "bold",
                px: 1,
              }}
            />
          </Box>

          {notifications.length > 0 && (
            <IconButton
              onClick={clearNotifications}
              title="Clear All Notifications"
              sx={{ color: "#d32f2f" }}
            >
              <ClearIcon />
            </IconButton>
          )}
        </Box>

        {/* Scrollable Notifications List */}
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          <List>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <ListItem
                  key={notification.id}
                  sx={{
                    alignItems: "flex-start",
                    mb: 1,
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 1,
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <NotificationsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={notification.title}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline", color: "#616161", fontSize: 14 }}
                          component="span"
                          variant="body2"
                        >
                          {notification.description}
                        </Typography>
                        <Typography
                          sx={{ display: "block", mt: 0.5, color: "#9e9e9e", fontSize: 12 }}
                          variant="caption"
                        >
                          {notification.timestamp}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))
            ) : (
              <Typography
                variant="body2"
                sx={{ mt: 3, color: "#9e9e9e", textAlign: "center" }}
              >
                No notifications available.
              </Typography>
            )}
          </List>

          {/* Load More Button */}
          {hasMore && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                variant="contained"
                onClick={handleLoadMore}
                disabled={loading}
                startIcon={
                  loading && <CircularProgress size={20} sx={{ color: "white" }} />
                }
                sx={{
                  display: "flex",
                  alignItems: "center",
                  transition: "0.3s",
                  "&:hover": { transform: loading ? "none" : "scale(1.05)" },
                }}
              >
                {loading ? "Loading..." : "Load More"}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default NotificationComponent;
