import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Particle from "./Particle";
import SideNav from "./SideNav";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-[url('https://i.ibb.co/cY7KgYs/8.jpg')] bg-cover bg-center relative">
      <div className="h-full w-full bg-black bg-opacity-50 -z-10"></div>
      <SideNav></SideNav>
      <Link to="Services" spy={true} smooth={true}>
        <motion.span
          className="z-[100] absolute bottom-14 left-1/2 -translate-x-1/2 text-white/80 text-4xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, type: "elastic" }}
        >
          <BsFillArrowDownCircleFill></BsFillArrowDownCircleFill>
        </motion.span>
      </Link>
      <Particle></Particle>
    </div>
  );
};

export default Banner;
