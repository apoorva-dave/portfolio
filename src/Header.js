import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

              
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#20222b",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
    fontSize: "x-large"
  },
  menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      fontSize: "x-large",
      color: "#FFFEFE",
      textDecoration: "none"
   },
}));
                     
export default function Header() {
  const { header, logo, menuButton } = useStyles();
                     
  const displayDesktop = () => {
    return (
      <Toolbar>
        {name}
        {getMenuButtons()}
      </Toolbar>
    );
  };
                     
  const name = (
    <Typography variant="h6" component="h1" className={logo}>
      Apoorva Dave |
    </Typography>
  );
                     
  const getMenuButtons = () => {
      return (
        <a className={menuButton}
        	href="https://apoorva-dave.github.io/resume/Resume.pdf"
    	    download
	      >
        <div className='resume'>Resume</div>   
      	</a>
      );
  };
                     
  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}