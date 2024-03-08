import "./App.css";
import { Box } from "@mui/material";
import React, { useState } from "react";

import Coursepage from "./commanage/coursepage";
import Navbarr from "./sdecom/webnav/webnav";
import OverviewBar from "./sdecom/Overview/Overview";
import BoxOvervieww from "./sdecom/boxoverview/boxslideeff";
import ProgressApp from "./sdecom/progressbar/ch";
import Sdemain from "./sdecom/sdemain";
import Sdeframe from "./sdecom/sdeframe/sdeframe";
import Sdelayout from "./sdecom/Sdelayout";
import SearchBar from "./Search/searchbar";
import YourComponent from "./Search/searchre";
import BasicAccordion from "./sdecom/sdeframe/Accordiation/accor";
import BoxOverviewwith from "./sdecom/boxoverview/boxslideprogress";
import Final from "./sdecom/deepak/final";
import LandAppp from "./LandingPage/landApp";
import Footer from "./Footer/Footer";
import Faq from "./FAQ/FAQ";
import Quotes from "./Quotes/Quotes";
import ArrExport from "./ArraySeries/ArrExport";
import { DarkModeProvider } from "./Dark/userDarkMode";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import TreeExport from "./TreeSeries/TreeExport";
import GraphExport from "./GraphSeries/GraphExport";
import FNavbar from "./firstnav/Firstnav";
// import LoginForm from "./Login/LoginForm";
import { Login } from "@mui/icons-material";
import Loginf from "./Login/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rmap from "./Roadmap/rmap";
import Roadmaplayout from "./Roadmap/Roadmaplayout";
import RoadExport from "./Roadmap/RoadExport";
import SavaHome from "./Savedata/SavaHome";
import Begi from "./Beginner/Beg";
import BoxBegi from "./Beginner/Box1";
import Beghome from "./Beginner/Beghome";
import BegExport from "./Beginner/BegExport";
import Inter from "./Intermidiate/inter";
import IntExport from "./Intermidiate/IntExport";
import Advhome from "./Advanced/advhome";
import AdvExport from "./Advanced/AdvExport";
import SimpleSlider from "./Intro/Intro";
import Background from "./Intro/Intro";
import CardRow from "./webfront/Popcourse";
import Bgl from "./bg/bgl";
const App = () => {
  
  const Root = () => {
    return (
      <>
      <FNavbar/>
        <Navbarr />
        <Outlet />
        <Faq />
        <Quotes />
        <Footer />
        
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Sdelayout/>,
        },
        {
            path:"/Array",
            element:<ArrExport/>
        },
        {
            path:"/Tree",
            element:<TreeExport/>
        },
        {
          path:"/Graph",
          element:<GraphExport/>
        },
        {
          path:'/Login',
          element:<Loginf/>
        },
        {
          path:'/Road',
          element:<RoadExport/>
        },
        {
          path:'/save',
          element:<SavaHome/>
        },
        {
          path:'/beg',
          element:<BegExport/>
        },
        {
          path:'/int',
          element:<IntExport/>
        },
        {
          path:'/advv',
          element:<AdvExport/>
        }
      ],
    },
  ]);
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  return (
    <>
      <DarkModeProvider>
      <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Box>
      {/* <Bgl/> */}
      </Box>
      </ThemeProvider>
    </DarkModeProvider>
    </>
  );
};

export default App;





