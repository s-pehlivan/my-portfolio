import React from "react";
import Navbar from "../components/Navbar";
import BlackContainer from "../components/BlackContainer";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Intro from "./Intro";
import Skills from "./Skills";

const About = () => {
  return (
    <Layout>
      <Navbar />
      <BlackContainer>
        <Intro />
        <Skills />
      </BlackContainer>
      <Footer />
    </Layout>
  );
};

export default About;
