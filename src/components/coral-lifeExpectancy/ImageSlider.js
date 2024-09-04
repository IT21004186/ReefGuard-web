import React from 'react';
import Slider from 'react-slick';
import { Box , Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from "./Images/coral1.jpg";
import Image2 from "./Images/coral2.jpg";
import Image3 from "./Images/coral6.jpg";
import Image4 from "./Images/coral8.jpg";


const images = [
    Image1,
    Image2,
    Image3,
    Image4
];

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((url, index) => (
                    <Box key={index} sx={{ position: 'relative', width: '91%', height: '100%' }}>
                        <Box
                            component="img"
                            src={url}
                            alt={`Carousel Image ${index + 1}`}
                            sx={{ width: '91%', height: '400px', objectFit: 'cover' , marginBottom : "5%"}}
                        />
                    </Box>
                ))}
            </Slider>
            <Box
                sx={{
                    position: 'absolute',
                    top: '30%',
                    left: '60%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h2" component="h2"  sx={{ fontFamily: "'Playfair Display', serif",  fontSize: '2.5rem' }} >
                    Coral Life Expectancy & Extinct Level Prediction
                </Typography>
            </Box>
        </div>
    );
}

export default ImageSlider;
