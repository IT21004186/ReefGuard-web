import React from 'react'
import Image1 from '../Images/coral9.jpg'
import { Box, Grid, Typography  } from '@mui/material'
import HealthForm from '../Component/HealthForm'

function Coral_04() {
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
                            <Typography variant="body1" sx={{ fontSize: '1.6rem', mt: 1, fontWeight: 'bold' }}>
                                Coral 04
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%', textAlign: 'left', mt: 1 }}>
                            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                                Globally, ocean warming due to climate change is a rapidly growing threat.
                                The zooxanthellae within corals’ tissues are sensitive to ocean temperature,
                                and ocean warming can cause the corals to expel their colorful algae — a process
                                known as “coral bleaching.” This leaves behind the appearance of a bright white skeleton
                                and deprives the polyps of an important source of nutrition. The corals eventually die
                                if the symbiotic algae don’t return, if there is inadequate time between bleaching for
                                corals to recover or if other threats impede their recovery.
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

export default Coral_04