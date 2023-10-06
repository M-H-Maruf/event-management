
import Banner from './Banner';
import BannerText from './BannerText';

const Home = () => {
    return (
        <div className='absolute top-0 left-0 right-0 overflow-hidden -z-10'>
            <div className="relative h-screen w-full">
            <Banner></Banner>
            <BannerText></BannerText>
            </div>
        </div>
    );
};

export default Home;