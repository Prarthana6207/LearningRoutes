import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card className='matCard' sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          MBA in Digital Marketing: A Comprehensive Guide for 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
          “Marketing is no longer about the stuff that you make, but about the stories you tell.” – Seth Godin, (Author
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