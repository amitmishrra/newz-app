import './App.css';
import React from 'react';
import News from "./Components/NewsComponent/News";
import { BrowserRouter, Routes,Route, Router, NavLink, Link } from "react-router-dom";
import NavLinks from './Components/NavLinks/NavLinks';
import Navbar from './Components/Navbar/Navbar';
import CommonContainer from './Components/common';

function App(props) {
  return (
   <>
   <BrowserRouter>
        <Routes>
        <Route  exact
                  path="/"
                  element={
                    <CommonContainer>
                      <News category ="general" />
                      </CommonContainer>
                  }
                />
        <Route exact
                  path="/general"
                  element={
                    <CommonContainer><News category="general"/></CommonContainer>
                  }
                />
        <Route exact
                  path="/business"
                  element={
                    <CommonContainer><News category="business" /></CommonContainer>
                  }
                />
        <Route exact
                  path="/entertainment"
                  element={
                    <CommonContainer><News category="entertainment"/></CommonContainer>
                  }
                />
        <Route exact
                  path="/technology"
                  element={
                    <CommonContainer><News category="technology"/></CommonContainer>
                  }
                />
        <Route exact
                  path="/health"
                  element={
                    <CommonContainer><News category="health"/></CommonContainer>
                  }
                />
        <Route exact
                  path="/science"
                  element={
                    <CommonContainer><News category="science"/></CommonContainer>
                  }
                />
        <Route exact
                  path="/sports"
                  element={
                    <CommonContainer><News category="sports"/></CommonContainer>
                  }
                />
        </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
