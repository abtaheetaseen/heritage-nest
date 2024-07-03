import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import AboutUs from "../pages/AboutUs";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/aboutUs",
                element: <AboutUs />
            },
        ]
    }
])