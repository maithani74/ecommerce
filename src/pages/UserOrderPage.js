import Nav from "../features/navbar/Nav";
import UserOrders from "../features/user/component/UserOrders";

export default function UserOrderPage() {
  return (
    <div>
      <Nav>
        <h1 className="mx-auto text-2xl">My Orders</h1>
        <UserOrders />
      </Nav>
    </div>
  );
}
