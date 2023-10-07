/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";

const BannerText = () => {
  return (
    <div data-aos="fade-right" className="absolute h-full w-full bottom-0 flex flex-col justify-center items-center">
      <h1  className="text-white text-4xl opacity-90 font-teko tracking-tight block">
        WE MANAGE EVENTS OF
      </h1>
      <hr />
      <div data-aos="fade-left">
        <TypeAnimation
          sequence={[
            "WEDDINGS",
            1000,
            "BIRTHDAY PARTIES",
            1000,
            "ANNIVERSARIES",
            1000,
            "ENGAGEMENT PARTIES",
            1000,
            "RETIREMENT PARTIES",
            1000,
            "BABY SHOWER",
            1000,
          ]}
          wrapper="h1"
          className="text-event-primary font-teko tracking-normal opacity-100"
          speed={50}
          style={{ fontSize: "48px", display: "block" }}
          repeat={Infinity}
        />
      </div>
      <p data-aos="fade-up-left" className="w-80 text-white opacity-60 font-medium text-center">Transforming moments into memories. Welcome to "Aztec", where every event is exceptional. From weddings to baby showers, we make your vision a reality with precision and passion. Let's celebrate!</p>
    </div>
  );
};

export default BannerText;
