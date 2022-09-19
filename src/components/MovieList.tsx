import { Movie } from "./Movie";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/Api";
import { MovieGenres } from "./MovieGenres";
import { Container } from "@mui/system";
import { API_URI } from "../Constant";

type movieProps = {
  ageLimit: Number;
  director: { firstName: String; lastName: String };
  genres: [];
  name: String;
  rating: Number;
  actors: [
    {
      firstName: string;
      lastName: string;
    }
  ];
  synopsis: String;
  year: Number;
};
export const MovieList = (props) => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetchMovies(API_URI);
      setMoviesData(data);
    };

    api();
  }, []);

  return (
    <Container
      disableGutters
      maxWidth="lg"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <MovieGenres />

      <Grid container spacing={4}>
        {
          moviesData &&
            moviesData
              .filter((movieItems: movieProps) => {
                return (
                  movieItems.name &&
                  movieItems.name.toLocaleLowerCase().includes(props.inputValue)
                );
              })
              .map((value, index) => <Movie {...value} key={index} />)
        }
      </Grid>
    </Container>
  );
};
