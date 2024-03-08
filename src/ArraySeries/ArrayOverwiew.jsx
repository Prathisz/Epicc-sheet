import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
import { ListItemButton,ListItemIcon,List } from '@mui/material';
import React from 'react';
import {Typography} from '@mui/material'

export default function ArrayOverviewBar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ bgcolor: 'background.paper' }}
    >
     
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="
        Array Series Overview" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="" />
            Given below is the best-structured path to learn Arrays with the best video tutorials, and at the same time practice problems which are asked in top tech giants like Google, Amazon, Facebook, etc, and startups like Swiggy, Zomato, Paytm, and others
          </ListItemButton>
        </List>
      </Collapse>
      {/* <h5 style={{display:'flex',justifyContent:'center', margin:'50px'}}>Note: The Series doesn’t focus on any specific programming language. Instead, it emphasizes logic and uses pseudocode. The first two basic videos might use C++, but for Java tutorials, you can watch other YouTube videos. When tackling core problems of data structures and algorithms (DSA), the Series uses pseudocode that isn’t tied to any particular programming language. However, you can find code examples in your preferred language in the notes and articles provided.</h5> */}
    </List>
  );
}