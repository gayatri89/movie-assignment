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
import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

import { createMovie } from "../api/Api";
import { useEffect, useState } from "react";

type State = {
  director: {
    firstName: string;
    lastName: string;
  };
  name: string;
  year: number;
  genres: [];
  ageLimit: number;
  rating: number;
  actors: [
    {
      firstName: string;
      lastName: string;
    }
  ];
  synopsis: string;
};

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

  let [data, setData] = useState({
    name: "",
    year: "",
    genres: [],
    ageLimit: "",
    rating: "",
    actors: [
      {
        firstName: "",
        lastName: "",
      },
    ],
    director: {
      firstName: "",
      lastName: "",
    },
    synopsis: "",
  });

  let [moviname, setMoviName] = useState("");
  let [year, setYear] = useState("");
  let [genres, setGenres] = useState('');
  let [ageLimit, setAgeLimit] = useState("");
  let [rating, setRating] = useState("");
  let [actorFirstname, setActorFirstName] = useState("");
  let [actorLastname, setActorLastName] = useState("");
  let [directorFirstname, setDirectorFirstName] = useState("");
  let [directorLastname, setDirectorLastName] = useState("");
  let [synopsis, setSynopsis] = useState("");
  let [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setData({ 
        name: moviname,
        year: year,
        genres: [genres],
        ageLimit: ageLimit,
        rating: rating,
        actors: [
          {
            firstName: actorFirstname,
            lastName: actorLastname,
          },
        ],
        director: {
          firstName: directorFirstname,
          lastName: directorLastname,
        },
        synopsis: synopsis,
      })
    console.log("submitting...", data);
      try {
        const response = await createMovie(data)
        console.log('msg',response)
        if (response.status === 'success') {
            setMoviName("");
            setYear("");
            setGenres('');
            setAgeLimit('');
            setRating('');
            setSynopsis('');
            setActorFirstName('')
            setActorLastName('');
            setDirectorFirstName('');
            setDirectorLastName('');
            setMessage("Movie created successfully");
          } else {
            setMessage("Some error occured");
          }
      } catch (err) {
          console.log(err);
      }
    
    

  };

  return (
    <Container maxWidth="md" component="main">
      <Box sx={{ display: "flex", flexWrap: "wrap", m: 2 }}>
        <Typography variant="h5" component="h5">
          Add New Movie
        </Typography>
      </Box>
     
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div className="message">{message ? <p>{message}</p> : null}</div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <TextField
              label="Movie Name"
              name="movie-name"
              onChange={(e) => setMoviName(e.target.value)}
              value={moviname}
              sx={{ m: 1, width: "25ch" }}
            />

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                label="Relesed Year"
                name="year"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                label="Genres"
                name="genres"
                onChange={(e) => setGenres(e.target.value)}
              />
            </FormControl>
          </div>

          <div>
            <TextField
              label="Age Limit"
              name="age-limit"
              sx={{ m: 1, width: "25ch" }}
              onChange={(e) => {
                setAgeLimit(e.target.value);
              }}
            />

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                label="Rating"
                name="rating"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "25ch" }}>
              <TextField
                label="Synopsis"
                name="synopsis"
                onChange={(e) => setSynopsis(e.target.value)}
                value={synopsis}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "38ch" }} variant="outlined">
              <TextField
                label="Actor Firstname"
                name="actor-firstname"
                onChange={(e) => setActorFirstName(e.target.value)}
                value={actorFirstname}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "38ch" }} variant="outlined">
              <TextField
                label="Actor Lastname"
                name="actor-lastname"
                onChange={(e) => setActorLastName(e.target.value)}
                value={actorLastname}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "38ch" }}>
              <TextField
                label="Director Firstname"
                name="director-firstname"
                onChange={(e) => setDirectorFirstName(e.target.value)}
                value={directorFirstname}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "38ch" }}>
              <TextField
                label="Director Lastname"
                name="director-lastname"
                onChange={(e) => setDirectorLastName(e.target.value)}
                value={directorLastname}
              />
            </FormControl>
          </div>

          <div>
            <FormControl fullWidth sx={{ m: 1 }}>
              <Button type="submit" variant="outlined">
                Add
              </Button>
            </FormControl>
          </div>
        </form>
     
      </Box>
    </Container>
  );
}
