import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'
import { auto, left } from '@popperjs/core'
import Image1 from "../Images/coral14.jpg"
import Image2 from "../Images/images29.jpg"

function MoreSeaFacts() {
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
                            SeaFACTS
                        </Typography>
                        <Typography variant="h6" component="h3" sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '5%',
                            color: 'white',
                            textAlign: left
                        }}>
                            Worldwide, coral reefs are in danger because of a number of issues,
                            most especially issues such as climate change and sea water pollution. This issue affects Sri Lanka as well
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, padding: 3 }}>
                        <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%", mb: 3 }}>
                            <img src={Image1} alt="Coral Reefs" style={{ width: '100%', height: '30vh', objectFit: 'cover' }} />
                        </Grid>
                        <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
                            <Typography sx={{ fontSize: "2.1rem", fontWeight: "bold", fontFamily: 'Georgia' }}>
                                What are The Main Threats To Coral Reefs?
                            </Typography>
                        </Grid>
                        <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
                            <Typography variant="body1" sx={{ fontSize: "1.1rem", textAlign: left, mb: 2 }}>
                                Coral reefs are threatened by both local and global threats,
                                including overfishing; sediment, nutrient and marine pollution,
                                and increasing ocean warming and acidification.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: "1.1rem", textAlign: left, mb: 5 }}>
                                Overfishing is the most pervasive local threat to coral reefs.
                                It can alter the ecological balance on the reef through removing herbivorous
                                fish that control the macroalgae growing on coral. Sedimentation from land
                                clearing also poses a major threat, as sediments within the water column can
                                bury the corals and reduce the amount of sunlight that reaches the zooxanthellae,
                                therefore limiting their access to nutrients from photosynthesis. Additionally,
                                nutrient pollution from agriculture and sewage can increase nutrient levels that promote
                                algal cover at the expense of corals. Ships can damage reefs with anchors or chains,
                                discharge pollutants or introduce invasive species that can disrupt the ecosystem.
                            </Typography>
                        </Grid>
                        <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
                            <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem', mt: 1 , mb:auto }}>
                                What is the Outlook for 
                                Coral Reefs?
                                </Typography>
                                <img src={Image2} alt="Coral Image 1" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
                                <Typography sx={{ fontSize: '1.2rem', mt: 1 }}>
                                Globally, ocean warming due to climate change is a rapidly growing threat. 
                                The zooxanthellae within corals’ tissues are sensitive to ocean temperature, 
                                and ocean warming can cause the corals to expel their colorful algae — a process 
                                known as “coral bleaching.” This leaves behind the appearance of a bright white skeleton
                                and deprives the polyps of an important source of nutrition. The corals eventually die 
                                if the symbiotic algae don’t return, if there is inadequate time between bleaching for 
                                corals to recover or if other threats impede their recovery.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                            </Grid>
                            <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem', mt: 1, mb:auto }}>
                                What Must Be Done to Ensure a Future for Coral Reefs?
                                </Typography>
                                <img src={Image2} alt="Coral Image 1" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
                                <Typography sx={{ fontSize: '1.2rem', mt: 1 }}>
                                Globally, ocean warming due to climate change is a rapidly growing threat. 
                                The zooxanthellae within corals’ tissues are sensitive to ocean temperature, 
                                and ocean warming can cause the corals to expel their colorful algae — a process 
                                known as “coral bleaching.” This leaves behind the appearance of a bright white skeleton
                                and deprives the polyps of an important source of nutrition. The corals eventually die 
                                if the symbiotic algae don’t return, if there is inadequate time between bleaching for 
                                corals to recover or if other threats impede their recovery.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
                            <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem', mt: 1 , mb:auto}}>
                                UNSUSTAINABLE TOURISM
                                </Typography>
                                <img src={Image2} alt="Coral Image 1" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
                                <Typography sx={{ fontSize: '1.2rem', mt: 1 }}>
                                Globally, ocean warming due to climate change is a rapidly growing threat. 
                                The zooxanthellae within corals’ tissues are sensitive to ocean temperature, 
                                and ocean warming can cause the corals to expel their colorful algae — a process 
                                known as “coral bleaching.” This leaves behind the appearance of a bright white skeleton
                                and deprives the polyps of an important source of nutrition. The corals eventually die 
                                if the symbiotic algae don’t return, if there is inadequate time between bleaching for 
                                corals to recover or if other threats impede their recovery.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                            </Grid>
                            <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem', mt: 1 , mb:auto}}>
                                UNSUSTAINABLE TOURISM
                                </Typography>
                                <img src={Image2} alt="Coral Image 1" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
                                <Typography sx={{ fontSize: '1.2rem', mt: 1 }}>
                                Globally, ocean warming due to climate change is a rapidly growing threat. 
                                The zooxanthellae within corals’ tissues are sensitive to ocean temperature, 
                                and ocean warming can cause the corals to expel their colorful algae — a process 
                                known as “coral bleaching.” This leaves behind the appearance of a bright white skeleton
                                and deprives the polyps of an important source of nutrition. The corals eventually die 
                                if the symbiotic algae don’t return, if there is inadequate time between bleaching for 
                                corals to recover or if other threats impede their recovery.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default MoreSeaFacts