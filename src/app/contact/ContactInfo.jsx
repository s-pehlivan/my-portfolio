import React from "react";
import { FaEnvelope, FaMapMarker } from "react-icons/fa";
import SocialMedia from "../components/SocialMedia";
const ContactInfo = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-start items-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
        <span className="text-3xl text-[#DB8D76]  border-2 p-2 rounded-full border-[#0669ad]">
          <FaMapMarker />
        </span>
        <span className="text-md sm:text-lg">Bursa, Turkey</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
        <span className="text-3xl text-[#DB8D76]  border-2 p-2 rounded-full border-[#0669ad]">
          <FaEnvelope />
        </span>
        <span className="text-md text-center sm:text-start sm:text-lg break-all">
          fsevde.pehlivan@gmail.com
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
