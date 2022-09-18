import { type } from "os";
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid, CardMedia, CardHeader, CardActions, IconButton, Rating } from '@mui/material';

type movieProps = {
    actors : [{
        firstName:string,
        lastName:string
    }], 
    ageLimit: number, 
    director: {firstName: String, lastName: String},
    genres: [],
    name: String,
    rating: number,
    synopsis: String,
    year: number
}

export const Movie = ({actors,ageLimit,director,genres,name,rating,synopsis,year}:movieProps) => {

    return(
        <Grid item xs={2} sm={4} md={4}>
            <Card>

                <CardMedia
                    component="img"
                    height="140"
                    image={`https://dummyimage.com/140x300/ded1de&text=${name}`}
                    alt=""
                />
                     
                <CardContent>
                    <Typography variant="h6" gutterBottom>{name}</Typography>
                    <Typography variant="subtitle2" >{`Release Year: ${year}`}</Typography>
                    <Typography variant="button" display="block" gutterBottom>{genres.join(', ')}</Typography>
                    <Rating name="read-only" value={ rating && rating} readOnly />
                    
                    <Typography variant="body2" gutterBottom>
                        {actors.map((actor,index)=>{
                            return(
                            <b><i>
                                { actors &&
                                    index == actors.length - 1 ? `${actor.firstName +' '+ actor.lastName }` : `${actor.firstName +' '+ actor.lastName }, `}
                            </i></b>)
                        })}
                    </Typography> 
                    <Typography variant="body2" gutterBottom>
                        <b><i>Directed By: </i></b>{ director &&  `${director.firstName + ' ' + director.lastName}` } 
                    </Typography>
                </CardContent>
                
            </Card>
        </Grid>
    )
}
