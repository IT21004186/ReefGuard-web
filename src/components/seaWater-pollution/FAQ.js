import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { left } from '@popperjs/core';

const FAQ = ({ question, answer }) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{textAlign:left}}>{answer}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default FAQ;
