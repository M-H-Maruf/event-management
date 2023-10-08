import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../hooks/AuthProvider";
import ErrorPage from "../../shared/ErrorPage";

const ServiceDetails = () => {
  const { services } = useContext(AuthContext);
  const { id } = useParams();
  const service = services.find((service) => service.id == id);
  if (!service) {
    return <ErrorPage></ErrorPage>;
  }
  console.log(service);
  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/VYM4s3t/matteo-vistocco-Dph00-R2-Sw-Fo-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center pb-36 pt-28 px-8 md:px-16 tracking-normal text-justify">
      <h1
        data-aos="fade-down"
        className="text-6xl text-event-primary font-black font-orbitron mb-20 text-center mx-auto"
      >
        SERVICE DETAILS
      </h1>

      <div
        key={service.id}
        data-aos="flip-left"
        className="bg-black/80 shadow-2xl rounded tracking-tight w-full max-w-6xl"
      >
        <img
          className="h-full rounded-t-lg object-cover object-center"
          src={service.image}
          alt="service"
        />
        <div className="card-body tracking-normal grid-rows-3 items-start justify-center p-5 text-white/100 text-left">
          <div>
            <small className="text-white/60 text-lg font-orbitron font-black">
              {service.price}
            </small>
            <h2 className="card-title text-4xl md:text-6xl font-teko tracking-normal">
              {service.name}
            </h2>
          <p className="text-xl mt-6 font-bold">{service.detailed_description}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
