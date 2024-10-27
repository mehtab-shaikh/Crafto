import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Button,
  Fab,
  Chip,
  Tooltip,
  Link as MuiLink,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

// Array of image URLs
const imageUrls = [
  "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg?semt=ais_hybrid",
  "https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg",
  "https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd33d49a346d9be0b075ea_65dd12fa299e167d189f00f7-fed9c2116dfcf56370cea3063f4e88fa.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDNz2A46ax9ZXcYl2kPQ-7AdZ8WZP3c0Mx--NbgaQK7iHQsaYQFQANW7o90cV2LJi2Z4&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYGSUNUOOLH6bVRhoX7g5GtQFOLCpeTpNrTWDUT3HC3Fzf5pKAraIW_GFwtJhRt8u2Hc&usqp=CAU",
  "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
  "https://t3.ftcdn.net/jpg/06/15/49/68/360_F_615496890_W34yB8VDE6n5pehb5QCt1ek5oEvRo9qA.jpg",
  "https://t4.ftcdn.net/jpg/08/88/95/67/360_F_888956780_IPyiSXGL94aPD1gdu8kWvTaquQm3hUeS.jpg",
  "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
];

// Array of quote texts
const quoteTexts = [
  "The best way to predict the future is to create it.",
  "Success is not final, failure is not fatal.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The road to success and the road to failure are almost exactly the same.",
  "Opportunities don't happen, you create them.",
  "It is better to fail in originality than to succeed in imitation.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Don’t be afraid to give up the good to go for the great.",
  "I find that the harder I work, the more luck I seem to have.",
  "Success is not the key to happiness. Happiness is the key to success.",
];

// Array of dummy usernames
const usernames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Hannah",
  "Ian",
  "Julia",
];

// Utility function to shuffle arrays
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

// Generate dummy quotes based on limit and offset
const generateDummyQuotes = (limit, offset) => {
  const dummyQuotes = [];
  const shuffledImages = shuffleArray([...imageUrls]);
  const shuffledTexts = shuffleArray([...quoteTexts]);
  const shuffledUsers = shuffleArray([...usernames]);

  for (let i = 0; i < limit; i++) {
    dummyQuotes.push({
      id: offset + i,
      text: shuffledTexts[i % shuffledTexts.length],
      mediaUrl: shuffledImages[i % shuffledImages.length],
      username: shuffledUsers[i % shuffledUsers.length],
      created_at: new Date().toISOString(),
    });
  }
  return dummyQuotes;
};

const QuoteListComponent = () => {
  // State for quotes, loading status, pagination, and more quotes availability
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Constants for pagination and max quotes limit
  const LIMIT = 12; // Number of quotes per page
  const MAX_QUOTES = 100; // Maximum number of quotes to load

  // Fetch quotes dynamically and handle pagination
  const fetchQuotes = useCallback(() => {
    if (!hasMore || loading) return; // Stop if no more quotes or already loading

    setLoading(true);

    setTimeout(() => {
      const offset = page * LIMIT;
      const newQuotes = generateDummyQuotes(LIMIT, offset);

      if (offset + LIMIT >= MAX_QUOTES || newQuotes.length < LIMIT) {
        setHasMore(false); // Stop fetching if limit reached
      }

      setQuotes((prevQuotes) => [...prevQuotes, ...newQuotes]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, 1000); // Simulate network delay for demonstration
  }, [page, hasMore, loading]);

  // Initial fetch on component mount
  useEffect(() => {
    fetchQuotes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Header section with title and loading chip */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h5" sx={{ color: "#377D99", fontWeight: "bold" }}>
          Quote List
        </Typography>

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
              `Total Quotes: ${quotes.length}`
            )
          }
          color="primary"
          size="small"
          sx={{
            backgroundColor: "#377D99",
            color: "white",
            fontWeight: "bold",
            paddingX: 1,
          }}
        />
      </Box>

      {/* Scrollable Quote Grid */}
      <Box
        sx={{
          overflowY: "auto",
          maxHeight: "calc(100vh - 250px)",
          pr: 1,
        }}
      >
        {quotes.length > 0 ? (
          <Grid container spacing={2}>
            {quotes.map((quote) => (
              <Grid item xs={12} sm={6} md={3} key={quote.id}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: 4,
                    boxShadow: 3,
                    cursor: "pointer",
                    height: 200,
                    "&:hover .hover-link": { display: "block" },
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "0.3s",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={quote.mediaUrl}
                    alt="Quote Image"
                    sx={{ height: "100%", objectFit: "cover", filter: "brightness(80%)" }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      color: "white",
                      p: 1,
                      width: "100%",
                      background: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {quote.text}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      {quote.username} - {new Date(quote.created_at).toLocaleString()}
                    </Typography>
                  </CardContent>
                  {/* Floating Link to view the image */}
                  <Box
                    className="hover-link"
                    sx={{
                      display: "none",
                      position: "absolute",
                      bottom: 10,
                      left: 10,
                      backgroundColor: "#fff",
                      padding: "2px 4px",
                      borderRadius: 1,
                      zIndex: 10,
                    }}
                  >
                    <MuiLink
                      href={quote.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontSize: "0.75rem", color: "#377D99", textDecoration: "none" }}
                    >
                      {quote.mediaUrl}
                    </MuiLink>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          !loading && (
            <Typography
              variant="body1"
              sx={{ mt: 3, color: "#9e9e9e", textAlign: "center" }}
            >
              No quotes available.
            </Typography>
          )
        )}

        {/* Load More Button */}
        {hasMore && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              variant="contained"
              onClick={fetchQuotes}
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

      {/* Floating Action Button for adding a new quote */}
      <Tooltip arrow title="Create Quote">
        <Fab
          color="primary"
          aria-label="add"
          component={Link}
          to="/quote/add"
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            backgroundColor: "var(--secondary-dark)",
            color: "#E0E0E0",
            "&:hover": { backgroundColor: "#2c5a72" },
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default QuoteListComponent;
