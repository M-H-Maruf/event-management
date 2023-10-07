import { useContext } from "react";
import { AuthContext } from "../../../hooks/AuthProvider";

const Services = () => {
  const { services } = useContext(AuthContext);
  console.log(services);
  return (
    <div className="py-28">
      <h1
        data-aos="fade-up"
        className="font-teko font-bold text-event-text text-4xl"
      >
        OUR SERVICES
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20">
        {services.map((service) => (
          <div
            key={service.id}
            data-aos="fade-right"
            className="w-80 card bg-white shadow-2xl rounded-lg tracking-tight"
          >
            <img
              className="h-56 w-full rounded-t-lg object-cover object-center"
              src={service.image}
              alt="service"
            />
            <div className="card-body grid grid-flow-col grid-rows-3 items-start justify-center p-5">
              <div>
                <small className="text-event-secondary/40 text-xs font-orbitron font-black">
                  {service.price}
                </small>
                <h2 className="card-title font-teko tracking-tighter">
                  {service.name}
                </h2>
              </div>
              <p>{service.short_description}</p>
              <button className="btn btn-block btn-outline btn-accent">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
