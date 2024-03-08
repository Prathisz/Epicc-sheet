import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
import { ListItemButton,ListItemIcon,List, Box } from '@mui/material';
import React from 'react';
import YourTableComponent from '../../commanage/YourTableComponent';
import Final from '../deepak/final';


export default function BoxOvervieww() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  

  return (
    <List
      sx={{ bgcolor: 'background.paper', color:"red" }}
    >
     
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="
        BASIC SET 1" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="" />
             <Box sx={{marginRight:'100px'}}>
       <Final/>
           </Box>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}





