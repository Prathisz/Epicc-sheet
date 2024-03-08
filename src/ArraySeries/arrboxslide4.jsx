import React, { useState } from 'react';
import { ListItemButton, ListItemIcon, ListItemText, List, Collapse, Box } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import '../sdecom/boxoverview/boxslideprogress.css';
import Arrfinall from './Arrfinal2';
import Arrfinalll from './Arrfinal3';
import Arrfinallll from './Arrfinal4';
export default function ArrayBox4() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ bgcolor: 'background.paper',width:'950px',border:'1px solid',marginLeft:'50px'}}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon />
        <ListItemText primary="Part 4:Hard" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon />
            <ListItemText primary="" />
            <Box sx={{ marginRight: '100px' }}>
             <Arrfinallll/>
            </Box>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
