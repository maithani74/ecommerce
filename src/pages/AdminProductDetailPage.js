import Nav from "../features/navbar/Nav";
import ProductDetail from "../features/product/component/ProductDetail";
import AdminProductDetail from '../features/admin/component/AdminProductDetail'
function AdminProductDetailtPage() {
  return (
    <div>
      <Nav>
        <AdminProductDetail/>
      </Nav>
    </div>
  );
}
export default AdminProductDetailtPage;
