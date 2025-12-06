import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { Link } from "react-router";
import nameLogo from "../assets/zilhajSajid.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };
  const link = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a
          onClick={() => handleLinkClick("#about")}
          href="#about"
          className={
            activeLink === "#about"
              ? "bg-gray-900 border-2 border-sky-600 font-bold"
              : "font-bold text-white hover:text-sky-400"
          }
        >
          About
        </a>
      </li>
      <li>
        <a
          onClick={() => handleLinkClick("#projects")}
          href="#projects"
          className={
            activeLink === "#projects"
              ? "bg-gray-900 border-2 border-sky-600 font-bold"
              : "font-bold text-white hover:text-sky-400"
          }
        >
          Projects
        </a>
      </li>
      <li>
        <a
          onClick={() => handleLinkClick("#education")}
          href="#education"
          className={
            activeLink === "#resume"
              ? "bg-gray-900 border-2 border-sky-600 font-bold"
              : "font-bold text-white hover:text-sky-400"
          }
        >
          Education
        </a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <div className="w-[50px] h-[50px]">
          <img className="w-full h-full rounded-full" src={nameLogo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-5">
          <div className="">
            <Link to="https://www.linkedin.com/in/md-zilhaj-un-noor/">
              <FaLinkedin className="text-5xl bg rounded-full p-2 hover:text-white hover:p-1" />
            </Link>
          </div>
          <div>
            <Link to="https://github.com/ZilhajSajid">
              <FaGithub className="text-5xl bg rounded-full p-2 hover:text-white hover:p-1" />
            </Link>
          </div>
          <div>
            <a
              href="/resume.pdf"
              className="flex items-center justify-center text-white border-2 font-bold border-sky-400 rounded-2xl
             px-2 py-1 sm:px-3 sm:py-2
             text-sm sm:text-base
             hover:bg-sky-400 hover:scale-105 transition-all duration-200 ease-in-out"
              target="_blank"
              download="Zilhaj-sajid.pdf"
            >
              {" "}
              <FaDownload className="sm:mr-2" />
              <span className="hidden sm:inline">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
