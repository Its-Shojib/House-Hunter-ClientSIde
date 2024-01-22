import { Outlet } from "react-router-dom";
import Navbar from "../Shared-Components/Navbar";
import Footer from "../Shared-Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            </div>
            <div className="max-w-screen-2xl mx-auto min-h-screen">
                <Outlet></Outlet>
            </div>
            <div  className="max-w-screen-2xl mx-auto">
                <Footer></Footer>
            </div>
        </div>
    )
}
export default MainLayout;