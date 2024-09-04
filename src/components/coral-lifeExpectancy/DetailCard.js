import React from "react";
import { Card, CardContent, Divider, Typography, CardActions, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const DetailCard = ({ title, description, linktoNext, button }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(linktoNext);
    };

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
                <Button 
                    size="small" 
                    sx={{ color: 'black' }} 
                    onClick={handleClick}
                >
                    {button}
                </Button>
            </CardActions>
        </Card>
    );
};

export default DetailCard;
