import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SigninAction } from "../store/auth";
import { hideModal } from "../store/modalSlice";
import { isAuthentication } from "./isAuth";



const LogIn = () => {

    const { isLodding, success, error } = useSelector(state => state.user)


    const dispatch = useDispatch();
    const navigate = useNavigate()

    const refEmail = useRef()
    const refPass = useRef()

    const signinSubmit = (e) => {
        e.preventDefault(null);


        const userData = {

            email: refEmail.current.value,
            password: refPass.current.value
        }
        dispatch(SigninAction(userData))


        refEmail.current.value = null
        refPass.current.value = null



        



    }
    if (!isLodding && success) {
        const {user} = isAuthentication()
        dispatch(hideModal())
        navigate(user.role === 1 ? "/adminDashBoard" : "/userDashBoard")
    }

    
    return (
        <>


            <form className="login_form" onSubmit={signinSubmit}>
                <h3>Log In</h3>
                <input className="inputs" type="email" placeholder="write your Email" ref={refEmail} required />
                <input className="inputs" type="password" placeholder="write your password" ref={refPass} required />
                <input className={isLodding ? "inputs_but_looding" : "inputs_but"} type="submit" value="Log In" onClick={signinSubmit} />

                {error ?
                    <span className="error-text">{error}</span>
                    :
                    null
                }
            </form>




        </>
    )
}


export default LogIn;