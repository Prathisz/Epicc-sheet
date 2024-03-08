import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

export default function BasicAccordion() {
  return (
    <div style={{marginTop:'30px'}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Recent Post</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Link href='https://youtu.be/4stHboFNIbA?si=34kqNB8GBhp9zENL'>Node</Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link href='https://youtu.be/4stHboFNIbA?si=34kqNB8GBhp9zENL'>Matrix</Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link href='https://youtu.be/4stHboFNIbA?si=34kqNB8GBhp9zENL'>Trees</Link>
        </AccordionDetails>
       
       
      </Accordion>
    </div>
  );
}
