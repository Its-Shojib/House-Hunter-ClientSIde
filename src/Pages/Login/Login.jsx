import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Lottie from "lottie-react";
import Swal from 'sweetalert2';

import animation from '../../assets/loginAnimation.json'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const Login = () => {
    let [showPassword, setShowPassword] = useState(false);
    let { setUser } = useContext(AuthContext);
    let navigate = useNavigate();
    // let location = useLocation();

    let axiosPublic = useAxiosPublic();

    let handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        let auth = { email, password };

        axiosPublic.post('/login', auth)
            .then(res => {
                // console.log(res);
                if (res?.data === 'Wrong Pass') {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: "Wrong Password",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else if (res?.data === 'Dont Exist') {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: "User doesn't exist",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    setUser(res?.data);
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `Welcome Back ${res?.data?.myName}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    localStorage.setItem('user', JSON.stringify(res?.data));
                    navigate('/');
                }
            })
    }

    return (
        <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row-reverse justify-center items-center gap-5 px-4 ">
            <div className="bg-gray-400 w-full md:w-4/12 md:pr-10 text-center p-10 rounded-lg">
                <h2 className="text-3xl font-bold">Login Now!</h2>
                <form onSubmit={handleLogin}>
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">User Email</p>
                        <AiOutlineMail className="absolute bottom-4 left-2"></AiOutlineMail>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="email"
                            name="email"
                            placeholder="Type your email"
                            required />
                    </div>
                    <hr className="my-3" />
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">Password</p>
                        <RiLockPasswordFill className="absolute bottom-4 left-2"></RiLockPasswordFill>
                        <input className="w-full p-2 pl-6 text-black rounded-lg my-1"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Type your password"
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-4">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                    </div>
                    <hr className="my-3" />
                    <p className="cursor-pointer text-right underline my-3">Forgot password?</p>

                    <button
                        className="bg-gradient-to-r from-fuchsia-500 to-violet-500 w-full py-2 text-white font-semibold text-lg rounded-xl" type="submit">
                        Login</button>
                </form>
                <div className="flex gap-3 justify-center mt-5">
                    <p>New to this site?</p>
                    <Link className="underline text-lg text-blue-600" to='/register'>Sign Up</Link>
                </div>
            </div>
            <div className="">
                <Lottie className="h-[630px] w-full md:w-10/12 " animationData={animation} loop={false}></Lottie>
            </div>
        </div>
    );
};

export default Login;