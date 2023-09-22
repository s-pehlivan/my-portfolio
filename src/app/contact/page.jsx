import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import BlackContainer from "../components/BlackContainer";
import Footer from "../components/Footer";
import ContactContainer from "./ContactContainer";
const Contact = () => {
  return (
    <Layout>
      <Navbar />
      <div className="mt-56 mb-32 sm:mb-12">
        <BlackContainer>
          <ContactContainer />
        </BlackContainer>
      </div>
      <Footer />
    </Layout>
  );
};

export default Contact;
