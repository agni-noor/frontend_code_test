import React from "react";
import Posts from "./components/Posts/Posts";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { styles } from "./styles";
const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar sx={styles.topBar} position="static" color="inherit">
        <Typography sx={styles.heading} variant="h2" align="center">
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
