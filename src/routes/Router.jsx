import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import BuyerScreen from "../pages/BuyerScreen";
import PropertyDetails from "../pages/PropertyDetails";

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
                path: "/aboutUs",
                element: <AboutUs />
            },
            {
                path: "/buyerScreen",
                element: <BuyerScreen />
            },
            {
                path: "/propertyDetails",
                element: <PropertyDetails />
            },
        ]
    }
])