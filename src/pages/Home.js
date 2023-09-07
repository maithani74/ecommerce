import Nav from '../features/navbar/Nav'
import ProductList from '../features/product/component/ProductList';
function Home(){
    return(
        <>
        <Nav>
            <ProductList></ProductList>
        </Nav>
        </>
    )
}
export default Home;