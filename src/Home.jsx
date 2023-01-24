import React from "react";
import Common from "./Common";
import { NavLink } from "react-router-dom";
import web from "../src/Images/backimage.webp";

const Home = () => {
  return (
    <>
      <Common
        name="Become A IndustryReady with"
        imgsrc={web}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
