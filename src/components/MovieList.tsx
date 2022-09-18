import { Movie } from "./Movie";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchMovies, filterMoviesGen } from "../api/Api";
import { MovieGenres } from "./MovieGenres";
import { Box, Container } from "@mui/system";

type inputProps = {
  inputValue: String;
};
type movieProps = {
  ageLimit: Number;
  director: { firstName: String; lastName: String };
  genres: [];
  name: String;
  rating: Number;
  actors: [
    {
        firstName: string
        lastName: string
    }]
  synopsis: String;
  year: Number;
};
export const MovieList = ({ inputValue }: inputProps) => {
    
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
        console.log("Exit", uniqueArr);
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
            console.log(item);
            return (
              <li>
                <MovieGenres gen={item} key={index} />
              </li>
            );
          })}
        </ul>
      </Box>

      <Grid container spacing={4}>
        {moviesData
          //.filter((movieItems: movieProps) => {
          //  return movieItems.name.toLocaleLowerCase().includes({inputValue});
          //})
          .map((value, index) => (
            <Movie {...value} key={index} />
          ))}
      </Grid>
    </Container>
  );
};
