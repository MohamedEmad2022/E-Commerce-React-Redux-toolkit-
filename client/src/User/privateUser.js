import {  Outlet, useNavigate } from "react-router-dom"
import { isAuthentication } from "../core/isAuth"



const PrivateUser = ()=>{
    let navigate = useNavigate();
    return (
        isAuthentication() && isAuthentication().user.role === 0 ? <Outlet /> : navigate("/")
    )
}


export default PrivateUser