import {Movie} from './Movie'
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

export const MovieList = ({inputValue}) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
      const api = async () => {
        const data = await fetch("http://localhost:3002/api/movies");
        const jsonData = await data.json();
        setResult(jsonData.data);
      };
  
      api();
    }, []);

    return(
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {result
                .filter((movieItems)=>{
                    return movieItems.name.toLocaleLowerCase().includes(inputValue);
                })
                .map((value,index)=>(
                    <Movie {...value} key={index} />
                ))
            }
      </Grid>
    )
}
