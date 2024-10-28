import React from 'react';
import BackGround from './Images/8.jpg';
import { Box, TextField, InputAdornment, Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import Image1 from '../../assets/images/corals/cauliflower-coral.jpg';
import Image2 from '../../assets/images/corals/porites-coral.jpeg';
import Image3 from '../../assets/images/corals/staghorn-coral.jpg';
import Image4 from '../../assets/images/corals/Scleractinian-coral.png';

const images = [
    { src: Image1, name: 'Cauliflower Coral', next: "Coral_01" },
    { src: Image2, name: 'Pocillopora Coral', next: "Coral_02" },
    { src: Image3, name: 'Staghorn Coral', next: "Coral_03" },
    { src: Image4, name: 'Scleractinian corals', next: "Coral_04" },
];

function AllCoral() {
    const style = {
        backgroundImage: `url(${BackGround})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        filter: 'brightness(1.5)',
    };

    return (
        <div style={style}>
            <Box sx={{ width: '100%', margin: 'auto', height: '100%' }}>
                {/* Search Bar */}
                <Grid container spacing={3} sx={{ my: 5, width: "94%", mx: "3%" }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            sx: {
                                '& ::placeholder': {
                                    fontWeight: 900,
                                },
                                '& .Mui-focused': {
                                    color: 'black',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'black',
                                    },
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'black',
                                },
                            },
                        }}
                        sx={{
                            width: '30%',
                            ml: '2%',
                            backgroundColor: 'white',
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white',
                            },
                            border: "1px",
                            borderColor: 'black',
                        }}
                    />
                </Grid>

                {/* Image Grid */}
                <Grid container spacing={3} sx={{ my: 5, width: "94%", mx: "3%" }}>
                    {images.map((image, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                {/* Use Link for internal navigation */}
                                <Link to={`/${image.next}`} style={{ textDecoration: 'none' }}>
                                    <Box
                                        component="img"
                                        src={image.src}
                                        alt={image.name}
                                        sx={{
                                            width: '100%',
                                            height: '400px',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            mt: 1,
                                            fontWeight: 'bold',
                                            color: 'black',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {image.name}
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default AllCoral;