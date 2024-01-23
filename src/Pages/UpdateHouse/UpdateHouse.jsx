import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateHouse = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    let goto = useNavigate();

    let house = useLoaderData();
    console.log(house);
    let { _id, phone, city, bedrooms, bathrooms, availability, rentPerMonth, description, roomSize } = house;

    const onSubmit = async (data) => {
        // console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url

            const updatedHouse = {
                image: res?.data?.data?.display_url,
                city: data?.city,
                bedrooms: data?.bedrooms,
                bathrooms: data?.bathrooms,
                roomSize: data?.roomSize,
                availability: data?.availability,
                rentPerMonth: data?.rentPerMonth,
                description: data?.desc,
                phone: data?.phone
            }

            await axiosPublic.patch(`/update-house/${_id}`, updatedHouse)
                .then(res => {
                    console.log(res);
                    if (res?.data?.modifiedCount > 0) {
                        reset();
                        Swal.fire({
                            position: "top-middle",
                            icon: "success",
                            title: 'House Update Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        goto('/dashboard/manage-house');
                    }
                })

        }
    };

    return (

        <div>
            <div>
                <div className="w-10/12 mx-auto my-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-10">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text">Phone*</span>
                                </label>
                                <input
                                    type="number"
                                    defaultValue={phone}
                                    {...register('phone', { required: true })}
                                    className="w-full p-2" />
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text">City*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={city}
                                    {...register('city', { required: true })}
                                    className="w-full p-2" />
                            </div>
                        </div>
                        <div className="flex gap-10 my-5">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text">Bed Rooms*</span>
                                </label>
                                <input
                                    type="number"
                                    defaultValue={bedrooms}
                                    {...register('bedrooms', { required: true })}
                                    required
                                    className="w-full p-2" />
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text">Bath Room*</span>
                                </label>
                                <input
                                    type="number"
                                    defaultValue={bathrooms}
                                    {...register('bathrooms', { required: true })}
                                    required
                                    className=" w-full p-2" />
                            </div>
                        </div>
                        <div className="flex gap-10 my-5">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text">House Picture*</span>
                                </label>
                                <input {...register('image', { required: true })} type="file" className=" w-full p-2" />
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text">Room Size*</span>
                                </label>
                                <input
                                    defaultValue={roomSize}
                                    {...register('roomSize', { required: true })}
                                    type="text"
                                    className=" w-full p-2" />
                            </div>
                        </div>
                        <div className="flex gap-10 my-5">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text">Avaibility*</span>
                                </label>
                                <select
                                    defaultValue={availability}
                                    {...register('availability', { required: true })}
                                    className="select select-bordered w-full py-2">
                                    <option disabled value="default">Select One</option>
                                    <option value="true">Available</option>
                                    <option value="false">Not Available</option>

                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text">Rent Per Month*</span>
                                </label>
                                <input
                                    defaultValue={rentPerMonth}
                                    {...register('rentPerMonth', { required: true })}
                                    type="number"
                                    className=" w-full p-2" />
                            </div>
                        </div>
                        <div className="py-5">
                            <textarea
                                defaultValue={description}
                                {...register('desc', { required: true })}
                                cols="40"
                                rows="5">

                            </textarea>
                        </div>
                        <button
                            className="block w-full text-lg bg-green-950 text-white px-4 py-2 rounded-md" type="submit">
                            Update & Publish Now!
                        </button>
                    </form>
                </div>
            </div >
        </div >
    )
}
export default UpdateHouse;