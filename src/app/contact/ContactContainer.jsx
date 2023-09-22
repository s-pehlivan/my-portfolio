import React from "react";
import ContactInfo from "./ContactInfo";
import SocialMedia from "../components/SocialMedia";

const ContactContainer = () => {
  return (
    <div className="info grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="contact-content mb-8">
        <h1 className="text-3xl mb-5 text-center md:text-start">Contact Me</h1>
        <p className="text-center sm:text-start">
          I am always looking for new opportunities. You can always contact me.
          If you have any question, do not hesitate to ask. I will do my best to
          get back to you.
        </p>
      </div>
      <div className="links">
        <div className="mb-5">
          <h2 className="text-2xl mb-3 text-center sm:text-start">
            You Can Find Me Here
          </h2>
          <ContactInfo />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl mb-3">My Socials</h2>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
