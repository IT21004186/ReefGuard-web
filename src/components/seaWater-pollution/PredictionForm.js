import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';
import { blue } from '@mui/material/colors';

function PredictionForm() {
    const [sstAvg, setSstAvg] = useState('');
    const [baa7dayMax, setBaa7dayMax] = useState('');
    const [currentDiseaseMax, setCurrentDiseaseMax] = useState('');
    const [currentBleachedAvg, setCurrentBleachedAvg] = useState('');
    const [waterPollution, setWaterPollution] = useState('');
    const [coralHealthPrediction, setCoralHealthPrediction] = useState('');

    // Function to handle form submission
    const handleSubmit = async () => {
        const data = {
            SST_AVG: parseFloat(sstAvg),
            BAA_7day_max: parseFloat(baa7dayMax),
            Current_disease_max: parseFloat(currentDiseaseMax),
            Current_Bleached_Avg_Percentage: parseFloat(currentBleachedAvg),
            Water_Pollution_Percentage: parseFloat(waterPollution),
        };

        try {
            console.log('Starting fetch request...');
            const response = await fetch('https://coral-precent-fxf2bbhwbyhmd8h2.eastus-01.azurewebsites.net/v2/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log('Prediction result:', result);

            var predicted = result.data['predicted:'];
            console.log("predicted : ", predicted);

            setCoralHealthPrediction(predicted);
        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
    };
    
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Container maxWidth="xl" disableGutters>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                    <Box sx={{ position: 'relative', 
    width: '100%', 
    height: 'auto', 
    overflow: 'hidden', 
    backgroundImage: "linear-gradient(to right, #e4f0ff, #a0c1ff)", // Adjust colors as needed
    padding: "10px",
    borderRadius:"4px" }}>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3 }}>
                                <Box component="form" noValidate autoComplete="off">
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
                                                sx={{ width: "50%", backgroundColor: 'white', marginLeft: "50px" }}
                                                value={sstAvg}
                                                onChange={(e) => setSstAvg(e.target.value)}
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
                                                sx={{ width: "50%", backgroundColor: 'white', marginLeft: "50px" }}
                                                value={baa7dayMax}
                                                onChange={(e) => setBaa7dayMax(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Date</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="number"
                                                size="small"
                                                sx={{ width: "50%", backgroundColor: 'white', marginLeft: "50px" }}
                                                value={currentDiseaseMax}
                                                onChange={(e) => setCurrentDiseaseMax(e.target.value)}
                                            />
                                        </Grid>                                        
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', my: 3 }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        width: "100%",
                                        backgroundColor: "black",
                                        '&:hover': {
                                            backgroundColor: "black",
                                        },
                                    }}
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', my: 3 }}>
                                <Typography sx={{ mb: 2, textAlign: 'center', fontSize: "1.6rem", fontWeight: 'bold' }}>
                                    Sea-Water Pollution Prediction 
                                    precentage 
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    type="text"
                                    value={coralHealthPrediction}
                                    sx={{
                                        width: "60%",
                                        backgroundColor: 'white',
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default PredictionForm;
