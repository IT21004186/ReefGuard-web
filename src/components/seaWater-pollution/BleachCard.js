import React from "react";
import { Card, CardContent, Divider, Typography , CardActions , Button} from "@mui/material";
import { grey } from "@mui/material/colors";
import { left } from "@popperjs/core";


const BleachCard = ({ icon, description }) => {
    return (
        <Card sx={{ 
            background: "linear-gradient(to top, #ffde59, #fff7a5)",
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
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    border: '2px solid black',
                    marginBottom: '20px' 
                }}>
                    {icon}
                </div>
                <Typography sx={{  fontSize: '1.1rem' , textAlign:'left'}}>
                    {description}
                </Typography>
            </CardContent>

        </Card>
    );
};

export default BleachCard;
