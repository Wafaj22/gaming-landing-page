import React from "react";
import { useState } from "react";
import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  Services,
} from "../sections";

const Home = () => {
  const [darkMode, setDarkToggle] = useState(true);

  const toggleMode = () => {
    setDarkToggle(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} transition-colors`}>
      <div className="dark:bg-primary-black overflow-hidden">
        <Navbar darkMode={darkMode} toggleMode={toggleMode} />
        <Hero />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <div className="relative">
          <Services />
          <div className="gradient-04 z-0" />
          <Feedback />
        </div>
        <div className="relative">
          <GetStarted />
          <div className="gradient-04 z-0" />
          <Insights />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
