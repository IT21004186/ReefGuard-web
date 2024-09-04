import React from 'react'
import { useState } from 'react'
import { Box, Container, Typography, Grid, TextField, Button, Input } from '@mui/material'
import { blue, red } from '@mui/material/colors'
import Image1 from "./Images/coral4.jpg"
import { auto, left } from '@popperjs/core'

function HealthForm() {

    const [dragging, setDragging] = useState(false);
    const [files, setFiles] = useState([]);

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

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };

    // Handle file selection
    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Container maxWidth="xl" disableGutters>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                    {/* First row with image and text */}
                    <Box sx={{ position: 'relative', width: '100%', height: auto, overflow: 'hidden', backgroundColor: blue[300] }}>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3 }}>
                                <Box component="form" noValidate autoComplete="off">
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item xs={4}>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>xxxxx</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="number"
                                                size="small"
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
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>xxxxx</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="number"
                                                size="small"
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
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>xxxxx</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="number"
                                                size="small"
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
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>xxxxx</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="number"
                                                size="small"
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
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>xxxxx</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="number"
                                                size="small"
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
                                            <Typography sx={{ fontWeight: 'bold', fontSize: "1rem" }}>xxxxx</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="number"
                                                size="small"
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
                            <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', my: 3 }}>
                                <Typography sx={{ mb: 2, textAlign: 'center', fontSize: "1.6rem", fontWeight: 'bold' }}>
                                    Coral Health Prediction :
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    type="text"
                                    sx={{
                                        width: "60%",
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
                            </Grid>

                        </Grid>
                    </Box>
                    <Box sx={{ position: 'relative', width: '100%', height: auto, overflow: 'hidden', backgroundColor: blue[300], my: 5 }}>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3 ,mx:1}}>
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
                                    <Typography variant="body1" color="textSecondary">
                                        Drag & Drop Files Here or Click to Select
                                    </Typography>
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
                                    sx={{
                                        width: "60%",
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
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default HealthForm