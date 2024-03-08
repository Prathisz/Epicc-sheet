import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
import { ListItemButton,ListItemIcon,List } from '@mui/material';
import React from 'react';
import {Typography} from '@mui/material'

export default function OverviewBar() {
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
            contains very handily crafted and picked top coding interview questions from different topics of Data Structures & Algorithms. These questions are one of the most asked coding interview questions in coding interviews of companies like Google, Amazon, Microsoft, Facebook, Swiggy, Flipkart, etc, and cover almost all of the concepts related to Data Structure & Algorithms.

Key Highlights:
Cover all concepts in limited time that are needed for a DSA interview.
In-depth video solutions covering brute, better, optimal solutions.
Well structured articles/notes for quick revision.
C++, Java, Python and JavaScript code.
Company Tags associated with each program.
Notes section to save your notes for quick revision.
Used by over 2M+ people worldwide in the last 2 years.
          </ListItemButton>
        </List>
      </Collapse>
      <h5 style={{display:'flex',justifyContent:'center', margin:'50px'}}>Note: The Series doesn’t focus on any specific programming language. Instead, it emphasizes logic and uses pseudocode. The first two basic videos might use C++, but for Java tutorials, you can watch other YouTube videos. When tackling core problems of data structures and algorithms (DSA), the Series uses pseudocode that isn’t tied to any particular programming language. However, you can find code examples in your preferred language in the notes and articles provided.</h5>
    </List>
  );
}
