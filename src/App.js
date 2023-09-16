import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/Loginpage";
import SignUppage from "./pages/SignUppage";
import { Link, RouterProvider,createBrowserRouter } from "react-router-dom";
import { Cart } from "./features/cart/Cart";
import CartPage from './pages/CartPage'
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/component/Protected";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { fetchItemsByUserIdAsync } from "./features/cart/CartSlice";
import PageNotFound from "./pages/404";
import OrderSuccess from "./pages/OrderSuccess";
import UserOrders from "./features/user/component/UserOrders";
import UserOrderPage from "./pages/UserOrderPage";
import UserProfile from './features/user/component/UserProfile'
import UserProfilePage from "./pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Logout from "./features/auth/component/Logout";
import ForgotPasswordPage from './pages/ForgotPasswordPage'
const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected><Home /></Protected> ,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUppage />,
  },
  {
    path: "/cart",
    element: 
    <Protected><CartPage/></Protected> 
    
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
  {
    path: "/productDetail/:id",
    element:
    <Protected> <ProductDetailPage/></Protected> 
  },
  {
    path:"*",
    element: <PageNotFound/>
  },
  {
    path:'/order-success/:id',
    element:<OrderSuccess/>
  },
  {
    path:'/orders',
    element:<UserOrderPage/>
  },{
    path:'/profile',
    element: <UserProfilePage/>
  },
  {
    path:'/logout',
    element:<Logout/>
  },{
    path:'/forgot-password',
    element: <ForgotPasswordPage/>
  }
]);
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
    }
    
  },[dispatch,user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
