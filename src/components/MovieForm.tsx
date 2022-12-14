import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";

import { createMovie } from "../api/Api";
import { useState } from "react";

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
  let [genres, setGenres] = useState("");
  let [ageLimit, setAgeLimit] = useState("");
  let [rating, setRating] = useState("");
  let [actorFirstname, setActorFirstName] = useState("");
  let [actorLastname, setActorLastName] = useState("");
  let [directorFirstname, setDirectorFirstName] = useState("");
  let [directorLastname, setDirectorLastName] = useState("");
  let [synopsis, setSynopsis] = useState("");
  let [message, setMessage] = useState("");

  const handleClear = () => {
    setMoviName("");
    setYear("");
    setGenres("");
    setAgeLimit("");
    setRating("");
    setSynopsis("");
    setActorFirstName("");
    setActorLastName("");
    setDirectorFirstName("");
    setDirectorLastName("");
    setData(null);

    return true;
  };

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
    });

    try {
      const response = await createMovie(data);
      if (response.status === "success") {
        handleClear();
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
              required={true}
              error={moviname === "" ? true : false}
            />

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                label="Relesed Year"
                name="year"
                onChange={(e) => setYear(e.target.value)}
                value={year}
                required={true}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                label="Genres"
                name="genres"
                onChange={(e) => setGenres(e.target.value)}
                required={true}
              />
            </FormControl>
          </div>

          <div>
            <TextField
              label="Age Limit"
              name="ageLimit"
              sx={{ m: 1, width: "25ch" }}
              onChange={(e) => {
                setAgeLimit(e.target.value);
              }}
              required={true}
            />

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                label="Rating"
                name="rating"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                required={true}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "25ch" }}>
              <TextField
                label="Synopsis"
                name="synopsis"
                onChange={(e) => setSynopsis(e.target.value)}
                value={synopsis}
                required={true}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "38ch" }} variant="outlined">
              <TextField
                label="Actor Firstname"
                name="actor-firstname"
                onChange={(e) => setActorFirstName(e.target.value)}
                value={actorFirstname}
                required={true}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "38ch" }} variant="outlined">
              <TextField
                label="Actor Lastname"
                name="actor-lastname"
                onChange={(e) => setActorLastName(e.target.value)}
                value={actorLastname}
                required={true}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "38ch" }}>
              <TextField
                label="Director Firstname"
                name="director-firstname"
                onChange={(e) => setDirectorFirstName(e.target.value)}
                value={directorFirstname}
                required={true}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "38ch" }}>
              <TextField
                label="Director Lastname"
                name="director-lastname"
                onChange={(e) => setDirectorLastName(e.target.value)}
                value={directorLastname}
                required={true}
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
