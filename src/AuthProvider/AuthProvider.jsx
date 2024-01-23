import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const retrieveUserFromLocalStorage = () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        };

        setLoading(false);
        console.log('observing: ', user?.myName);
        let data = user?.email;
        const checkAuthStatus = async () => {
            try {
                if(user){
                    axiosPublic.post('/jwt',{data})
                    .then(res=>{
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
                }
                else{
                    localStorage.removeItem('access-token');
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error checking authentication status:', error);
            }
        };

        const intervalId = setInterval(checkAuthStatus, 1000);
        const intervalId2 = setInterval(retrieveUserFromLocalStorage, 2000);

        // Cleanup the interval on component unmount
        // return () => clearInterval(intervalId);

        return () => {
            clearInterval(intervalId);
            clearInterval(intervalId2);
        }
    }, [user, axiosPublic]);


    const handleUserChange = (newUser) => {
        setUser((prevUser) => {
            if (prevUser !== newUser) {
                localStorage.setItem('user', JSON.stringify(newUser));
                return newUser;
            }
            return prevUser;
        });
    };

    const authInfo = {
        user,
        loading,
        setUser: handleUserChange,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthProvider;