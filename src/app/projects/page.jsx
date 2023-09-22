import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ProjectList from "./ProjectList";
import BlackContainer from "../components/BlackContainer";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <Layout>
      <Navbar />
      <BlackContainer>
        <ProjectList />
      </BlackContainer>
      <Footer />
    </Layout>
  );
};

export default Projects;
