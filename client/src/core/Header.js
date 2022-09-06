
import { showModal } from "../store/modalSlice"
import { useDispatch, useSelector } from "react-redux";
import { SignOutAcion } from "../store/auth";
import { isAuthentication } from "./isAuth";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCart } from "../store/cartActions";
// import Book from "../../assets"

const Header = () => {
    
    const {cart} = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const { user} = isAuthentication()

    
    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    const login_component = () => {

        dispatch(showModal("LogIn"));

    };

    const sign_component = () => {

        dispatch(showModal("SignUp"));

    }
    const logOut = ()=>{

        dispatch(SignOutAcion())
        window.location.reload()
    }
    

    return (
        <>
            <div className="header">
                <div className="header-container">
                    {/* <div className="logo">
                        <img src={Book} alt= "book store"/>
                    </div> */}

                    <div className="header-left">

                        {isAuthentication() ?
                            <>
                                <input className="inputs_but" type="button" value="Log Out" onClick={logOut} />
                                <Link to={user.role === 1 ? "/adminDashBoard" : "/userDashBoard"} className="inputs_but">DashBoard</Link>
                            </>

                            :
                            <>
                                <input className="inputs_but" type="button" value="Log In" onClick={login_component} />
                                <input className="inputs_but" type="button" value="Sign Up" onClick={sign_component} />
                            </>
                        }

                        <Link to="/" className="link-without-backg">Home</Link>

                    </div>
                    <div className="header-right">
                        <span>{cart.length}</span>
                        <Link to="/cart" className="link-without-backg">Cart</Link>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Header;