import React from 'react'
import Image1 from '../Images/images14.jpg'
import { Box, Grid, Typography  } from '@mui/material'
// import AllCoral from '../Component/AllCoral'
import HealthForm from '../HealthForm'

function Sea_03() {
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
                            <Typography variant="body1" sx={{ fontSize: '1.6rem', mt: 1, fontWeight: 'bold' ,  fontStyle: 'italic' }}>
                            Chemical Contaminants
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%', textAlign: 'left', mt: 1 }}>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem' ,fontFamily: "'Playfair Display', serif" }}>
                            Industrial waste, heavy metals, and hazardous chemicals like mercury and lead often make their way into seawater through improper disposal or accidental spills. These contaminants poison marine life, causing reproductive issues and leading to the decline of many species. Chemical pollutants can accumulate in the food chain, affecting not only marine organisms but also humans who consume seafood. This type of pollution is difficult to reverse, and its long-term effects can be catastrophic for biodiversity.
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

export default Sea_03