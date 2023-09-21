import React from "react";
import Navbar from "../components/Navbar";
import AboutContainer from "./AboutContainer";
import Footer from "../components/Footer";

const About = () => {
  return (
    <main className="min-h-screen container mx-auto">
      <Navbar />
      <div className="h-full p-5 flex flex-col justify-center">
        <AboutContainer />
      </div>
      <Footer />
    </main>
  );
};

export default About;
