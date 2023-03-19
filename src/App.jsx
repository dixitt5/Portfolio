import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";
import Skils from "./components/Skils";
import Portfolio from "./components/Portfolio"
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skils/>
      <Portfolio/>
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default App;
