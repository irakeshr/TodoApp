import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./mycomponent/header/Header";
// import { render } from "@testing-library/react";
import Home from "./mycomponent/home/Home";
import About from "./mycomponent/about/About";
import Editpage from "./mycomponent/editpage/Editpage";
import Footer from "./mycomponent/footer/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes> 
        <Route path="/edit" Component={Editpage} />
          <Route exact path="/" Component={Home}/>
          <Route path="/about" Component={About} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
