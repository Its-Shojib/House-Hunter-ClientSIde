import { NavLink, Outlet } from 'react-router-dom';
import { FaEdit, FaHome, FaPhone, FaSignOutAlt } from 'react-icons/fa';

import { MdOutlineWorkspacePremium } from "react-icons/md";
import useOwner from '../Hooks/useOwner';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { TbListDetails } from 'react-icons/tb';


const DashBoard = () => {
    let [isOwner] = useOwner();
    let { setUser } = useContext(AuthContext);

    let handleLogout = () => {
        setUser(null);
    }

    return (
        <div>
            <div className="max-w-full mx-auto flex">
                <div className="w-64 h-screen bg-[#172935] text-white sticky top-0">
                    <div className='text-center my-10'>
                        <h1 className='text-3xl font-bold'>House Hunter</h1>
                    </div>
                    {
                        isOwner ? <>
                            <ul className='menu flex flex-col mt-10 px-6 space-y-3'>
                                <li >
                                    <NavLink className='flex items-center font-bold gap-2'
                                        to='manage-house' >
                                        <FaHome></FaHome>Manage House</NavLink>
                                </li>
                                <li >
                                    <NavLink className='flex items-center font-bold gap-2'
                                        to='add-new-house' ><MdOutlineWorkspacePremium />Add New House</NavLink>
                                </li>
                                <li >
                                    <NavLink to='/login' onClick={handleLogout} className='flex items-center font-bold gap-2' ><FaSignOutAlt></FaSignOutAlt> Logout</NavLink>
                                </li>
                            </ul>
                        </> : <>
                            <ul className='flex flex-col mt-10 px-6 space-y-3'>
                                <li >
                                    <NavLink className='flex items-center font-bold gap-2'
                                        to='manage-booking' >
                                        <FaEdit></FaEdit>Manage Bookings</NavLink>
                                </li>
                                <li >
                                    <NavLink to='/login' onClick={handleLogout} className='flex items-center font-bold gap-2' ><FaSignOutAlt></FaSignOutAlt> Logout</NavLink>
                                </li>
                            </ul>
                        </>
                    }
                    <hr className='w-full my-5' />

                    <ul className='menu flex flex-col px-6 space-y-3'>
                        <li >
                            <NavLink className='flex items-center font-bold gap-2'
                                to='/' >
                                <FaHome></FaHome>Home</NavLink>
                        </li>

                        <li >
                            <NavLink className='flex items-center font-bold gap-2'
                                to='/about-us' >
                                <TbListDetails />About-Us</NavLink>
                        </li>
                        <li >
                            <NavLink className='flex items-center font-bold gap-2'
                                to='/contact-us' >
                                <FaPhone></FaPhone>Contact-Us</NavLink>
                        </li>
                    </ul>


                </div>
                <div className="flex-1 bg-gray-200 overflow-y-scroll">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    )
}
export default DashBoard;