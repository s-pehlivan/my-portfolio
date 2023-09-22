import React from "react";
import Navbar from "../components/Navbar";
import BlackContainer from "../components/BlackContainer";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import AboutInfo from "./AboutInfo";
const About = () => {
  return (
    <Layout>
      <Navbar />
      <BlackContainer>
        <AboutInfo />
      </BlackContainer>
      <Footer />
    </Layout>
  );
};

export default About;
