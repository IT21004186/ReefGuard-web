import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'
import Madrepora from "../Images/Madrepora.jpg"
import polymastia from "../Images/polymastia.jpg"
import newImage from "../Images/3.jpg"

function Facts() {
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Container maxWidth="xl" disableGutters>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                    {/* First row with image and text */}
                    <Box sx={{ position: 'relative', width: '100%', height: '30vh', overflow: 'hidden', backgroundColor: '#08333A' }}>
                        <Typography variant="h3" component="h1" sx={{
                            position: 'absolute',
                            top: '20%',
                            left: '5%',
                            color: 'white',
                        }}>
                            Facts
                        </Typography>
                        <Typography variant="h6" component="h3" sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '5%',
                            color: 'white',
                            textAlign: 'left'
                        }}>
                            In Sri Lanka, an island nation in the Indian Ocean,
                            there are many varieties of coral reefs that are vital to the marine environment....
                        </Typography>
                    </Box>

<br/>

                        <Box sx={{ position: 'relative', width: '100%', height: '30vh', overflow: 'hidden' }}>
                            <img src={newImage} alt="Coral Reefs" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(5px)' }} />
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '5%',
                                width: '90%',
                                transform: 'translateY(-50%)',
                                color: 'white',
                                textAlign: 'left',
                                // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                padding: 2,
                                borderRadius: 1
                            }}>
                                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    In Sri Lanka, an island nation in the Indian Ocean, diverse coral reefs are essential to the marine environment. 
                                    These reefs support a wide range of marine life, providing critical habitat and contributing to the health and productivity 
                                    of the oceanic ecosystem. The rich coral biodiversity around Sri Lanka plays a key role in sustaining fish populations and 
                                    protecting coastlines from erosion. Below are some common corals found near Sri Lanka:
                                </Typography>
                            </Box>
                        </Box>



                    <Box sx={{ flex: 1, padding: 3 }}>
                        <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
                            <Grid item xs={12} sm={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            </Grid>
                            <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={Madrepora} alt="Madrepora" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', mt: 1 }}>
                                    MADREPORA OCULATA 
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant="body1" sx={{ fontSize: "1.3rem", textAlign: 'left', mb: 5 }}>
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '40px' }}>Kingdom</span> <a href="#" style={{ color: 'blue', textDecoration: 'none' }}>Animalia</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '52px'  }}>Phylum</span> <a href="#" style={{ color: 'blue', textDecoration: 'none' }}>Cnidaria</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '71px'  }}>Class</span> <a href="#" style={{ color: 'blue', textDecoration: 'none' }}>Hexacorallia</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '71px' }}>Order</span> <a href="#" style={{ color: 'blue', textDecoration: 'none' }}>Scleractinia</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '60px'  }}>Family</span> <a href="#" style={{ color: 'blue', textDecoration: 'none' }}>Oculinidae</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '63px' }}>Genus</span> <a href="#" style={{ color: 'blue', textDecoration: 'none' }}>Madrepora</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '48px' }}>Species</span> Madrepora oculata
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "1.2rem", textAlign: 'left', mb: 3 }}>
                                Madrepora oculata, or zigzag coral, is found in deep waters around Sri Lanka, inhabiting depths of 80 to 1500 meters in the Indian Ocean. 
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "1.2rem", textAlign: 'left', mb: 3 }}>
                                This stony coral contributes to the biodiversity of deep-sea environments, providing essential habitat for various marine species. 
                                In Sri Lankan waters, it is part of the complex ecosystem of cold-water coral reefs. 
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "1.2rem", textAlign: 'left', mb: 10 }}>
                                Conservation efforts are important to protect these deep-sea habitats from threats like deep-sea fishing and climate change, 
                                ensuring the survival of this and other deep-sea coral species.
                                </Typography>
                            </Grid>
                        </Grid>



                        <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
                            <Grid item xs={12} sm={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant="body1" sx={{ fontSize: "1.3rem", textAlign: 'left', mb: 5 }}>
                                Polymastia, a genus of sponge rather than coral, can be found in Sri Lankan waters. 
                                These marine sponges inhabit various depths, including shallow coastal regions and deeper waters.
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "1.3rem", textAlign: 'left', mb: 5 }}>
                                In Sri Lanka, Polymastia species contribute to the marine ecosystem by providing habitat and shelter
                                for small marine organisms. They play a role in the biodiversity of coral reefs and marine habitats, 
                                though they are less studied compared to corals.
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "1.3rem", textAlign: 'left', mb: 5 }}>
                                Conservation of their habitat is crucial for maintaining the overall health of marine ecosystems in the region.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            </Grid>
                            <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={polymastia} alt="Polymastia" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', mt: 1 }}>
                                POLYMASTIA
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Facts



