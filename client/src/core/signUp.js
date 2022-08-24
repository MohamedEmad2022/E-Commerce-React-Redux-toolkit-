import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignupAction } from "../store/auth";


const SignUp = () => {

    const { isLodding } = useSelector((state) => state.user)


    const dispatch = useDispatch();

    const refName = useRef()
    const refEmail = useRef()
    const refPass = useRef()

    const signUpSubmit = (e) => {
        e.preventDefault(null);


        const userData = {
            name: refName.current.value,
            email: refEmail.current.value,
            password: refPass.current.value
        }
        dispatch(SignupAction(userData))
    }

    return (
        <>


            <form className="login_form" onSubmit={signUpSubmit}>
                <h3>Sign Up</h3>
                <input className="inputs" type="text" placeholder="write your User Name" ref={refName} required />
                <input className="inputs" type="email" placeholder="write your Email" ref={refEmail} required />
                <input className="inputs" type="password" placeholder="write your password" ref={refPass} required />
                <input className={isLodding ? "inputs_but_looding" : "inputs_but"} type="submit" value="Sign Up" onClick={signUpSubmit} />
            </form>


        </>
    )
}


export default SignUp;