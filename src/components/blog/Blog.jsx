import { Link, useLoaderData } from "react-router-dom";
import Particle from "./../home/Particle";

const Blog = () => {
  const blogs = useLoaderData();

  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/VYM4s3t/matteo-vistocco-Dph00-R2-Sw-Fo-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center pb-36 pt-28 tracking-normal text-justify">
      <div className="z-10">
        <h1
          data-aos="fade-down"
          className="text-6xl text-event-primary font-black text-center font-orbitron mb-20"
        >
          BLOG
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 font-bold p-6">
          {blogs.map((blog, index) => (
            <div
              data-aos="flip-left"
              key={index}
              className="bg-white/90 p-6 rounded-lg shadow-2xl h-full z-40"
            >
              <div className="py-4">
                <h3 className="text-xl font-teko text-event-primary mb-2">
                  {blog.title}
                </h3>
                <p className="text-black/40 text-sm mb-2">{blog.date}</p>
                <p className="text-black/40">{blog.excerpt}</p>
              </div>
              <Link
                to={`/blog/${blog.id}`}
                className="text-event-primary mt-4 block"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
        <Particle></Particle>
      </div>
    </div>
  );
};

export default Blog;
