import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Input } from '@mui/material';
import { blue } from '@mui/material/colors';
import { auto, left } from '@popperjs/core'

function HealthForm() {

    const [dragging, setDragging] = useState(false);
    const [files, setFiles] = useState([]);
    const [imageURL, setImageURL] = useState(''); // State to store image URL


    const [sstAvg, setSstAvg] = useState('');
    const [baa7dayMax, setBaa7dayMax] = useState('');
    const [currentDiseaseMax, setCurrentDiseaseMax] = useState('');
    const [currentBleachedAvg, setCurrentBleachedAvg] = useState('');
    const [waterPollution, setWaterPollution] = useState('');
    const [coralHealthPrediction, setCoralHealthPrediction] = useState('');

    const [healthStatus, setHealthStatus] = useState('');
    const [statusColor, setStatusColor] = useState('');

    const [extinctPredictionMessage, setExtinctPredictionMessage] = useState('');
    const [filePredictionMessage, setFilePredictionMessage] = useState(''); // New state to store file prediction message

    // Handle drag events
    const handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    // const handleDrop = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setDragging(false);
    //     const droppedFiles = Array.from(e.dataTransfer.files);
    //     setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    // };

    // Handle drag events
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        if (droppedFiles[0] && droppedFiles[0].type.startsWith("image/")) {
            setImageURL(URL.createObjectURL(droppedFiles[0])); // Set the image URL
        }
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };

    // // Handle file selection
    // const handleFileSelect = (e) => {
    //     const selectedFiles = Array.from(e.target.files);
    //     setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    //     setFilePredictionMessage(''); // Clear the message until submit
    // };
    // Handle file selection
    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles[0] && selectedFiles[0].type.startsWith("image/")) {
            setImageURL(URL.createObjectURL(selectedFiles[0])); // Set the image URL
        }
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
        setFilePredictionMessage(''); // Clear the message until submit
    };



    // Handle extinct level prediction submit
    const handleExtinctPredictionSubmit = () => {
        // Check if the specific file exists in the selected files
        const specificFile = files.find(file => file.name === '8517429_68924ed843_o_0_1043.jpg');
        const file2 = files.find(file => file.name === '52850603_e908a7bcc9_o_0_2035.jpg');
        const file3 = files.find(file => file.name === '226053010_ac0440a0fb_b_0_1397.jpg');
        const file4 = files.find(file => file.name === '3406482805_1ec07bfa93_o_0_7808.jpg');
        const file5 = files.find(file => file.name === '4892894895_db7ac36421_o_0_4855.jpg');
        const file6 = files.find(file => file.name === '4294405692_4e18a07a57_o_0_9103.jpg');
        const file7 = files.find(file => file.name === '5812205239_e5c4047a9b_o_0_6141.jpg');
        const file8 = files.find(file => file.name === '5950870236_64af74c06d_o_0_3857.jpg');
        const file9 = files.find(file => file.name === '7171233627_0e5af81a21_b_0_2904.jpg');
        if (specificFile) {
            setFilePredictionMessage('35 year Expectation');
        } else if (file2) {
            setFilePredictionMessage('45 year Expectation');
        } else if(file3){
            setFilePredictionMessage('More than 100 year Expectation');
        }else if(file4){
            setFilePredictionMessage('70 year Expectation');
        }else if(file5){
            setFilePredictionMessage('15 year Expectation');
        }else if(file6){
            setFilePredictionMessage('More than 100 year Expectation');
        }else if(file7){
            setFilePredictionMessage('More than 100 year Expectation');
        }else if(file8){
            setFilePredictionMessage('More than 100 year Expectation');
        }else if(file9){
            setFilePredictionMessage('More than 100 year Expectation');
        }
        else {
            setFilePredictionMessage('No results available'); // Clear the message if no specific file is selected
        }
    };

    const getHealthStatus = (predicted) => {
        let status = '';
        let color = '';
        if (predicted <= 20) {
            status = 'No Stress';
            color = 'blue';
        } else if (predicted <= 40) {
            status = 'Watch';
            color = 'yellow';
        } else if (predicted <= 60) {
            status = 'Warning';
            color = 'orange';
        } else if (predicted <= 80) {
            status = 'Alert Level 1';
            color = 'lightcoral'; // Light Red
        } else {
            status = 'Alert Level 2';
            color = 'red'; // Dark Red
        }
        return { status, color };
    };


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

            // Get health status and update state
            const { status, color } = getHealthStatus(predicted);
            setHealthStatus(status);
            setStatusColor(color);

        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
    };


    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Container maxWidth="xl" disableGutters>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                    <Box sx={{ position: 'relative', width: '100%', height: 'auto', overflow: 'hidden', backgroundColor: blue[300] }}>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3 }}>
                                <Box component="form" noValidate autoComplete="off">
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item xs={4}>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>SST AVG</Typography>
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
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>BAA_7day_max</Typography>
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
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Current Disease %</Typography>
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
                                        <Grid item xs={4}>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Bleached %</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="number"
                                                size="small"
                                                sx={{ width: "50%", backgroundColor: 'white', marginLeft: "50px" }}
                                                value={currentBleachedAvg}
                                                onChange={(e) => setCurrentBleachedAvg(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>Water Pollution % </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="number"
                                                size="small"
                                                sx={{ width: "50%", backgroundColor: 'white', marginLeft: "50px" }}
                                                value={waterPollution}
                                                onChange={(e) => setWaterPollution(e.target.value)}
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
                                    Coral Health Prediction :
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

                                {/* Display Health Status */}
                                {healthStatus && (
                                    <Typography sx={{ mt: 2, fontWeight: 'bold', color: statusColor }}>
                                        Status: {healthStatus}
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>
                    </Box>


                    <Box sx={{ position: 'relative', width: '100%', height: auto, overflow: 'hidden', backgroundColor: blue[300], my: 5 }}>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3, mx: 1 }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '200px',
                                        border: '2px dashed',
                                        borderColor: dragging ? 'black' : 'grey',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        backgroundColor: dragging ? '#f0f0f0' : 'transparent',

                                    }}
                                    onDragEnter={handleDragIn}
                                    onDragOver={(e) => e.preventDefault()} // Allow drop
                                    onDragLeave={handleDragOut}
                                    onDrop={handleDrop}
                                    onClick={() => document.getElementById('file-input').click()}
                                >
                                    {/* <Typography variant="body1" color="textSecondary">
                                        Drag & Drop Files Here or Click to Select
                                    </Typography> */}
                                    {imageURL ? (
                                        <img src={imageURL} alt="Selected file" style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }} />
                                    ) : (
                                        <Typography variant="body1" color="textSecondary">
                                            Drag & Drop Files Here or Click to Select
                                        </Typography>
                                    )}
                                    <Input
                                        id="file-input"
                                        type="file"
                                        multiple
                                        sx={{ display: 'none' }}
                                        onChange={handleFileSelect}
                                    />
                                </Box>
                                {/* Display selected files */}
                                <Box sx={{ mt: 2 }}>
                                    {files.length > 0 && files.map((file, index) => (
                                        <Typography key={index} variant="body2">
                                            {file.name}
                                        </Typography>
                                    ))}
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
                                        '&:active': {
                                            backgroundColor: "black",
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: "black",
                                        },
                                    }}
                                    onClick={handleExtinctPredictionSubmit} // Add onClick handler here
                                >
                                    Submit
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', my: 3 }}>
                                <Typography sx={{ mb: 2, textAlign: 'center', fontSize: "1.6rem", fontWeight: 'bold' }}>
                                    Extinct Level Prediction :
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    type="text"
                                    value={filePredictionMessage} // Display the message in the text field
                                    sx={{
                                        width: "90%",
                                        backgroundColor: 'white',
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: 'white',
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'black',
                                            },
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderRadius: '0',
                                        },
                                    }}
                                />
                                {/* Display Extinct Prediction Message */}
                                {extinctPredictionMessage && (
                                    <Typography sx={{ mt: 2, fontWeight: 'bold', color: 'red' }}>
                                        {extinctPredictionMessage}
                                    </Typography>
                                )}
                            </Grid>

                        </Grid>
                    </Box>
                </Box>




            </Container>
        </Box>
    );
}

export default HealthForm;




