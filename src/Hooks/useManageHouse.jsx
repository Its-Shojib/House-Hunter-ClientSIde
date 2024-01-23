import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useManageHouse = () => {
    let axiosPublic = useAxiosPublic();
    let { user } = useContext(AuthContext);

    const { data: manageHouse = [], refetch } = useQuery({
        queryKey: ['manageHouseCollection'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/manage-house/${user?.email}`);
            return res.data;
        }
    })
    return [manageHouse, refetch];
}
export default useManageHouse;