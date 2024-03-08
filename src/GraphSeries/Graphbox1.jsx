import React, { useState } from 'react';
import { ListItemButton, ListItemIcon, ListItemText, List, Collapse, Box } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import ProgressBar from './ProgressBar'; // Update the path based on your file structure
import '../sdecom/boxoverview/boxslideprogress.css';
// import ProgressApp from '../progressbar/ch';
// import Final from '../deepak/final';
import Gfinal from './Graphfinal';
export default function Gbox1() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ bgcolor: 'background.paper',width:'950px',border:'1px solid',marginLeft:'50px' }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon />
        <ListItemText primary="Part 1
: Introduction to Graph" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon />
            <ListItemText primary="" />
            <Box sx={{ marginRight: '100px' }}>
              {/* <ProgressBar /> */}
              <Gfinal/>
            </Box>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
