import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../store/auth";
import { isAuthentication } from "./isAuth";
import Layout from "./Layout";

const AdminDashBoard = () => {
    const { token, user } = isAuthentication()
    const dispatch = useDispatch();
    
useEffect(()=>{
       
        isAuthentication() &&
         
        
        dispatch(getUserProfile({token, user}))
        

    },[dispatch, token, user])

   

    const adminLinks = () => {
        return (
            <div className="info-con">
                <h2>Admin links</h2>
                <Link to="/adminDashBoard/createCategory">Create Category</Link>
                <Link to="/adminDashBoard/AddProduct">Create Product</Link>
                <Link to="./Admin/viewOrder">View Order</Link>
                <Link to="./Admin/manageProduct">Manage Product</Link>
            </div>
        )
    }

    const userInfo = (user) => {
        return (
            isAuthentication() && isAuthentication().user ?
                <>
                    <div className="info-con">
                        <div className="info-header">
                            <h2>User Information</h2>
                        </div>
                        <div className="info-content">
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.role === 1 ? "Admin" : "User"}</p>
                        </div>
                    </div>
                </>
                :
                "Please Log In"

        )
    }



    return (
        <Layout
            title="DashBoard"
            desc={`Good Day ${user.name}`}
            className="container"
            logo={false}

        >

            {adminLinks()}
            {userInfo(user)}

        </Layout>
    )

}

export default AdminDashBoard