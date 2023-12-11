import React from "react";
import {  Route, Routes } from 'react-router-dom';
import NavBar from "../../component/nav-bar/nav-bar";

function PageRoutes() {
  return (
    <div>
      
  
    <Routes>
      
        <Route path={'/'} element={<div>Home</div>} />
        <Route path={'/feature'} element={<div>about</div>} />
        <Route path={'/pricing'} element={<div>contact</div>} />
        <Route path={'/download'} element={<div>blog</div>} />
        <Route path={'/company'} element={<div>sign-in</div>} />
        <Route path={'/support'} element={<div>sign-in</div>} />
   
      <Route path="*" element={<div>
        Page Not fount
      </div>} />
     
    </Routes>
    <div>
        <NavBar />
    </div>
    </div>
  );
}

export default PageRoutes;
