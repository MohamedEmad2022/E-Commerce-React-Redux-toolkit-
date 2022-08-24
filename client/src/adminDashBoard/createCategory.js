import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthentication } from "../core/isAuth";
import Layout from "../core/Layout"
import { creatCategoryAction } from "../store/adminActions";

const CreateCategory = () => {

    const {error} = useSelector(state => state.admin)

    const {token, user} = isAuthentication();

    const categoryNameRef = useRef(null)
    const dispatch = useDispatch();
    const createCategoryHandling = (e) => {
        e.preventDefault();
        

        const data = {
            category: {name: categoryNameRef.current.value},
            userId: user._id,
            token

        }
        dispatch(creatCategoryAction(data))

    }

    return (
        <Layout
            title="Create Category"
            desc="Create Category"
            className="container"
            logo={false}
        >
            <div className="info-con">
                <div className="info-header">
                    <h2>Create Category</h2>
                </div>
                <div className="info-content">
                    <form onSubmit={createCategoryHandling}>
                        <input className="inputs" type="text" placeholder="New Category" ref={categoryNameRef}/>
                        <input className= "inputs_but marg" type="submit" value="Create Category" onClick={createCategoryHandling}/>
                    </form>
                    {
                        error ? <span className="error-text">{error}</span>
                        : 
                        null
                    }
                </div>
            </div>
        </Layout>
    )
}



export default CreateCategory;