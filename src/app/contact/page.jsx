import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import BlackContainer from "../components/BlackContainer";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <Layout>
      <Navbar />
      <BlackContainer>
        <div>Contact Me</div>
      </BlackContainer>
      <Footer />
    </Layout>
  );
};

export default Contact;
