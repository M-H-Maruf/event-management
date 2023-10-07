
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import LogIn from './../components/auth/LogIn';
import Register from './../components/auth/Register';
import Blog from "../components/blog/Blog";
import Venue from "../components/venue/Venue";
import BlogDetail from "../components/blog/BlogDetail";




const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            loader: ()=> fetch("/data/team.json"),
            element: <About></About>
        },
        {
            path: "/blog",
            loader: ()=> fetch("/data/blogs.json"),
            element: <Blog></Blog>
        },
        {
            path: "/blog/:id",
            loader: ()=> fetch("/data/blogs.json"),
            element: <BlogDetail></BlogDetail>
        },
        {
            path: "/venue",
            element: <Venue></Venue>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
        },
        {
            path: "/register",
            element: <Register></Register>
        },

      ]
    },
  ]);

export default routes;