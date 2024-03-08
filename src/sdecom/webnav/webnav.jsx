import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, FormControl, InputLabel, Select, MenuItem, ThemeProvider } from '@mui/material';
import { navtheme } from './themenav';
// import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { Link } from 'react-router-dom';
import './webnav.css';
import {motion} from 'framer-motion';

const Navbarr = () => {
  return (
    <ThemeProvider theme={navtheme}>
    <AppBar position="static" className="navbar-container" >
      <Container>
        <Toolbar className="toolbar" sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          

        <FormControl sx={{ marginRight: 2 , width:130 }}>
            <InputLabel id="select-3-label">Level</InputLabel>
            <Select labelId="select-3-label" id="select-3">
           <Link to={"/"}> <MenuItem value="">None</MenuItem> </Link>
         <Link to={"/beg"}>  <MenuItem value="">Beginner</MenuItem> </Link>
     <Link to={"/int"}> <MenuItem value={1}>Intermediate</MenuItem></Link>

            <Link to={"/advv"}> <MenuItem value={2}>Advanced</MenuItem></Link> 
            </Select>
          </FormControl>

         

          {/* Second Select */}
          <FormControl sx={{ marginRight: 2  , width:133,textDecoration:'none'}}>
            <InputLabel id="select-2-label">DSA playlists</InputLabel>
            <Select labelId="select-2-label" id="select-2">
          <Link to={"/"}> <MenuItem value="">None</MenuItem></Link> 
             <Link to={"/Array"}> <MenuItem value={1}>Array Series</MenuItem></Link>
             <Link to={"/Tree"}> <MenuItem value={2}>Tree Series</MenuItem></Link>
            <Link to={"/Graph"}> <MenuItem value={3}>Graph Series</MenuItem> </Link> 
            </Select>
          </FormControl>

          {/* Third Select */}
          <FormControl sx={{ marginRight: 2 , width:130 }}>
            <InputLabel id="select-3-label">Prep Sheet</InputLabel>
            <Select labelId="select-3-label" id="select-3">
          <Link to={"/"}> <MenuItem value="">None</MenuItem></Link> 
             <Link to={"/Road"}><MenuItem value={1}>RoadMap</MenuItem></Link> 
              {/* <MenuItem value={2}>Need to Improve</MenuItem> */}
            </Select>
          </FormControl>

          {/* Fourth Select */}
          <Link to="/save">
              <motion.div
                initial={{ opacity: 0, translateY: -10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className="fade-in-down"
              >
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="save"
                  onClick={() => {
                    // Add your save functionality here
                    console.log('clicked');
                  }}
                >
                  <BookmarkAddIcon />
                </IconButton>
              </motion.div>
            </Link>
         
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};

export default Navbarr;
