import React, { useEffect, useState } from "react";
import "./App.css";
import { MovieList } from "./components/MovieList";
import { Container } from "@mui/material";
import { MovieFilter } from "./components/MovieFilter";
import { MovieForm } from "./components/MovieForm";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchMovies } from "./api/Api";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState();

  useEffect(() => {
    //Displaying total Movie count
    const api = async () => {
      const data = await fetchMovies("http://localhost:3002/api/movies");
      console.log("count", data.length);
      setCount(data.length);
    };

    api();
  }, []);

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
            <Link to="/create-movie">Add movie </Link>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {count}
            </Typography>
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
