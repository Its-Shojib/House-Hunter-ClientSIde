import { useEffect, useState } from "react";
import useLoadHouse from "../../Hooks/useLoadHouse";
import Banner from "./Banner";
import Card from "./Card";


const Home = () => {
    let [houseCollection] = useLoadHouse();
    console.log(houseCollection);
    const [searchCity, setSearchCity] = useState('');
    const [searchBedrooms, setSearchBedrooms] = useState('');
    const [searchBathrooms, setSearchBathrooms] = useState('');
    const [searchRoomSize, setSearchRoomSize] = useState('');
    const [searchAvailability, setSearchAvailability] = useState('');
    const [searchRentPerMonth, setSearchRentPerMonth] = useState('');

    const [filteredHouses, setFilteredHouses] = useState([]);
    useEffect(() => {
        setFilteredHouses(houseCollection);
    }, [houseCollection])

    // setFilteredHouses(houseCollection);
    console.log(filteredHouses);
    const handleSearch = () => {
        // Filter houses based on specified criteria
        let result = [...houseCollection];

        if (searchCity) {
            result = result.filter((house) => house.city.toLowerCase().includes(searchCity.toLowerCase()));
        }

        if (searchBedrooms) {
            result = result.filter((house) => house.bedrooms.toString() === searchBedrooms);
        }

        if (searchBathrooms) {
            result = result.filter((house) => house.bathrooms.toString() === searchBathrooms);
        }

        if (searchRoomSize) {
            result = result.filter((house) => house.roomSize.toLowerCase().includes(searchRoomSize.toLowerCase()));
        }

        if (searchAvailability !== '') {
            result = result.filter((house) => house.availability === (searchAvailability === 'true'));
        }

        if (searchRentPerMonth) {
            result = result.filter((house) => house.rentPerMonth.toString() === searchRentPerMonth);
        }

        setFilteredHouses(result);
    };
    return (
        <div>
            <Banner></Banner>
            <div className="text-center text-6xl  my-10">
                All Cards Are Here
            </div>
            <div className="w-11/12 mx-auto flex items-center justify-center gap-5 my-10">
                {/* City Search */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by city..."
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Bedrooms Search */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by bedrooms..."
                        value={searchBedrooms}
                        onChange={(e) => setSearchBedrooms(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Bathrooms Search */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by bathrooms..."
                        value={searchBathrooms}
                        onChange={(e) => setSearchBathrooms(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Room Size Search */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by room size..."
                        value={searchRoomSize}
                        onChange={(e) => setSearchRoomSize(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Availability Search */}
                <div className="mb-4">
                    <select
                        value={searchAvailability}
                        onChange={(e) => setSearchAvailability(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    >
                        <option value="">Search by availability...</option>
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                </div>

                {/* Rent Per Month Search */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by rent per month..."
                        value={searchRentPerMonth}
                        onChange={(e) => setSearchRentPerMonth(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mb-4">
                    <button onClick={handleSearch}
                        className="bg-blue-700 text-white px-4 py-2 rounded">
                        Search
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    filteredHouses?.map(item => <Card
                        key={item._id}
                        item={item}></Card>)
                }
            </div>

        </div>
    )
}
export default Home;