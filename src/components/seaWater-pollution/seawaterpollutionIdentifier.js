import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import ImageSlider from './ImageSlider';
import { grey } from '@mui/material/colors';
import AllCoral from './AllCoral';
import DetailCard from './DetailCard';
import ImageCard from './ImageCard';

function PollutionPredictor() {
    const [tempsterss, setTempsterss] = useState('');
    const [bleachrisk, setBleachrisk] = useState('');
    const [salstress, setSalstress] = useState('');
    const [clasireduc, setClasireduc] = useState('');
    const [clasistress, setClasistress] = useState('');
    const [predicted, setPredicted] = useState('');  
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!tempsterss || isNaN(tempsterss) || tempsterss.length !== 4) {
            //newErrors.tempsterss = 'Please enter a valid tempsterss with exactly 4 digits';
        }        
        if (!bleachrisk || isNaN(bleachrisk) || bleachrisk < 1 || bleachrisk > 12) {
            //newErrors.bleachrisk = 'Please enter a valid bleachrisk (1-12)';
        }
        if (!salstress || isNaN(salstress) || salstress < 1 || salstress > 31) {
            //newErrors.salstress = 'Please enter a valid salstress (1-31)';
        }
        if (!clasireduc || isNaN(clasireduc) || clasireduc < 1 || clasireduc > 31) {
            //newErrors.clasireduc = 'Please enter a valid clasireduc (1-31)';
        }
        if (!clasistress || isNaN(clasistress) || clasistress < 1 || clasistress > 31) {
            //newErrors.clasistress = 'Please enter a valid clasistress (1-31)';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Prevent form submission if there are validation errors
        }

        try {
            const response = await fetch('https://situation-cjghg2cvb9eyg6b3.eastus-01.azurewebsites.net/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tempsterss: parseInt(tempsterss),
                    bleachrisk: parseInt(bleachrisk),
                    salstress: parseInt(salstress),
                    clasireduc: parseInt(clasireduc),
                    clasistress: parseInt(clasistress),
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Hello");
                console.log(data);
                // Ensure the data is in the expected format
                // setPredicted(data.data.Predicted-Situation ? data.data.Predicted-Situation.toFixed(2) : 'N/A');
                setPredicted(data.data["Predicted Situation"] ? data.data["Predicted Situation"] : 'N/A');    
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
                            padding: 2, 
                            maxWidth: "300px", 
                        }}
                    >
                        <DetailCard
                            title="Card 1"
                            description="In Sri Lanka, an island nation in the Indian Ocean, sea water pollution has become a serious threat to the marine environment..."
                            linktoNext="/seafacts"
                            button="More SeaFacts"
                            onClick={() => navigate("/seafacts")}
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
                        <ImageCard title="What is Sea Water Pollution?" linktoNext="CoralBleaching" />
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
                            linktoNext="/MoreSeaFacts"
                            button="Read More"
                            onClick={() => navigate("/MoreSeaFacts")}
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
                            Please Enter the measurements to check the
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '2rem', color: "white" }}>
                            "Seawater Pollution"
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} sx={{ backgroundColor: grey[300] }}>

                        {/* temp */}
                        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Tempreture Sterss</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        value={tempsterss}
                                        onChange={(e) => {
                                            setTempsterss(e.target.value);
                                            setErrors((prev) => ({ ...prev, tempsterss: '' })); // Clear error on change
                                        }}
                                        error={!!errors.tempsterss}
                                        helperText={errors.tempsterss}
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

                                {/* bleach */}
                                <Grid item xs={4}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Bleaching Risk</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        value={bleachrisk}
                                        onChange={(e) => {
                                            setBleachrisk(e.target.value);
                                            setErrors((prev) => ({ ...prev, bleachrisk: '' })); // Clear error on change
                                        }}
                                        error={!!errors.bleachrisk}
                                        helperText={errors.bleachrisk}
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

                                {/* salinity */}
                                <Grid item xs={4}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Salinity Stress</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        value={salstress}
                                        onChange={(e) => {
                                            setSalstress(e.target.value);
                                            setErrors((prev) => ({ ...prev, salstress: '' })); // Clear error on change
                                        }}
                                        error={!!errors.salstress}
                                        helperText={errors.salstress}
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

                                {/* clasireduc */}
                                <Grid item xs={4}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Clasification Reduction</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        value={clasireduc}
                                        onChange={(e) => {
                                            setClasireduc(e.target.value);
                                            setErrors((prev) => ({ ...prev, clasireduc: '' })); // Clear error on change
                                        }}
                                        error={!!errors.clasireduc}
                                        helperText={errors.clasireduc}
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

                                {/* clasistress */}
                                <Grid item xs={4}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Clasification Stress</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        value={clasistress}
                                        onChange={(e) => {
                                            setClasistress(e.target.value);
                                            setErrors((prev) => ({ ...prev, clasistress: '' })); // Clear error on change
                                        }}
                                        error={!!errors.clasistress}
                                        helperText={errors.clasistress}
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
                                            Asstimated Pollution Level : {predicted}
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

export default PollutionPredictor;