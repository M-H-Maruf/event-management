import Banner from "./Banner";
import BannerText from "./BannerText";
import Services from "./services/Services";

const Home = () => {
  return (
    <div className="relative top-0 left-0 right-0 overflow-hidden">
      <div className="relative h-screen w-full flex flex-col justify-center items-center">
        <Banner></Banner>
        <BannerText></BannerText>
      </div>
      <div className="flex justify-center items-center bg-event-secondary/30">
        <div>
          <Services></Services>
        </div>
      </div>
    </div>
  );
};

export default Home;
