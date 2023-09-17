import Nav from '../features/navbar/Nav'
import ProductList from '../features/product/component/ProductList';
import AdminProductList from '../features/admin/component/AdminProductList'
function AdminProductListPage(){
    return(
        <>
        <Nav>
            <AdminProductList/>
        </Nav>
        </>
    )
}
export default AdminProductListPage;