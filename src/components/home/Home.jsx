import Banner from "./Banner";
import BannerText from "./BannerText";
import Services from "./services/Services";

const Home = () => {
  return (
    <div className="absolute top-0 left-0 right-0 overflow-hidden -z-10">
      <div className="relative h-screen w-full">
        <Banner></Banner>
        <BannerText></BannerText>
      </div>
      <div className="flex justify-center items-center bg-event-secondary/30">
        <div className="max-w-7xl z-40">
          <Services></Services>
        </div>
      </div>
    </div>
  );
};

export default Home;
