import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard3() {
  return (
    <Card className='matCard' sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://distancecolleges.in/blogs/images/top-7-distance-mba-colleges-in-bangalore.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Top Online/Distance MBA Courses in Bangalore – UPDATED!!
          </Typography>
          <Typography variant="body2" color="text.secondary">
          In an era dominated by digital advancements, the field of education has undergone a revolutionary transformation, paving the way for
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <a href='#'>Read More</a>
        </CardContent>
      </CardActionArea>
      </Card>
  );
}