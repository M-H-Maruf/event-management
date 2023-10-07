import { Link } from "react-scroll";
import { AiTwotoneHome, AiFillSetting } from "react-icons/ai";
import { RiServiceFill } from "react-icons/ri";
import { FaNoteSticky } from "react-icons/fa6";

const SideNav = () => {
  return (
    <div className="fixed top-1/2 z-50 right-0 -translate-y-1/2 m-2 bg-event-secondary/50 flex flex-col justify-center items-center p-2 py-6 rounded-full gap-6">
      <div className="tooltip tooltip-left tooltip-accent" data-tip="HOME">
        <Link spy={true} smooth={true} to="Banner">
          <AiTwotoneHome className="text-2xl text-white/40 hover:text-[#1dcdbc]"></AiTwotoneHome>
        </Link>
      </div>
      <div className="tooltip tooltip-left tooltip-accent" data-tip="SERVICES">
        <Link spy={true} smooth={true} to="Services">
          <AiFillSetting className="text-2xl text-white/40 hover:text-[#1dcdbc]"></AiFillSetting>
        </Link>
      </div>
      <div className="tooltip tooltip-left tooltip-accent" data-tip="DEALS">
        <Link spy={true} smooth={true} to="Deals">
          <RiServiceFill className="text-2xl text-white/40 hover:text-[#1dcdbc]"></RiServiceFill>
        </Link>
      </div>
      <div
        className="tooltip tooltip-left tooltip-accent"
        data-tip="TESTIMONIALS"
      >
        <Link spy={true} smooth={true} to="Testimonials">
          <FaNoteSticky className="text-2xl text-white/40 hover:text-[#1dcdbc]"></FaNoteSticky>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
