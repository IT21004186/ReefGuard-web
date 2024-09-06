import React from 'react'
import Image1 from '../Images/coral3.jpg'
import { Box, Grid, Typography  } from '@mui/material'
import HealthForm from '../HealthForm'


function Coral_01() {
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
                                MADREPORA OCULATA
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%', textAlign: 'left', mt: 2 }}>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem' ,fontFamily: "'Playfair Display', serif" }}>
                            *Madrepora oculata* is a species of stony coral commonly found in deep waters, particularly in the 
                            Indian and Pacific Oceans. It belongs to the family Oculinidae and is known for its branching structure
                            and white to pale pink coloration. This coral species forms complex reef structures, providing habitats
                            or various marine life, and thrives in cold-water environments, often at depths between 200 and 1,000 meters.
                            Despite being a deep-sea coral, *Madrepora oculata* contributes to marine biodiversity and plays a significant 
                            role in the ecosystem.
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container spacing={0} sx={{ mt: 5, width: "94%", mx: "3%" }}>
                    <HealthForm />
                </Grid>
            </Box>
        </Box>
    )
}

export default Coral_01