import React from "react";
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
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
