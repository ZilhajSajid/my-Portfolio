import React from "react";
import Banner from "../Component/Banner";
import AboutMe from "../Component/AboutMe";
import Skills from "../Component/Skills";
import ProjectContainer from "../Component/ProjectContainer";
import Education from "../Component/Education";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <ProjectContainer></ProjectContainer>
      <Education></Education>
    </div>
  );
};

export default Home;
