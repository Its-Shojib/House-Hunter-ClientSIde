import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useLoadHouse = () => {
    let axiosPublic = useAxiosPublic();
    const { data: houseCollection = [], refetch } = useQuery({
        queryKey: ['houseCollection'],
        queryFn: async () => {
            const res = await axiosPublic.get('/houses');
            return res.data;
        }
    })
    return [houseCollection, refetch];
}
export default useLoadHouse;