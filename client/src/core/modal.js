import { hideModal} from "../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "./login";
import SignUp from "./signUp";


const Modal = () => {
    const dispatch = useDispatch();

const {isLogin, componentName} = useSelector((state)=> state.isLogin)

    const components = {LogIn, SignUp}
    let renderComponent;

    if (componentName) {
        const SelectedComponent = components[componentName]
        if(SelectedComponent){
            renderComponent = <SelectedComponent />
        }
    }

    
    return (
        <>
            <div className={`module_container ${isLogin ? "show" : "hide"}`} onClick={()=>{dispatch(hideModal())}}></div>
                
            <div className={`popUp ${isLogin ? "show" : "hide"} `}>
                <i className="fa-solid fa-circle-xmark" onClick={()=>dispatch(hideModal())}></i>
                <>
                {renderComponent}
                </>
                
             </div>


        </>
    )
}



export default Modal;