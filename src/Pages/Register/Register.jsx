
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillPersonFill, BsPhone, BsHouse } from 'react-icons/bs';
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import animation from './../../../src/assets/SignUpAnimation.json'
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Register = () => {

    let [error, SetError] = useState('');
    let { setUser } = useContext(AuthContext);
    let [showPassword, setShowPassword] = useState(false);

    let AxiosPublic = useAxiosPublic();
    let navigate = useNavigate()

    let handleCreateUser = (e) => {
        e.preventDefault();
        let myName = e.target.name.value;
        let role = e.target.role.value;
        let phone = e.target.phone.value;
        let email = e.target.email.value;
        let password = e.target.password.value;

        let User = { myName, role, phone, email, password };

        let user = {email};

        if (password.length < 6) {
            SetError('Password must be more than 6 character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            SetError('Password must at-least one Capital letter')
            return;
        }
        // eslint-disable-next-line no-useless-escape
        else if (!/.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-].*/.test(password)) {
            SetError('Password must at-least one Special Charecter')
            return;
        }

        AxiosPublic.post('/user', User)
            .then(res => {
                if (res?.data === 'User already exist') {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: "User already exist",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else if (res.data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "User Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    SetError('');
                    setUser(user);
                    localStorage.setItem('user', JSON.stringify(user));
                    navigate('/')
                }
            })

    }

    return (
        <div className=" w-full md:w-10/12 mx-auto flex flex-col md:flex-row gap-5 md:gap-10 px-2 justify-center items-center mt-5">
            <div className="bg-gray-400 w-full md:w-4/12 text-center px-10 py-3 rounded-lg">
                <h2 className="text-3xl font-bold mb-2">Register Now!</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">User Name</p>
                        <BsFillPersonFill className="absolute bottom-4 left-2"></BsFillPersonFill>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="text"
                            name="name"
                            placeholder="Type your name" required
                        />
                    </div>
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">User Role</p>
                        <BsHouse className="absolute bottom-4 left-2"></BsHouse>
                        <select name="role" required
                            className="w-full p-2 pl-7 text-black rounded-lg my-1">
                            <option value="">Select Role</option>
                            <option value="owner">House Owner</option>
                            <option value="renter">House Renter</option>
                        </select>
                    </div>
                    <hr className="my-2" />
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">Phone Number</p>
                        <BsPhone className="absolute bottom-4 left-2"></BsPhone>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="number"
                            name="phone"
                            placeholder="Enter Phone Number" required
                        />
                    </div>
                    <hr className="my-2" />
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">User Email</p>
                        <AiOutlineMail className="absolute bottom-4 left-2"></AiOutlineMail>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="email"
                            name="email"
                            placeholder="Type your email"
                            required />
                    </div>
                    <hr className="my-2" />
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">Password</p>
                        <RiLockPasswordFill className="absolute bottom-4 left-2"></RiLockPasswordFill>
                        <input className="w-full p-2 pl-6 text-black rounded-lg my-1"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Type your password"
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-4">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                    </div>
                    <hr className="my-2" />
                    {
                        error && <p>{error}</p>
                    }
                    <button
                        className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full py-2 text-white font-semibold text-lg rounded-xl" type="submit">
                        Register</button>

                </form>

                <div className="flex gap-3 justify-center mt-3">
                    <p>Already have an account?</p>
                    <Link className="underline text-lg text-blue-600" to='/login'>Login now</Link>
                </div>
            </div>
            <div className="">
                <Lottie className="h-[630px] w-full md:w-10/12 " animationData={animation} ></Lottie>
            </div>
        </div>
    );
};

export default Register;