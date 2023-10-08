import { Link } from "react-router-dom";
import Particle from "../home/Particle";
import { useEffect } from "react";
import Aos from "aos";

const ErrorPage = () => {
    useEffect(() => {
        Aos.init({
          easing: "ease-out-quart",
          delay: 0,
          duration: 750,
        });
      }, []);
  return (
    <div className=" bg-black/80 w-screen h-screen bg-[url('https://i.ibb.co/VYM4s3t/matteo-vistocco-Dph00-R2-Sw-Fo-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center pb-36 pt-28 tracking-normal text-justify">
      <div className="z-50"><h1
        data-aos="fade-down"
        className="text-6xl text-event-primary font-black font-orbitron mb-20 text-center"
      >
        404
      </h1>

      <div data-aos="zoom-in" className="bg-event-secondary/50 m-10 md:p-24 p-14 rounded shadow flex-col flex justify-center items-center">
        <h2 className="text-4xl font-teko font-bold mb-2 text-left">PAGE NOT FOUND</h2>
        <Link to="/" className="font-bold btn btn-outline btn-accent">GO HOME</Link>
      </div>
      <Particle></Particle></div>
    </div>
  );
};

export default ErrorPage;
