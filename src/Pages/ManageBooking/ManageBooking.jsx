
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useManageBooking from "../../Hooks/useManageBooking";


const ManageBooking = () => {
    let axiosPublic = useAxiosPublic();

    let [manageBookings, refetch] = useManageBooking();

    let handleDelete = (id) => {
        axiosPublic.delete(`/delete-booking/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Booking Deleted Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }
    return (
        <div className="max-w-5xl mx-auto mt-8">
            <table className="min-w-full border border-gray-300 table table-zebra">
                <thead>
                    <tr>
                        <th className="bg-gray-200">Image</th>
                        <th className="bg-gray-200">Owner Name</th>
                        <th className="bg-gray-200">City</th>
                        <th className="bg-gray-200">Rent Per Month</th>
                        <th className="bg-gray-200">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageBookings?.map((house, index) => (
                            <tr key={index}>
                                <td>
                                    <img className="w-16 h-16 object-cover rounded-full" src={house.image} alt="Property" />
                                </td>
                                <td>{house.ownerName}</td>
                                <td>{house.city}</td>
                                <td>${house.rentPerMonth}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(house._id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
export default ManageBooking;