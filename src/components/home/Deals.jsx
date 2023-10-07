/* eslint-disable react/no-unescaped-entities */

import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const Deals = () => {
  const Completionist = () => (
    <span className="font-teko tracking-tighter text-lg font-semibold">
      Too Bad! <br /> Better luck Next Time!!!
    </span>
  );

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="font-orbitron tracking-widest text-5xl font-black">
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div
      id="Deals"
      className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 tracking-tight pt-32"
    >
      <h1
        data-aos="fade-right"
        className="font-teko font-bold text-event-text text-4xl aos-init aos-animate md:col-span-2 col-span-1"
      >
        BEST DEALS
      </h1>
      <div data-aos="fade-up" className="flex flex-col justify-center">
        <h1 className="font-teko tracking-tighter text-xl font-semibold">
          Welcome to AZTEC
        </h1>
        <h2 className="font-teko">Sign up today to get the best deals!</h2>
        <ul className="list-disc list-inside">
          <li>Best deals on the market.</li>
          <li>People's trusted companion since 1992.</li>
          <li>Exclusive offer's for members of the community.</li>
        </ul>
        <Link>
          <button className="btn btn-outline btn-accent font-bold my-4">
            SIGN UP
          </button>
        </Link>
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-col justify-center md:justify-normal py-10 pb-52 items-center h-full"
      >
        <h1 className="font-teko tracking-tighter text-xl font-semibold">
          Time Remaining Till Offer Ends
        </h1>
        <Countdown date={Date.now() + 86400000} renderer={renderer} />
      </div>
    </div>
  );
};

export default Deals;
