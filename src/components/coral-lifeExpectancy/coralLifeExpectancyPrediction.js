import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import ImageSlider from './ImageSlider';
import { grey } from '@mui/material/colors';
import AllCoral from './AllCoral';
import DetailCard from './DetailCard';
import ImageCard from './ImageCard';

function CoralLifeExpectancyPrediction() {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [predicted, setPredicted] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://coral-precent-fxf2bbhwbyhmd8h2.eastus-01.azurewebsites.net/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    YYYY: parseInt(year),
                    MM: parseInt(month),
                    DD: parseInt(day),
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setPredicted(data.predicted ? data.predicted.toFixed(2) : 'N/A');  
            } else {
                console.error('Failed to fetch coral health data.');
                setPredicted('Error fetching data');
            }
        } catch (error) {
            console.error('Error:', error);
            setPredicted('Error fetching data');
        }
    };



    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ width: '100%', margin: 'auto', height: '100%' }}>

                <ImageSlider />

                <Grid container spacing={0} sx={{ mt: 3, width: "90%", mx: "0.1%" }}>

                    {/* First card */}
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: 2, // Add some padding inside the grid
                            maxWidth: "300px", // Set a max width to minimize card size
                        }}
                    >
                        <DetailCard
                            title="Card 1"
                            description="In Sri Lanka, an island nation in the Indian Ocean, there are many varieties of coral reefs that are vital to the marine environment"
                            linktoNext="/facts"
                            button="More Facts"
                            onClick={() => navigate("/facts")}
                        />
                    </Grid>

                    {/* Second card */}
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: 2,
                            maxWidth: "300px",
                            
                        }}
                    >
                        <ImageCard title="What is Coral bleaching?" linktoNext="CoralBleaching" />
                    </Grid>


                    {/* Third card */}
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: 2,
                            maxWidth: "300px",
                        }}
                    >
                        <DetailCard
                            title="Card 3"
                            description="Worldwide, coral reefs are in danger because of a number of issues, most especially issues such as sea water pollution."
                            linktoNext="/MoreFacts"
                            button="Read More"
                            onClick={() => navigate("/MoreFacts")}
                        />
                    </Grid>
                </Grid>

                {/* Second grid with typography */}
                <Grid container spacing={3} sx={{ my: 0.1, width: "90%", mx: "1%" }}>
                    <Grid item xs={12} sm={6} sx={{ backgroundColor: "black", padding: 2 }}>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '2rem',
                                color: "white",
                                mt: 10,
                                display: 'flex',
                            }}
                        >
                            Please Enter the date to check the
                        </Typography>
                        <Typography sx={{fontWeight: 'bold', fontSize: '2rem', color: "white" }}>
                            "Coral Health"
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} sx={{ backgroundColor: grey[300] }}>


                        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Year</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                        sx={{
                                            width: "50%",
                                            backgroundColor: 'white',
                                            '& .MuiOutlinedInput-root': {
                                                backgroundColor: 'white',
                                                borderRadius: '0',
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'black',
                                                },
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderRadius: '0',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Month</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        value={month}
                                        onChange={(e) => setMonth(e.target.value)}
                                        sx={{
                                            width: "50%",
                                            backgroundColor: 'white',
                                            '& .MuiOutlinedInput-root': {
                                                backgroundColor: 'white',
                                                borderRadius: '0',
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'black',
                                                },
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderRadius: '0',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Day</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        value={day}
                                        onChange={(e) => setDay(e.target.value)}
                                        sx={{
                                            width: "50%",
                                            backgroundColor: 'white',
                                            '& .MuiOutlinedInput-root': {
                                                backgroundColor: 'white',
                                                borderRadius: '0',
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'black',
                                                },
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderRadius: '0',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            my: 3,
                                            width: "40%",
                                            backgroundColor: "black",
                                            '&:hover': {
                                                backgroundColor: "black",
                                            },
                                            '&:active': {
                                                backgroundColor: "black",
                                            },
                                            '&.Mui-focused': {
                                                backgroundColor: "black",
                                            },
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                                {predicted && (
                                    <Grid item xs={12} sx={{ mb: 3 }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                            Coral Health Percentage: {predicted}%
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>
                        </Box>


                    </Grid>
                </Grid>
                <Grid container spacing={5} sx={{ my: 5, width: "90%", mx: "1%" }}>
                    <AllCoral />
                </Grid>
            </Box>
        </Box>
    );
}

export default CoralLifeExpectancyPrediction;