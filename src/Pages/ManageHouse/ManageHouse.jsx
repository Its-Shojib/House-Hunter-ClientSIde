import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useManageHouse from "../../Hooks/useManageHouse";
import { useNavigate } from "react-router-dom";


const ManageHouse = () => {
    let [manageHouse, refetch] = useManageHouse();
    let goto = useNavigate();
    let axiosPublic = useAxiosPublic();

    let handleDelete =(id)=>{
        axiosPublic.delete(`/delete-manage/${id}`)
        .then(res=>{
            if(res.data.deletedCount > 0){
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
        <div className="max-w-4xl mx-auto mt-8">
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="border bg-gray-200 p-2">Image</th>
                        <th className="border bg-gray-200 p-2">Owner Name</th>
                        <th className="border bg-gray-200 p-2">City</th>
                        <th className="border bg-gray-200 p-2">Rent Per Month</th>
                        <th className="border bg-gray-200 p-2">Edit</th>
                        <th className="border bg-gray-200 p-2">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {manageHouse?.map((house, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <img className="w-20 h-20 object-cover rounded-full" src={house.image} alt="Property" />
                            </td>
                            <td className="border p-2">{house.ownerName}</td>
                            <td className="border p-2">{house.city}</td>
                            <td className="border p-2">${house.rentPerMonth}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() => goto(`update/${house._id}`)}
                                    className="bg-green-700 text-white px-4 py-2 rounded"
                                >
                                    Update
                                </button>
                            </td>
                            <td className="border p-2">
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
export default ManageHouse;