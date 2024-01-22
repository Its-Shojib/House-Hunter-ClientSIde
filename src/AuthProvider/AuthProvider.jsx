import { createContext, useState } from "react";
import PropTypes from 'prop-types';

import axios from "axios";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);



    let createUser = (email, password) => {
        setLoading(true);
        return 0;
    }
    let SignInUser = (email, password) => {
        setLoading(true);
        return 0;
    }
    let Logout = () => {
        setLoading(true);
        return 0;
    }




    let authInfo = {
        user,
        createUser,
        SignInUser,
        Logout,
        loading,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;