import { Outlet } from "react-router-dom";
import Navbar from "../Shared-Components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
            <Navbar></Navbar>
            </div>
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
                <Outlet></Outlet>
            </div>
            <div  className="max-w-screen-2xl mx-auto px-4 md:px-8">

            </div>
        </div>
    )
}
export default MainLayout;