import {  Outlet, useNavigate } from "react-router-dom"
import { isAuthentication } from "../core/isAuth"



const AdminPrivate = ()=>{
    let navigate = useNavigate();
    
    return (
        isAuthentication() && isAuthentication().user.role === 1 ? <Outlet /> : navigate("/")
    )
}


export default AdminPrivate