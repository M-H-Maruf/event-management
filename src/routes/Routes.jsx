
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import LogIn from './../components/auth/LogIn';
import Register from './../components/auth/Register';




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
            element: <About></About>
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