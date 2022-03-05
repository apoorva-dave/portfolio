import React from "react";
import Thumbnail from './Thumbnail.js';
import Header from './Header.js';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import './App.css'; 

function Profiles(props) {
  return (
    <div>
      <Header />
      <Thumbnail
        link="https://twitter.com/apoorva_dave"
        title="Twitter Profile"
      />
      <Thumbnail
        link="https://github.com/apoorva-dave"
        title="Github Profile"
      />
      <Thumbnail
        link="https://www.linkedin.com/in/apoorva-dave/"
        title="LinkedIn Profile"
      />
      <Thumbnail
        link="https://medium.com/@apoorvadave1995"
        title="Medium Profile"
      />
      <Thumbnail
        link="https://www.youtube.com/channel/UCaYQbIciTyBFMTRE2Zp81tw"
        title="Youtube Channel"
      />
      <Thumbnail
        link="https://open.spotify.com/user/dqvol40hgkvvasout56whj518?si=lFSZpyNiSBifUUHU1oSscQ&utm_source=copy-link"
        title="Spotfiy Profile"
      />
   </div>
  );
}
 
export default Profiles;