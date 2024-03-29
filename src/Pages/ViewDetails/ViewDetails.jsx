
import { useLoaderData } from 'react-router-dom';
import useOwner from './../../Hooks/useOwner';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const ViewDetails = () => {
    let { user } = useContext(AuthContext);
    let [isOwner] = useOwner();
    let property = useLoaderData();
    const { ownerName, city, roomSize, bedrooms, bathrooms, availability, rentPerMonth, image, description, phone, email } = property;

    let axiosPublic = useAxiosPublic();
    
    let handleBook = () => {
        let booking = {
            ownerName, city, roomSize, bedrooms, bathrooms, availability, rentPerMonth, image, description, phone, 
            ownerEmail: email, 
            renterEmail: user?.email, 
            renterName: user?.myName, 
            renterPhone: user?.phone
        }

        axiosPublic.post('/booking', booking)
            .then(res => {
                if (res?.data?.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Booking Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="w-full md:w-11/12 mx-auto mt-20 ">
            <img className="w-full h-[450px] object-cover object-center" src={image} alt="Property" />

            <div className=" overflow-hidden shadow-md p-2 py-10">
                <h1 className="text-3xl font-bold mb-4">{`${ownerName}'s Property`}</h1>
                <p className="text-lg mb-4">{description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="mb-2">
                        <h2 className="text-xl font-semibold mb-2">Location:</h2>
                        <p>{city}</p>
                    </div>

                    <div className="mb-2">
                        <h2 className="text-xl font-semibold mb-2">Room Size:</h2>
                        <p>{roomSize}</p>
                    </div>

                    <div className="mb-2">
                        <h2 className="text-xl font-semibold mb-2">Bedrooms:</h2>
                        <p>{bedrooms}</p>
                    </div>

                    <div className="mb-2">
                        <h2 className="text-xl font-semibold mb-2">Bathrooms:</h2>
                        <p>{bathrooms}</p>
                    </div>

                    <div className="mb-2">
                        <h2 className="text-xl font-semibold mb-2">Availability:</h2>
                        <p>{availability ? 'Available' : 'Not Available'}</p>
                    </div>

                    <div className="mb-2">
                        <h2 className="text-xl font-semibold mb-2">Rent per Month:</h2>
                        <p>${rentPerMonth}</p>
                    </div>
                </div>

                <div className="my-5">
                    <h2 className="text-xl font-semibold mb-2">Contact Information:</h2>
                    <p>
                        <strong>Email:</strong> {email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {phone}
                    </p>
                </div>
                <div>
                    {
                        !isOwner && <button onClick={() => handleBook()} className='bg-blue-900 text-white px-5 py-2 rounded-xl'>
                            Book This House
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;