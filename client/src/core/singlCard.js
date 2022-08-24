import Card from "./card"
import { useSelector, useDispatch } from "react-redux";
import Layout from "./Layout";
import { useEffect } from "react";
import { getRelatedProducts, getSinglProduct } from "../store/productSlice";
import { useParams } from "react-router-dom";



const SinglCard = () => {

    const { id } = useParams()
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getSinglProduct(id))
        dispatch(getRelatedProducts(id))

    }, [dispatch, id])
    const { singl, isLodding, relatedProducts, success } = useSelector(state => state.products);
    console.log(isLodding)
    return (
        <>
            {
                success ?
                    <Layout
                        title={singl.name}
                        desc={singl.description}
                        logo={false}

                    >
                        <>
                            <>

                                <div className="container">
                                    <Card item={singl} />
                                </div>



                                {success &&
                                    <>
                                        
                                        <div className="container">
                                        <h2 className="big-text">Related Products</h2>

                                            {
                                                relatedProducts.length > 0 ?
                                                    relatedProducts.map((item) => {
                                                        return <Card item={item} key={item._id} />
                                                    })
                                                    :
                                                    <p>No Related Products</p>
                                            }
                                        </div>
                                    </>
                                }

                            </>





                        </>
                    </Layout>
                    : "Looding...."
            }
        </>
    )
}

export default SinglCard;