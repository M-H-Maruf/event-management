import { useLoaderData } from "react-router-dom";


const Venue = () => {
    const venues = useLoaderData();
    return (
        <div className="bg-black/80 bg-[url('https://i.ibb.co/VYM4s3t/matteo-vistocco-Dph00-R2-Sw-Fo-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center pb-36 pt-28 tracking-normal text-justify">
        <h1 data-aos="zoom-in" className="text-6xl text-center text-event-primary font-black font-orbitron mb-20">
          VENUES
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 font-bold p-6">
          {venues.map((venue, index) => (
            <div data-aos="flip-up" key={index} className="bg-white/90 rounded-lg shadow-2xl h-full">
              <img src={venue.image} alt={venue.title} className="w-full h-80 object-center rounded-t-lg object-cover mb-4" />
              <div className="py-4 pb-10 p-6">
                <h3 className="text-4xl font-teko text-black font-bold mb-2">{venue.title}</h3>
                <p className="text-black/70 font-bold">{venue.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Venue;