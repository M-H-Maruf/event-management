
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
import ServiceDetails from './../components/home/services/ServiceDetails';
import PrivateRoute from "./PrivateRoute";
import ErrorPage from './../components/shared/ErrorPage';




const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
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
            element: <PrivateRoute><Blog></Blog></PrivateRoute>
        },
        {
            path: "/blog/:id",
            loader: ()=> fetch("/data/blogs.json"),
            element: <BlogDetail></BlogDetail>
        },
        {
            path: "/services/:id",
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        },
        {
            path: "/venue",
            loader: ()=> fetch("/data/venues.json"),
            element: <PrivateRoute><Venue></Venue></PrivateRoute>
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