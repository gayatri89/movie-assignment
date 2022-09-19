import { API_URI } from "../Constant";

export const fetchMovies = async (url: string) => {
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
};

export const createMovie = async (obj) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  };

  const response = await fetch(API_URI, requestOptions);
  const data = await response.json();
  return data;
};

export const movieCount = async () => {
  const response = await fetch(API_URI);
  const { data } = await response.json();
  return data;
};

export const movieGenres = async () => {
  const data = await fetchMovies(API_URI);

  let uniqueArr = [];
  data.filter((item, index) => {
    item.genres.forEach((gen, index) => {
      if (!uniqueArr.includes(gen)) {
        uniqueArr.push(gen);
      }
    });
  });

  return uniqueArr;
};
