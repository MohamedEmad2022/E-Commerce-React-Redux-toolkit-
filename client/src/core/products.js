import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByArrival, getProductBySyle } from "../store/productSlice";
import Card from "./card";


const ProductsList = () => {

    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getProductBySyle())
        dispatch(getProductByArrival())


    }, [dispatch])
    const { isLodding, productsBySyle, productsByArrival } = useSelector(state => state.products);





    return (
        <>
            
            <div className="container-1">
            <div className="big-text"><h2>Best Syllar</h2></div>
                {(!isLodding) ? productsBySyle.map((item) => {
                    return (

                        <Card item={item} viewBtn={true} addbtn={true} key={item._id} />
                    )


                }) : "Loding...."}

            </div>
            
            <div className="container-1">
            <div className="big-text"><h2>Latest Arrival</h2></div>
                {(!isLodding) ? productsByArrival.map((item) => {
                    return (

                        <Card item={item} viewBtn={true} addbtn={true} key={item._id} />
                    )


                }) : "Loding...."

                }
            </div>

        </>
    )

}



export default ProductsList;