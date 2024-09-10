import React from 'react'
import Image1 from '../Images/images27.jpg'
import { Box, Grid, Typography  } from '@mui/material'
import HealthForm from '../HealthForm'

function Sea_04() {
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
                            Agricultural Runoff
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%', textAlign: 'left', mt: 1 }}>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem' ,fontFamily: "'Playfair Display', serif" }}>
                            Agricultural runoff, which contains pesticides, fertilizers, and animal waste, is another major contributor to seawater pollution. When rain washes these chemicals into rivers and oceans, it causes nutrient pollution, leading to algae blooms and dead zones where oxygen levels are too low to support life. These blooms can also release toxins that are harmful to both marine life and humans. Managing agricultural practices and reducing the use of harmful chemicals are essential to minimizing this form of pollution.
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container spacing={0} sx={{ mt: 5, width: "94%", mx: "3%" }}>
                    {/* <HealthForm /> */}
                </Grid>
            </Box>
        </Box>
    )
}

export default Sea_04