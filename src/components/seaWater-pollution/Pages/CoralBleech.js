import React from 'react';
import Image1 from "../Images/coral4.jpg";
import Image2 from "../Images/coral4.jpg";
import Image3 from "../Images/coral5.jpg";
import { Box, Typography, Container, Grid } from '@mui/material';
// import Sidebar from './Sidebar';
import BleachCard from '../BleachCard';
import WaterDropIcon from '@mui/icons-material/WaterDropOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import FAQ from '../FAQ';
import YearCard from '../YearCard';
import { left } from '@popperjs/core';


function CoralBleech() {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Container maxWidth="xl" disableGutters>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
          {/* First row with image and text */}
          <Box sx={{ position: 'relative', width: '100%', height: '30vh', overflow: 'hidden' }}>
            <img src={Image1} alt="Coral Reefs" style={{ width: '100%', height: '30vh', objectFit: 'cover' }} />
            <Typography variant="h3" component="h1" sx={{
              position: 'absolute',
              top: '20%',
              left: '5%',
              color: 'white',
            }}>
              Coral Bleaching
            </Typography>
            <Typography variant="h6" component="h3" sx={{
              position: 'absolute',
              top: '50%',
              left: '5%',
              color: 'white',
            }}>
              Everything You Need to Know About Coral Bleaching - And How We Can Stop It
            </Typography>
          </Box>

          <Box sx={{ flex: 1, padding: 3 }}>
            <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
              <Typography sx={{ fontSize: "2.1rem", fontWeight: "bold", fontFamily: 'Georgia' }}>
                Facts about Coral Bleaching
              </Typography>
            </Grid>
            <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
              <Grid item xs={12} sm={3} sx={{ display: 'flex' }}>
                <BleachCard
                  icon={<WaterDropIcon sx={{ fontSize: '3rem' }} />}
                  description="Rising ocean temperatures caused by climate change is the primary 
                                cause of coral bleaching."
                />
              </Grid>
              <Grid item xs={12} sm={3} sx={{ display: 'flex' }}>
                <BleachCard
                  icon={<SpeedOutlinedIcon sx={{ fontSize: '3rem' }} />}
                  description="A temperature increase of just one degree Celsius for only four weeks 
                              can trigger bleaching."
                />
              </Grid>
              <Grid item xs={12} sm={3} sx={{ display: 'flex' }}>
                <BleachCard
                  icon={<AcUnitOutlinedIcon sx={{ fontSize: '3rem' }} />}
                  description="During bleaching corals become transparent, revealing their white skeletons."
                />
              </Grid>
              <Grid item xs={12} sm={3} sx={{ display: 'flex' }}>
                <BleachCard
                  icon={<BarChartOutlinedIcon sx={{ fontSize: '3rem' }} />}
                  description="Changes in water quality, increased sun exposure and extreme low tides 
                              can also cause corals to bleach."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
              <Typography sx={{ fontSize: "2.1rem", fontWeight: "bold", fontFamily: 'Georgia' }}>
                Coral Bleaching FAQs
              </Typography>
            </Grid>
            <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
              <FAQ
                question="What is coral?"
                answer="A relative of jellyfish and sea anemones, corals are invertebrates that 
                    belong to a large group of animals called Cnidaria. They are known as 
                    colonial organisms, which means many individuals live and grow while 
                    connected to one another.

                    Each individual coral is made of a polyp – a clear, tube-shaped 
                    structure attached to a reef at one end and open at the other. 
                    The open end has a mouth that is surrounded by a ring of tentacles.

                    Hard corals extract calcium from seawater to make limestone outer 
                    skeletons, which form coral reefs. Soft corals tend to be feathery in 
                    appearance such as sea fans and sea feathers."
              />
            </Grid>
            <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
              <FAQ question="What is zooxanthellae?"
                answer="Corals get most of their bright colours from microscopic algae that 
                    grows inside the polyps’ tissues. This algae, called zooxanthellae 
                    (pronounced zo-UH-zan-thuh-lay), helps corals by removing waste and 
                    using it to produce food in a process known as photosynthesis." />
            </Grid>
            <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
              <FAQ question="What is Sea Water Pollution?"
                answer="When corals are stressed, they expel the zooxanthellae that live inside 
                    their tissues. Without the algae to provide colour, corals appear 
                    transparent and reveal their white skeletons. This is called coral 
                    bleaching. Bleached corals are not dead, but are more at risk of 
                    starvation and disease."/>
            </Grid>
            <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
              <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={Image2} alt="Coral Image 1" style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} />
                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', mt: 1 }}>
                  Coral Image 1
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={Image3} alt="Coral Image 2" style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} />
                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', mt: 1 }}>
                  Coral Image 2
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ my: 1, width: "90%", mx: "3%" }}>
              <Typography sx={{ fontSize: "2.1rem", fontWeight: "bold", fontFamily: 'Georgia' }}>
                Mass coral bleaching events
              </Typography>
            </Grid>
            <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>

              <Grid item xs={12} sx={{ display: 'flex' }}>
                <Typography sx={{ fontSize: "1.1rem", fontFamily: 'Georgia', textAlign: 'left', width: '100%' }}>
                  The past two decades have seen several widespread coral bleaching events
                  on our Great Barrier Reef, with four mass bleaching events in the last
                  seven years.
                </Typography>
              </Grid>


            </Grid>
            <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
              <Grid item xs={12} sm={8} sx={{ display: 'flex' }}>
                <YearCard
                  backgroundColor="linear-gradient(to top, #D14545, #FFD045)"
                  year="2024"
                  description="In March 2024, the fifth mass bleaching event on the Great Barrier Reef 
                            was confirmed. It is part of the 4th global bleaching event, which began 
                            in 2023 in the northern hemisphere. The event has occurred during an 
                            El Niño year and followed the hottest year on record."
                />
              </Grid>
              <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
                <YearCard
                  backgroundColor="linear-gradient(to top, #ffde59, #fff7a5)"
                  year="2022"
                  description="Coral bleaching was observed along the length of the Reef, with the 
                            Northern and Central regions experiencing extreme bleaching. In the 
                            South, bleaching was mostly minor. This mass bleaching event was 
                            particularly concerning because it occurred during a La Niña summer, 
                            which typically brings cooler, wetter conditions."
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default CoralBleech;
