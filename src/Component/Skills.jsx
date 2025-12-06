import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.jpeg";
import logo3 from "../assets/logo3.jpeg";
import logo4 from "../assets/logo4.jpeg";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.jpeg";
const Skills = () => {
  return (
    <div id="skills" className="pb-[100px]">
      <div className="w-3/5 mx-auto text-center space-y-2 mb-5">
        <Fade delay={200} duration={500} fraction={0.5} distance="0px">
          <p className="text-xl text-sky-400 font-semibold">Skills</p>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            All the skills I've acquired
          </h1>
        </Fade>
      </div>
      <div className="w-10/12 mx-auto  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        <Slide direction="left">
          <div className="bg-linear-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl  group transition-transform duration-300 hover:-translate-y-5">
            <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
              <div className="w-[100px] mx-auto">
                <img className="w-[70px] h-[70px] mx-auto" src={logo1} alt="" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                  HTML
                </p>
                <h1 className="text-center">2025</h1>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left">
          <div className="bg-linear-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl  group transition-transform duration-300 hover:-translate-y-5">
            <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
              <div className="w-[100px] mx-auto">
                <img className="w-[70px] h-[70px] mx-auto" src={logo2} alt="" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                  CSS
                </p>
                <h1 className="text-center">2025</h1>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left">
          <div className="bg-linear-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl  group transition-transform duration-300 hover:-translate-y-5">
            <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
              <div className="w-[100px] mx-auto">
                <img className="w-[70px] h-[70px] mx-auto" src={logo3} alt="" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                  JavaScript
                </p>
                <h1 className="text-center">2025</h1>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left">
          <div className="bg-linear-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl  group transition-transform duration-300 hover:-translate-y-5">
            <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
              <div className="w-[100px] mx-auto">
                <img className="w-[70px] h-[70px] mx-auto" src={logo4} alt="" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                  Daisy UI
                </p>
                <h1 className="text-center">2025</h1>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left">
          <div className="bg-linear-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl  group transition-transform duration-300 hover:-translate-y-5">
            <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
              <div className="w-[100px] mx-auto">
                <img className="w-[70px] h-[70px] mx-auto" src={logo5} alt="" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                  React JS
                </p>
                <h1 className="text-center">2025</h1>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left">
          <div className="bg-linear-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl  group transition-transform duration-300 hover:-translate-y-5">
            <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
              <div className="w-[100px] mx-auto">
                <img className="w-[70px] h-[70px] mx-auto" src={logo6} alt="" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                  Node Js
                </p>
                <h1 className="text-center">2025</h1>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left">
          <div className="bg-linear-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl  group transition-transform duration-300 hover:-translate-y-5">
            <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
              <div className="w-[100px] mx-auto">
                <img className="w-[70px] h-[70px] mx-auto" src={logo7} alt="" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                  Firebase
                </p>
                <h1 className="text-center">2025</h1>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left">
          <div className="bg-linear-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl  group transition-transform duration-300 hover:-translate-y-5">
            <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
              <div className="w-[100px] mx-auto">
                <img className="w-[70px] h-[70px] mx-auto" src={logo8} alt="" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                  MongoDb
                </p>
                <h1 className="text-center">2025</h1>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left">
          <div className="bg-linear-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl  group transition-transform duration-300 hover:-translate-y-5">
            <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
              <div className="w-[100px] mx-auto">
                <img className="w-[70px] h-[70px] mx-auto" src={logo9} alt="" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                  Next JS
                </p>
                <h1 className="text-center">2025</h1>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Skills;
