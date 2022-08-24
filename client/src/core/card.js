
import moment from "moment"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartActions";


const Card = ({ item, viewBtn, updateBtn, removeBtn, addbtn }) => {



    const dispatch = useDispatch();


    const showViewBtn = () => {
        if (viewBtn) {
            return <Link className="inputs_but inputs_but-nobackg" to={`singlCard/${item._id}`}
            >
                View product
            </Link>
        }
    }
    const showAddBtn = () => {
        if (addbtn) {
            return <button className="inputs_but"
                onClick={() => dispatch(addItem(item))}>Add To Cart
            </button>
        }
    }
    const ShowRemovebtn = () => {
        if (removeBtn) {
            return <input type="button" className="inputs_but inputs_but-nobackg" value="Remove" onClick={() => dispatch(removeItem(item._id))} />
        }
    }
    const showUpdateBtn = () => {
        if (updateBtn) {
            <input type="number" />
        }
    }

    // const idHand = (id) => {

    //     dispatch(getSinglProduct(id))
    //     dispatch(getRelatedProducts(id))
    // }


    return (

        <div className="card" key={item._id}>
            <div className="card-header">
                <h2 className="card-title">{item.name}</h2>

            </div>
            <div className="card-body">
                <div className="card-img">
                    <img src={`http://localhost:8000/api/product/photo/${item._id}`} alt={item.name} />
                </div>
                <div className="card-p">
                    <p className="card-text">{item.description.length > 20 ? item.description.substring(0, 30) + "..." : item.description}</p>
                    <p className="card-text">category : {item.category.name}</p>
                    <p className="card-text">Price: {item.price}</p>
                    <p className="card-text">{moment(item.createdAt).fromNow()}</p>
                    {showViewBtn()}
                    {showUpdateBtn()}
                    {ShowRemovebtn()}
                    {showAddBtn()}
                </div>



            </div>
        </div>


    )
}


export default Card;