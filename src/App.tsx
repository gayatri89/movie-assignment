import React, { useEffect, useState } from "react";
import "./App.css";
import { MovieList } from "./components/MovieList";
import { Button, Container, Grid, Icon } from "@mui/material";
import { MovieFilter } from "./components/MovieFilter";
import { MovieForm } from "./components/MovieForm";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png"
                  width="50"
                  alt="logo"
                />
              </Link>
            </Typography>

            <MovieFilter value={inputValue} setInputValue={setInputValue} />
            <Link to="/create-movie">Add movie</Link>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route
            path="/"
            element={<MovieList inputValue={inputValue.toLocaleLowerCase()} />}
          />
          <Route path="/create-movie" element={<MovieForm />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
