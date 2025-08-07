import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Recommended from "../components/Recommended";
import Upcoming from "../components/Upcoming";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recommended />
      <Upcoming />
    </div>
  );
};

export default Home;
  