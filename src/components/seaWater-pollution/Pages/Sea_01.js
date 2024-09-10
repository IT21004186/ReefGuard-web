import React from 'react'
import Image1 from '../Images/images28.jpg'
import { Box, Grid, Typography  } from '@mui/material'
import HealthForm from '../HealthForm'


function Sea_01() {
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
                            Oil Spills
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%', textAlign: 'left', mt: 2 }}>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem' ,fontFamily: "'Playfair Display', serif" }}>
                            Oil spills occur when large quantities of oil are accidentally released into the ocean, often due to tanker accidents, offshore drilling mishaps, or pipeline leaks. These spills are devastating to marine life as oil coats the fur or feathers of sea animals, reducing their insulation abilities and leading to hypothermia or death. Oil slicks on the water's surface also block sunlight from reaching marine plants, which disrupts photosynthesis. Cleanup efforts are often slow and complex, making oil spills one of the most harmful types of seawater pollution.
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

export default Sea_01