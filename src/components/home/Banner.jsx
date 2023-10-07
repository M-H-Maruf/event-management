
import Particle from './Particle';

const Banner = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-[url('https://i.ibb.co/cY7KgYs/8.jpg')] bg-cover bg-center relative">
        <div className="h-full w-full bg-black bg-opacity-50 -z-10"></div>
        <Particle></Particle>
    </div>
  );
};

export default Banner;
