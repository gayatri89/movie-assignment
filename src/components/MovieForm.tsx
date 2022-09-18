import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

//import { fetchMovies, filterMoviesGen } from "../api/Api";
import { useEffect, useState } from "react";

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export function MovieForm() {

    /**  useEffect(() => {
      console.log('I am inside the movie posts')
    // POST request using fetch inside useEffect React hook
    const dummyObj =  {
        "director": {
            "firstName": "dummy",
            "lastName": "Russo"
        },
        "name": "Lorem: Endgame",
        "year": 2018,
        "genres": [
            "Adventure",
            "Sci-fi"
        ],
        "ageLimit": 12,
        "rating": 4,
        "actors": [
            {
                "firstName": "Robert",
                "lastName": " Downey Jr."
            },
            {
                "firstName": "Chris",
                "lastName": "Evans"
            },
            {
                "firstName": "Scarlett",
                "lastName": "Johansson"
            }
        ],
        "synopsis":"lorem ipsum"
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dummyObj),
    };
    fetch("http://localhost:3002/api/movies", requestOptions)
      .then((response) => response.json())
      /** .then((data) => setPostId(data.id)); */

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  //}, []); */

  const [values, setValues] = useState({
    name: "",
    year: "",
    genres: "",
    ageLimit: "",
    rating: '',
    actors: '',
    director: '',
    synopsis: ''
  });

  const handleChange = () => {
      console.log('onchange')
  }

  return (
    <Container maxWidth="md" component="main">
      <Box sx={{ display: "flex", flexWrap: "wrap", m: 2 }}>
        <Typography variant="h5" component="h5">
          Add New Movie
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <TextField
            label="Movie Name"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-year"
              value=''
              aria-describedby="outlined-year-helper-text"
            />
            <FormHelperText id="outlined-year-helper-text">
              Year
            </FormHelperText>
          </FormControl>

          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Genres
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-genres"
              type="text"
              value=''
              label="Password"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-ageLimit"
              value=''
              label="ageLimit"
            />
          </FormControl>
        </div>
        <div>
          <TextField
            label="With normal TextField"
            id="filled-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            variant="filled"
            value=''
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <FilledInput
              id="filled-adornment-actors"
              value={values.actors}
              aria-describedby="filled-actors-helper-text"
            />
            <FormHelperText id="filled-director-helper-text">
              Actors
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-director">
              Director
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type="text"
              value='' />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-synopsis">synopsis</InputLabel>
            <FilledInput
              id="filled-adornment-synopsis"
              value=''
            />
          </FormControl>
        </div>
        <div>
          <TextField
            label="With normal TextField"
            id="standard-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            variant="standard"
          />
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
            <Input
              id="standard-adornment-weight"
              value=''
                        
            />
            <FormHelperText id="standard-weight-helper-text">
              Weight
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type="text"
            />
          </FormControl>
         
        </div>
      </Box>
    </Container>
  );
}
