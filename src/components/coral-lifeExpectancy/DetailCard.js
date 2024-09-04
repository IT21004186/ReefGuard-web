import React from "react";
import { Card, CardContent, Divider, Typography , CardActions , Button} from "@mui/material";
import { grey } from "@mui/material/colors";

const DetailCard = ({ title, description , linktoNext , button}) => {
    return (
        <Card sx={{ 
            backgroundColor: grey[300], 
            marginBottom: 5, 
            display: 'flex', 
            flexDirection: 'column', 
            height: '80%' 
        }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Divider sx={{ 
                    borderBottomWidth: 5, 
                    backgroundColor: "black", 
                    marginBottom: 5, 
                    marginTop: 5 
                }} />
                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ 
                marginTop: 'auto', 
                marginBottom: 1 ,
                justifyContent:"center"
            }}>
                <a 
            href={linktoNext} 
            style={{ textDecoration: 'none' }}
          >
            <Button size="small" sx={{ color: 'black' }}>{button}</Button>
          </a>
            </CardActions>
        </Card>
    );
};

export default DetailCard;
