import { useLoaderData } from "react-router-dom";

const About = () => {
  const teamMembers = useLoaderData();
  console.log(teamMembers);
  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/VYM4s3t/matteo-vistocco-Dph00-R2-Sw-Fo-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center py-36 tracking-normal text-justify">
      <h1
        data-aos="fade-down"
        className="text-6xl text-event-primary font-black font-orbitron mb-4"
      >
        About Us
      </h1>
      <div className=" py-10 px-6 max-w-6xl">

        {/* intro */}
        <div className=""><p data-aos="flip-up" className="font-bold mb-4">
          We are a team of passionate professionals dedicated to delivering
          exceptional solutions tailored to meet your unique needs. With years
          of experience in the industry, we combine creativity, technical
          expertise, and a customer-centric approach to exceed your
          expectations.
        </p>
        <p data-aos="flip-down" className="mb-4 font-bold">
          Our mission is to empower businesses and individuals with innovative
          solutions that drive growth and success. We believe in building strong
          partnerships and providing the highest level of service and support.
        </p></div>

        {/* why us */}
        <div className="py-10">
          <h2
            data-aos="fade-right"
            className="font-teko font-bold text-event-text mb-6 text-4xl aos-init aos-animate"
          >
            WHY CHOOSE US?
          </h2>
          <ul data-aos="fade-up" className="list-disc pl-4 mb-4 font-bold list-inside">
            <li>Expertise in cutting-edge technologies.</li>
            <li>Customized solutions to suit your specific requirements.</li>
            <li>
              Proven track record of successful projects and satisfied clients.
            </li>
            <li>Transparent communication and on-time delivery.</li>
            <li>Commitment to your success and long-term partnership.</li>
          </ul>
        </div>

        {/* team */}
        <div className="py-10">
          <h2
            data-aos="fade-right"
            className="font-teko font-bold text-event-text mb-6 text-4xl aos-init aos-animate"
          >
            OUR TEAM
          </h2>
          <p data-aos="fade-up" className="mb-4 font-bold">
            Meet the talented individuals behind our success. Our team brings a
            diverse range of skills and experiences to the table, ensuring that
            we can tackle any challenge with creativity and expertise.
          </p>
          <div className="grid grid-cols-1 my-16 lg:grid-cols-2 justify-center items-center gap-y-24 gap-x-16 font-bold">
            {teamMembers.map((member, index) => (
              <div data-aos="flip-left" key={index} className="bg-white/80 p-6 rounded shadow-2xl">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover object-center mx-auto mb-4"
                />
                <div className="py-4"><h3 className="text-xl font-teko text-event-primary mb-2">{member.name}</h3>
                <p className="text-black/40 text-sm mb-2">{member.position}</p>
                <p className="text-black/40">{member.bio}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* conclusion */}
        <div data-aos="fade-up" className="text-center font-bold pt-10">
        <p>
          We look forward to the opportunity to work with you and help you
          achieve your goals. Feel free to reach out to us with any questions or
          inquiries.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
