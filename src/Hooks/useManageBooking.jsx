import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useManageBooking = () => {
    let axiosPublic = useAxiosPublic();
    let { user } = useContext(AuthContext);

    const { data: manageBookings = [], refetch } = useQuery({
        queryKey: ['manageBookingCollection'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/manage-booking/${user?.email}`);
            return res.data;
        }
    })
    return [manageBookings, refetch];
}
export default useManageBooking;