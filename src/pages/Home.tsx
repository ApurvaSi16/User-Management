import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          User Management
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                component={Link}
                to="/login"
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                component={Link}
                to="/register"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
