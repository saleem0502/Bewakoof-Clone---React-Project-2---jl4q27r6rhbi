
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import LogIn from './Components/UserPage/LogIn'
import SignUp from './Components/UserPage/SignUp'
import Footer from './Components/Footer/Footer'
import SearchResults from './Components/Filter/SearchResults'
import FilteredPage from './Components/Filter/FilteredPage'
import Cart from "./Components/Cart/Cart";
import Men from './Components/Cloths/Men'
import { Women } from './Components/Cloths/Women'
import ProductDetail from './Components/Products/ProductDetail'
import Wishlist from './Components/Wishlist/Wishlist'
import { useEffect } from "react";
import { useStateProvider } from './Utils/StateProvider'
import UserAccount from './Components/UserPage/UserAccount'
import Profile from './Components/UserPage/Profile'
import Order from './Components/Order/Order'
import OrderDetails from './Components/UserPage/OrderDetail'

function App() {
  const location = useLocation();
  const [, dispatch] = useStateProvider();
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    const userName = localStorage.getItem("userName");
    const wish = JSON.parse(localStorage.getItem("products")) || [];

    if (jwtToken && userName) {
      dispatch({ type: "SET_NAME", payload: userName });
      dispatch({ type: "SET_TOKEN", payload: jwtToken });

      const wishlists = wish?.filter((obj) => obj.wishList === true);
      dispatch({ type: "SET_WISHLISTPRODUCTS", payload: wishlists });
    }
  }, [dispatch]);
  

  return (
    <div className="App">
    {location.pathname === "/login" ? (
      <LogIn />
    ) : location.pathname === "/signup" ? (
      <SignUp />
      ) : location.pathname === "/forgot" ? (
        <Forgot />
    ) : (
    <>
    <Header />
    
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/product" element={<ProductDetail />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/filter" element={<FilteredPage />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/account" element={<UserAccount />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/buy" element={<Order />} />
      <Route path="/orders" element={<OrderDetails />} />
     </Routes>
     <Footer />
    </>
    )}
     </div>
  )
}

export default App

