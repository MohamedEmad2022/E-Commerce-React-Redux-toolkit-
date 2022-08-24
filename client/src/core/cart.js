
import { useSelector } from "react-redux"

import Card from "./card"
import Layout from "./Layout"

const Cart = () => {
    const { cart, success } = useSelector(state => state.cart)
    
   
    return (
        <Layout
            title="Cart Items"
            desc="Can Add Or Remove Items From Cart"
            className="container"
            logo={false}
        >
            {
                success && cart.length > 0  ?
                    cart.map((item) => {
                        return (
                            <Card item={item} removeBtn={true} updateBtn={true} key={item._id}/>
                        )

                    })
                    :
                    <div>No Item</div>

            }
        </Layout>
    )

}


export default Cart