import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../features/auth/authSlice";

const PrivateRoute = () => {
    const userInfo = useSelector(selectUserInfo)
    return userInfo ? <Outlet /> : <Navigate to="/login" replace />
}
export default PrivateRoute 
