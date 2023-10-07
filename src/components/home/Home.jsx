import Banner from "./Banner";
import BannerText from "./BannerText";
import Services from "./services/Services";
import Deals from './Deals';
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <div className="relative top-0 left-0 right-0 overflow-hidden">
      <div
        id="Banner"
        className="relative h-screen w-full flex flex-col justify-center items-center"
      >
        <Banner></Banner>
        <BannerText></BannerText>
      </div>
      <div className="flex flex-col justify-center items-center bg-event-secondary/30">
        <div>
          <Services></Services>
        </div>
        <div className="w-full flex justify-center items-center bg-white">
          <div className="max-w-7xl">
          <Deals></Deals>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="max-w-7xl">
          <Testimonials></Testimonials>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
