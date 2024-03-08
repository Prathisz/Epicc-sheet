import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
import { ListItemButton,ListItemIcon,List } from '@mui/material';
import React from 'react';
import {Typography} from '@mui/material'

export default function OverviewBeg() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ bgcolor: 'background.paper', width:'1000px' }}
    >
     
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="
        OVERVIEW" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="" />
            This course is made for people who want to learn DSA from A to Z for free in a well-organized and structured manner. The lecture quality is better than what you get in paid courses, the only thing we don’t provide is doubt support, but trust me our YouTube video comments resolve that as well, we have a wonderful community of 250K+ people who engage in all of the videos.
          </ListItemButton>
        </List>
      </Collapse>
      <img src='https://cdn.atulhost.com/wp-content/uploads/2023/03/code.jpg' style={{width:'700px',marginLeft:'100px',marginTop:'10px'}}></img>
      <h5 style={{display:'flex',justifyContent:'center', margin:'50px'}}>Note: The Series doesn’t focus on any specific programming language. Instead, it emphasizes logic and uses pseudocode. The first two basic videos might use C++, but for Java tutorials, you can watch other YouTube videos. When tackling core problems of data structures and algorithms (DSA), the Series uses pseudocode that isn’t tied to any particular programming language. However, you can find code examples in your preferred language in the notes and articles provided.</h5>
    </List>
  );
}