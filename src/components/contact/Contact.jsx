import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="bg-black/80 bg-[url('https://i.ibb.co/VYM4s3t/matteo-vistocco-Dph00-R2-Sw-Fo-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center pb-36 pt-28 tracking-normal text-justify items-center">
      <h1
        data-aos="zoom-in"
        className="text-6xl text-center text-event-primary font-black font-orbitron mb-20"
      >
        VENUES
      </h1>
      <div data-aos="zoom-out" className="bg-black/50 max-w-5xl m-8 md:m-24 p-6 md:p-10">
        <form className="flex flex-col gap-8" ref={form} onSubmit={sendEmail}>
          <div className="grid justify-center grid-cols-1 md:grid-cols-2 items-start md:gap-10">
            <label className="w-20 text-left md:justify-self-end">Name:</label>
            <input className="bg-white/30  border border-gray-300 w-64" type="text" name="user_name" />
          </div>
          <div className="grid justify-center grid-cols-1 md:grid-cols-2 items-start md:gap-10">
            <label className="w-20 text-left md:justify-self-end">Email:</label>
            <input className="bg-white/30  border border-gray-300 w-64" type="email" name="user_email" />
          </div>
          <div className="grid justify-center grid-cols-1 md:grid-cols-2 items-start md:gap-10">
            <label className="w-20 text-left md:justify-self-end">Message:</label>
            <textarea className="bg-white/30  border border-gray-300 w-64 h-40" name="message" />
          </div>

          <input className="btn glass text-white hover:text-event-secondary" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
