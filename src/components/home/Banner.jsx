
import Particle from './Particle';

const Banner = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-[url('/src/assets/3.jpg')] bg-cover bg-center relative">
        <div className="h-full w-full bg-black opacity-50 "></div>
        <Particle></Particle>
    </div>
  );
};

export default Banner;
