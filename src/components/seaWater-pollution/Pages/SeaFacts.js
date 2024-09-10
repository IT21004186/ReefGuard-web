import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'
import images20 from "../Images/images20.jpg"
import images24 from "../Images/images24.jpg"
import newImage from "../Images/3.jpg"

function SeaFacts() {
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
                            SeaFacts
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
                                

                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', mt: 1, fontStyle: 'italic' }}>
                                    SEAWATER POLLUTION 
                                </Typography>

                                <img src={images20} alt="images20" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />

                            </Grid>

                            <Grid item xs={12} sm={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant="body1" sx={{ fontSize: "1.0rem", textAlign: 'left', mb: 5 }}>
                                    {/* <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '40px' }}>Kingdom</span><a href="#" style={{ color: 'blue', textDecoration: 'none', fontStyle: 'italic' }}> Animalia</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '52px' }}>Phylum</span> <a href="#" style={{ color: 'blue', textDecoration: 'none', fontStyle: 'italic' }}> Cnidaria</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '71px' }}>Class</span> <a href="#" style={{ color: 'blue', textDecoration: 'none' , fontStyle: 'italic' }}>Hexacorallia</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '71px' }}>Order</span> <a href="#" style={{ color: 'blue', textDecoration: 'none', fontStyle: 'italic' }}>Scleractinia</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '60px' }}>Family</span> <a href="#" style={{ color: 'blue', textDecoration: 'none' , fontStyle: 'italic'}}>Oculinidae</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '63px' }}>Genus</span> <a href="#" style={{ color: 'blue', textDecoration: 'none', fontStyle: 'italic' }}>Madrepora</a><br />
                                    <span style={{ color: 'gray', fontWeight: 'bold' , marginRight: '48px' }}>Species</span> Madrepora oculata */}
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "1.1rem", textAlign: 'left', mb: 3 }}>
                                Sea water pollution is a growing environmental concern in Sri Lanka, an island nation bordered by the Indian Ocean. With its rich biodiversity, the coastal waters of Sri Lanka are home to a wide range of marine species and ecosystems, including coral reefs, mangroves, and seagrass beds. However, the rapid increase in pollution due to human activities is threatening these vital ecosystems. Industrial waste, agricultural runoff, untreated sewage, and plastic debris are some of the primary pollutants entering the ocean, disrupting the balance of marine life. 
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "1.1rem", textAlign: 'left', mb: 3 }}>
                                The influx of industrial waste into the sea is a major contributor to water pollution. Factories located along the coast often discharge harmful chemicals, heavy metals, and toxic waste directly into the ocean without proper treatment. These pollutants contaminate the water and accumulate in marine organisms, leading to long-term environmental and health hazards. Heavy metals such as mercury and lead can affect the nervous system of marine species, disrupting their reproductive cycles and threatening the food chain. 
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "1.1rem", textAlign: 'left', mb: 10 }}>
                                Agricultural runoff is another significant source of pollution in Sri Lankan waters. Fertilizers and pesticides used in farming practices are carried by rivers and streams into the ocean, causing nutrient pollution. This excess nutrient load leads to the growth of harmful algal blooms, which deplete oxygen levels in the water, creating dead zones where marine life struggles to survive. The overgrowth of algae can also block sunlight from reaching coral reefs, inhibiting photosynthesis and causing widespread damage to these delicate ecosystems.
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3} sx={{ my: 1, width: "94%", mx: "3%" }}>
                            <Grid item xs={12} sm={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant="body1" sx={{ fontSize: "1.1rem", textAlign: 'left', mb: 5 }}>
                                Plastic pollution has become an increasingly pressing issue in Sri Lanka’s coastal regions. The improper disposal of plastic waste, such as bags, bottles, and fishing nets, results in massive amounts of debris being washed into the sea. Plastics not only take hundreds of years to degrade but also break down into smaller microplastics, which are ingested by marine organisms. This ingestion can cause physical harm to marine species and introduce toxic substances into the food chain, affecting both wildlife and humans who rely on seafood.
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "1.1rem", textAlign: 'left', mb: 5 }}>
                                The consequences of sea water pollution extend beyond environmental damage, impacting the livelihoods of coastal communities. Many of these communities depend on fishing and tourism for their economic well-being. Polluted waters reduce fish populations and destroy marine habitats, leading to a decline in fish catches and threatening food security. Additionally, polluted beaches and damaged ecosystems deter tourists, resulting in economic losses for businesses that rely on eco-tourism and beach resorts.
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "1.1rem", textAlign: 'left', mb: 5 }}>
                                Efforts to mitigate sea water pollution are crucial to preserving Sri Lanka's marine environment. Conservation initiatives such as stricter regulations on waste disposal, improved sewage treatment systems, and sustainable agricultural practices can help reduce the amount of pollution entering the ocean. Public awareness campaigns and community-driven clean-up activities are also essential in promoting responsible waste management. By taking collective action, Sri Lanka can safeguard its marine biodiversity and ensure a healthy and sustainable future for its coastal ecosystems and the people who depend on them.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            </Grid>
                            <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={images24} alt="images24" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', mt: 1 , fontStyle: 'italic' }}>
                                {/* POLYMASTIA */}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default SeaFacts



