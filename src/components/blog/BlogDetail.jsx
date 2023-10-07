import { useLoaderData, useParams } from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";

const BlogDetail = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id == id);
  if (!blog) {
    return <ErrorPage></ErrorPage>;
  }
  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/VYM4s3t/matteo-vistocco-Dph00-R2-Sw-Fo-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center pb-36 pt-28 tracking-normal text-justify">
      <h1
        data-aos="fade-down"
        className="text-6xl text-event-primary font-black font-orbitron mb-20"
      >
        BLOG DETAILS
      </h1>

      <div data-aos="zoom-in" className="bg-event-secondary/50 m-10 p-4 rounded shadow">
        <h2 className="text-4xl font-teko font-bold mb-2 text-left">{blog.title}</h2>
        <p className="font-extrabold mb-4">{blog.date}</p>
        <p className="font-bold">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
