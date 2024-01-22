import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useOwner from "../Hooks/useOwner";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const OwnerRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const [isOwner, isOwnerLoading] = useOwner();
    const location = useLocation();

    if (loading || isOwnerLoading) {
        return <div className="flex justify-center items-center min-h-[600px]">
        <span className="loading loading-infinity loading-lg"></span>
    </div>
    }

    if (user && isOwner) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};
OwnerRoute.propTypes = {
    children: PropTypes.node,
}
export default OwnerRoute;
