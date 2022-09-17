import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Movies} from './components/Movies';
import { Container, Grid } from '@mui/material';

function App() {

  const [result, setResult] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost:3002/api/movies");
      const jsonData = await data.json();
      setResult(jsonData.data);
    };

    api();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {result.map((value)=>{
          return (<Movies {...value} key='1' />)
        })}
      </Grid>
    </Container>
  );
}

export default App;
