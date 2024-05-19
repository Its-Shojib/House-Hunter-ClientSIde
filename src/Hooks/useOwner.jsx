import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


//check Owner or not
const useOwner = () => {
    const { user, loading } = useContext(AuthContext);
    let axiosPublic = useAxiosPublic();
    const { data: isOwner, isPending: isOwnerLoading } = useQuery({
        queryKey: [user?.email, 'isOwner'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/owner/${user?.email}`);
            return res.data?.owner;
        }
    })
    return [isOwner, isOwnerLoading]
};

export default useOwner;