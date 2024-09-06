import React from "react";
import { Card, CardContent, Divider, Typography , Box} from "@mui/material";
import { auto } from "@popperjs/core";

const YearCard = ({ backgroundColor, year , description }) => {
    return (
        <Card sx={{ 
            background: backgroundColor, 
            marginBottom: 5, 
            display: 'flex', 
            flexDirection: 'column', 
            height: '91%' 
        }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Divider sx={{ 
                    borderBottomWidth: 5, 
                    backgroundColor: "black", 
                    marginBottom: 5, 
                    marginTop: 5 
                }} />
                
                <Typography sx={{ fontSize: '1.5rem', textAlign: 'left' , mb:4 }}>
                    {year}
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', textAlign: 'left' , mt: auto}}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default YearCard;
