import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
import { ListItemButton,ListItemIcon,List, Box } from '@mui/material';
import React from 'react';
// import YourTableComponent from '../../commanage/YourTableComponent';
// import Begi from './Beg';
import YourTableComponent from '../commanage/YourTableComponent';
import Int from './int';

export default function IntBox() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  

  return (
    <List
      sx={{ bgcolor: 'background.paper', color:"black" }}
    >
     
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="
        Intermidiate Level 1" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="" />
             <Box sx={{marginRight:'100px'}}>
       <Int/>
           </Box>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}





