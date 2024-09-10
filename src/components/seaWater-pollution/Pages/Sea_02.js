import React from 'react'
import Image1 from '../Images/images29.jpg'
import { Box, Grid, Typography  } from '@mui/material'
import HealthForm from '../HealthForm'


function Sea_02() {
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ width: '100%', margin: 'auto', height: '100%' }}>
                <Grid container spacing={0} sx={{ mt: 5, width: "94%", mx: "3%" }}>
                    <Grid item xs={12} sm={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Image1} alt="Coral Image 1" style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} />
                    </Grid>
                    <Grid item xs={12} sm={1} sx={{ display: 'flex', justifyContent: 'center' }}>

                    </Grid>
                    <Grid item xs={12} sm={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', textAlign: 'left' }}>
                            <Typography variant="body1" sx={{ fontSize: '1.6rem', mt: 1, fontWeight: 'bold',  fontStyle: 'italic' }}>
                            Plastic Pollution
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%', textAlign: 'left', mt: 1 }}>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem' ,fontFamily: "'Playfair Display', serif" }}>
                            Plastic pollution has become a growing concern, especially in the form of microplastics, which are tiny plastic fragments that are ingested by marine organisms. Larger pieces of plastic, like bottles and fishing nets, entangle wildlife and break down into smaller particles over time. These plastics not only disrupt marine ecosystems but can also enter the human food chain through seafood consumption. With millions of tons of plastic entering the ocean each year, this type of pollution has a lasting environmental impact.
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container spacing={5} sx={{ my: 5, width: "94%", mx: "3%" }}>
                    {/* <HealthForm /> */}
                </Grid>
            </Box>
        </Box>
    )
}

export default Sea_02