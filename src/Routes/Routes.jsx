import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashBoard from "../Layout/DashBoard";
import PrivateRoutes from "./PrivateRoutes";
import OwnerRoute from "./OwnerRoute";
import ManageHouse from "../Pages/ManageHouse/ManageHouse";
import AddNewHouse from "../Pages/AddNewHouse/AddNewHouse";
import ManageBooking from "../Pages/ManageBooking/ManageBooking";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdateHouse from "../Pages/UpdateHouse/UpdateHouse";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/houses/:id',
                loader: ({ params }) => fetch(`https://house-hunter-server-ashy-omega.vercel.app/houses/${params.id}`),
                element: <PrivateRoutes><ViewDetails></ViewDetails> </PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [
            //Owner Route
            {
                path: 'manage-house',
                // index: true,
                element: <OwnerRoute><ManageHouse></ManageHouse></OwnerRoute>
            },
            {
                path: 'add-new-house',
                element: <OwnerRoute><AddNewHouse></AddNewHouse></OwnerRoute>
            },
            {
                path: 'manage-house/update/:id',
                loader: ({ params }) => fetch(`https://house-hunter-server-ashy-omega.vercel.app/update/${params.id}`),
                element: <PrivateRoutes><UpdateHouse></UpdateHouse></PrivateRoutes>
            },
            //Renter Route
            {
                path: 'manage-booking',
                // index: true,
                element: <PrivateRoutes><ManageBooking></ManageBooking></PrivateRoutes>
            }
        ]
    },

])


export default router;