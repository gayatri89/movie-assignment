import { Movie } from "./Movie";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/Api";
import { MovieGenres } from "./MovieGenres";
import { Box, Container } from "@mui/system";

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
  // console.log('props',props.inputValue)

  const [moviesData, setMoviesData] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetchMovies("http://localhost:3002/api/movies");
      setMoviesData(data);

      let uniqueArr = [];
      data.filter((item, index) => {
        item.genres.forEach((gen, index) => {
          if (!uniqueArr.includes(gen)) {
            uniqueArr.push(gen);
          }
        });
        //console.log("Exit", uniqueArr);
        setMovieGenres(uniqueArr);
        return uniqueArr;
      });

      //const res = filterMoviesGen(moviesData)
      // console.log("movieGe", movieGenres);
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
      <Box sx={{ flexGrow: 1 }}>
        <ul>
          {movieGenres.map((item, index) => {
            //console.log(item);
            return (
              <li key={index}>
                <MovieGenres gen={item} key={index} />
              </li>
            );
          })}
        </ul>
      </Box>

      <Grid container spacing={4}>
        {moviesData &&
          moviesData
            .filter((movieItems: movieProps) => {
              // console.log()

              return (
                movieItems.name &&
                movieItems.name.toLocaleLowerCase().includes(props.inputValue)
              );
            })
            .map((value, index) => <Movie {...value} key={index} />)}
      </Grid>
    </Container>
  );
};
