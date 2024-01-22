import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    // Function to retrieve user data from local storage on component mount


    useEffect(() => {
        // Retrieve user from local storage on component mount
        const retrieveUserFromLocalStorage = () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        };


        setLoading(false);
        console.log('observing: ', user?.myName);

        const checkAuthStatus = async () => {
            try {
                const userEmail = user?.email;
                if (user) {
                    await axiosPublic.post('/jwt', userEmail);

                } else {
                    await axiosPublic.post('/logout', userEmail);
                }
            } catch (error) {
                console.error('Error checking authentication status:', error);
            }
        };

        // Set up an interval to check for changes periodically
        const intervalId = setInterval(checkAuthStatus, 1000); // Check every 30 seconds, adjust as needed
        const intervalId2 = setInterval(retrieveUserFromLocalStorage, 1000); // Check every 30 seconds, adjust as needed

        // Cleanup the interval on component unmount
        // return () => clearInterval(intervalId);

        return () => {
            clearInterval(intervalId);
            clearInterval(intervalId2);
        }
    }, [user, axiosPublic]);


    const handleUserChange = (newUser) => {
        setUser((prevUser) => {
            // Check if the user has changed to avoid unnecessary updates
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
