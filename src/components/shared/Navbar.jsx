import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then((result)=>{
      if (!result) {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "Success!",
          text: "Sign Out Succeeded",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      else {
        Swal.fire({
          position: "bottom-end",
          icon: "error",
          title: "Error!",
          text: "Oops! Something went wrong\n Sign out failed!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(result);
    })
    .catch()

  };

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
        VENUE
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
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-aos="fade-down"
      className="navbar bg-event-secondary/60 pl-0 md:p-4 fixed z-50 md:pl-0"
    >
      <div className="navbar-start">
        <details className="dropdown duration-200 lg:hidden">
          <summary
            className="m-1 btn glass group md:ml-4"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <GiHamburgerMenu className="text-2xl text-white opacity-80 group-hover:text-event-secondary"></GiHamburgerMenu>
          </summary>
          <motion.ul
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="p-2 md:mt-4 my-2 h-screen overflow-hidden shadow menu dropdown-content z-[1] bg-event-secondary/60 w-52"
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
        {user ? (
          <Link onClick={handleSignOut} className=" group" to="/">
            <div className="btn glass text-white opacity-80 group-hover:text-event-secondary">
              SIGN OUT
            </div>
          </Link>
        ) : (
          <div className=" flex gap-2 lg:gap-6">
            <Link className=" group" to="/login">
              <div className="btn glass text-white opacity-80 group-hover:text-event-secondary">
                SIGN IN
              </div>
            </Link>
            <Link className=" group" to="/register">
              <div className="btn glass text-white opacity-80 group-hover:text-event-secondary">
                SIGN UP
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
