
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/home/Home";




const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },

      ]
    },
  ]);

export default routes;