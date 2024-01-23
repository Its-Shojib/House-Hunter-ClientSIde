import { Link, useNavigate } from "react-router-dom";


const Card = ({ item }) => {
    let goto = useNavigate();
    let { _id, ownerName, city, roomSize, bedrooms, image } = item;
    return (
        <div className="max-w-sm mx-auto overflow-hidden shadow-2xl rounded-lg">
            <img className="w-full h-48 object-cover object-center" src={image} alt="Property" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Owner: {ownerName}</div>
                <p className="text-gray-700 text-base mb-2">City: {city}</p>
                <p className="text-gray-700 text-base mb-2">Room Size: {roomSize}</p>
                <p className="text-gray-700 text-base mb-2">Bedrooms: {bedrooms}</p>
                <button className="bg-green-950 text-white px-4 py-2 rounded-lg mx-auto w-full"
                onClick={() => goto(`houses/${_id}`)}>
                        View Details
                </button>
            </div>
        </div>
    );
};

export default Card;
