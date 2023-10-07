import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  // active route styling
  const activeLink =
    "text-event-primary font-bold underline decoration-2 underline-offset-4";

  // navbar routes
  const navLinks = (
    <div className="text-white opacity-80 flex flex-col lg:flex-row gap-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : "")}
      >
        HOME
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? activeLink : "")}
      >
        ABOUT US
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? activeLink : "")}
      >
        BLOG
      </NavLink>
      <NavLink
        to="/venue"
        className={({ isActive }) => (isActive ? activeLink : "")}
      >
        Venue
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? activeLink : "")}
      >
        CONTACT US
      </NavLink>
    </div> 
  );

  // menu animation
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      data-aos="fade-down"
      className="navbar bg-event-secondary/60 pl-0 md:p-4 fixed z-50"
    >
      <div className="navbar-start">
        <details className="dropdown duration-200 lg:hidden">
          <summary className="m-1 btn glass group"  onClick={() => setIsOpen(isOpen => !isOpen)} >
            <GiHamburgerMenu className="text-2xl text-white opacity-80 group-hover:text-event-secondary"></GiHamburgerMenu>
          </summary>
          <motion.ul
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="p-2 my-2 h-screen overflow-hidden shadow menu dropdown-content z-[1] bg-event-secondary/60 w-52"
          >
            {navLinks}
          </motion.ul>
        </details>
        <a className="btn btn-ghost text-white opacity-80 normal-case text-xl font-orbitron tracking-widest">
          AZTEC
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex gap-2 lg:gap-6">
        <div className="btn glass group">
          <Link
            className="text-white opacity-80 group-hover:text-event-secondary"
            to="/login"
          >
            SIGN IN
          </Link>
        </div>
        <div className="btn glass group">
          <Link
            className="text-white opacity-80 group-hover:text-event-secondary"
            to="/register"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
