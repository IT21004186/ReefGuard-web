import React from "react";
import { Card, CardContent, Divider, Typography, CardActions, Button, CardMedia } from "@mui/material";
import { grey } from "@mui/material/colors";
import Coral from './Images/coral4.jpg';

const ImageCard = ({ title, linktoNext }) => {
  

  return (
    <Card sx={{
      backgroundColor: grey[300],
      marginBottom: 5,
      display: 'flex',
      flexDirection: 'column',
      height: '91%'
    }}>
      <CardMedia sx={{ objectFit: 'cover', height: '100%', width: '100%' }} image={Coral}>
        <CardContent sx={{ flexGrow: 1, marginBottom: "20%" }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '2.1rem', color: 'white', marginTop: '40%' }}>
            {title}
          </Typography>
        </CardContent>
        <CardActions sx={{
          marginTop: 'auto',
          marginBottom: 0
        }}>
          <a 
            href={linktoNext} 
             
            style={{ textDecoration: 'none' }}
          >
            <Button size="small" sx={{ color: 'white' }}>Read More</Button>
          </a>
        </CardActions>
      </CardMedia>
    </Card>
  );
};

export default ImageCard;
