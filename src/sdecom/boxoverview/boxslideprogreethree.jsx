import React, { useState } from 'react';
import { ListItemButton, ListItemIcon, ListItemText, List, Collapse, Box } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './boxslideprogress.css'
import Finalll from '../deepak/finalthree';
export default function BoxOverviewwiththree() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ bgcolor: 'background.paper',width:'950px',border:'1px solid',marginLeft:'50px'}}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon />
        <ListItemText primary="MATRIX" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon />
            <ListItemText primary="" />
            <Box sx={{ marginRight: '100px' }}>
              <Finalll/>
            </Box>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
