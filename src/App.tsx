import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {MovieList} from './components/MovieList';
import { Container, Grid } from '@mui/material';
import { MovieFilter } from './components/MovieFilter';

function App() {

  const [inputValue, setInputValue] = useState("")

  return (
    <Container maxWidth="lg">
      <div>
        <MovieFilter value={inputValue} setInputValue={setInputValue} />
      </div>
      <br /><br />
      <MovieList inputValue={inputValue.toLocaleLowerCase()} />
    </Container>
  );
}

export default App;
