import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewMore from "./pages/ViewMore/ViewMore";
import MyNavbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/viewMore" element={<ViewMore />} />
      </Routes>
    </>
  );
};

export default App;
