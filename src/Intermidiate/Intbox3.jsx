import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
import { ListItemButton,ListItemIcon,List, Box } from '@mui/material';
import React from 'react';
// import YourTableComponent from '../../commanage/YourTableComponent';
// import Begi from './Beg';
// import Int2 from './int2';
import Int3 from './int3';
import YourTableComponent from '../commanage/YourTableComponent';


export default function IntBox3() {
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
        Intermidiate Level 3" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="" />
             <Box sx={{marginRight:'100px'}}>
       <Int3/>
           </Box>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}





