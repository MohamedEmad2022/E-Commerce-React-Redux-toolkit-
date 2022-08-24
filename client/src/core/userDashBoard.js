
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../store/auth";
import { isAuthentication } from "./isAuth";
import Layout from "./Layout";

const UserDashBoard = () => {
    const { token, user } = isAuthentication()
    const dispatch = useDispatch();

    useEffect(()=>{
       
        isAuthentication() &&
         
        
        dispatch(getUserProfile({token, user}))
        

    },[dispatch, token, user])



    

    const userLinks = () => {
        return (
            <div className="info-con">
                <h2>user links</h2>
                <Link to="./Admin/createCategory">Update Profil</Link>
                <Link to="./Admin/createProduct">View History</Link>
                
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

            {userLinks()}
            {userInfo(user)}

        </Layout>
    )

}

export default UserDashBoard