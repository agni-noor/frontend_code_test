import React from "react";
import Posts from "./components/Posts/Posts";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Timeline
        </Typography>
      </AppBar>
      <Container>
        <Posts />
      </Container>
    </Container>
  );
};

export default App;
