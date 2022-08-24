import Layout from "./Layout"
import Products from "./products"

const Home = ()=>{

    return(
        <Layout
            title="Home Page"
            desc="This Is Book Store"
            
            logo= {true}
        >
            <Products />
        </Layout>
    )
}

export default Home;