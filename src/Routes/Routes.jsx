import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from './../Pages/Home/AboutUs/AboutUs';
import ContactUs from "../Pages/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/registration',
                element:<Registration></Registration>
            },
        ]
    }
])


export default router;