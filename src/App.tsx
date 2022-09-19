import React, { useEffect, useState } from "react";
import "./App.css";
import { MovieList } from "./components/MovieList";
import { Button, Container, IconButton } from "@mui/material";
import { MovieFilter } from "./components/MovieFilter";
import { MovieForm } from "./components/MovieForm";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchMovies } from "./api/Api";
import Badge from "@mui/material/Badge";
import { LOGO , API_URI} from "./Constant";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState();

  useEffect(() => {
    const api = async () => {
      const data = await fetchMovies(API_URI);
      setCount(data.length);
    };

    api();
  }, []);

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ flexGrow: 3 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  ></IconButton>
                  <Typography
                    variant="h6"
                    component="a"
                    href="/"
                    sx={{ flexGrow: 1 }}
                  >
                    <img src={LOGO} width="50" alt="logo" />
                  </Typography>

                  <MovieFilter
                    value={inputValue}
                    setInputValue={setInputValue}
                  />

                  <Badge badgeContent={count} color="secondary">
                    <Button color="inherit" href="/create-movie">
                      Add Movie
                    </Button>
                  </Badge>
                </Toolbar>
              </AppBar>
            </Box>
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
