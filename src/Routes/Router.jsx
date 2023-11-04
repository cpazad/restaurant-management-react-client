import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/AboutUs/About";
import Menu from "../Pages/Menu/Menu";
import Gallery from "../Pages/Gallery/Gallery";
import Blogs from "../Pages/Blogs/Blogs";
import FindUs from "../Pages/FindUs/FindUs";

const router = createBrowserRouter([
   {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/menu",
            element:<Menu></Menu>
        },
        {
            path:"/gallery",
            element:<Gallery></Gallery>
        },
        {
            path:"/blogs",
            element:<Blogs></Blogs>
        },
        {
            path:"/contact",
            element:<FindUs></FindUs>
        }
    ]
   } 
])

export default router