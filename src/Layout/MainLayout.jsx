import { Outlet } from "react-router-dom";
import Navbar from "../Shared-Components/Navbar";
import Footer from "../Shared-Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-2xl mx-auto px-2">
            <Navbar></Navbar>
            </div>
            <div className="max-w-screen-2xl mx-auto min-h-[550px] px-2">
                <Outlet></Outlet>
            </div>
            <div  className="max-w-screen-2xl mx-auto px-2">
                <Footer></Footer>
            </div>
        </div>
    )
}
export default MainLayout;