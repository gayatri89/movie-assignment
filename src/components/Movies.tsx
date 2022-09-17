import { type } from "os";
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid, CardMedia } from '@mui/material';

type movieProps = {
    actors : [], 
    ageLimit: Number, 
    director: {firstName: String, lastName: String},
    genres: [],
    name: String,
    rating: Number,
    synopsis: String,
    year: Number
}

export const Movies = ({actors,ageLimit,director,genres,name,rating,synopsis,year}:movieProps) => {

    return(
        <Grid item xs={2} sm={4} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://dummyimage.com/140x300/ded1de&text=${name}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                    <Typography variant="body2" color="text.secondary">{synopsis}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
