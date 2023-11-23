import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard2() {
  return (
    <Card className='matCard' sx={{ maxWidth: 400}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://collegevidya.com/_next/image/?url=https%3A%2F%2Fcollegevidya.com%2Fblog%2Fwp-content%2Fuploads%2F2021%2F12%2Ftop-online-distance-mba-colleges-in-haryana-1.png&w=3840&q=100"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Top Online/Distance MBA Colleges in Haryana 2024 – UPDATED!!
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Haryana, the cradle of India’s agricultural prosperity, is not just a land of cultural heritage but also a hub for
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