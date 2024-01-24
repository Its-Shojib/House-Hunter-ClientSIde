import axios from "axios";

let axiosPublic = axios.create({
    baseURL: 'https://house-hunter-server-ashy-omega.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
}
export default useAxiosPublic;