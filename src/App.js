import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store/store';
import ProductPage from './components/auth/productPage.tsx';
import Navbar from './Layouts/Navbar';
import LoginUser from './auth/Login.tsx';
// signup, forgot password, reset Password
import { Toaster } from "react-hot-toast";
import CartPage from './components/CartPage.tsx';

import Footer from "./Layouts/Footer";

import HomePage from "./components/Home.js";
import CreateAccount from "./auth/signUp.tsx";
import ForgotPassword from './auth/ForgotPassword';
// 
import NewArrivals from './collections/newArrival.tsx';
import SearchPage from './Layouts/SearchPage';
// import SHOPACCESSORIES from './collections/SHOPACCESSORIES';
// import EditProduct from "./Components/Admin/EditProducts";
import CreateProducts from "./components/admin/createProduct.tsx";
// import ManageProductItems from './components/admin/MangageProducts.tsx';

import ProductOverview from './Layouts/productOverview.tsx';
import EditProduct from './components/admin/editProduct.tsx';


// import ProductList from './collections/productList.ts';
import ShopGirls from './collections/shopGirls.tsx';
import ManageProductItemsnew from './components/admin/manageProduct.tsx';
import ProductCardList from './collections/prodComponent.tsx';

import ProductCard from "./layouts/productCard.tsx";
import VerifyUser from  "./auth/emailVerify.tsx";


import Spinner from './Layouts/Spinner.js';
import FilterSort from './components/FilterAndSorting.tsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* links of the pages */}
          <Route  path = "/product-page" element = {<ProductPage />} />
          <Route path="/shop/new-arrivals" element={<NewArrivals />} />
          <Route path = "/" element = {<SearchPage />} />
          {/* <Route path = "/SHOPACCESSORIES" element = {<SHOPACCESSORIES />} /> */}
          <Route path="/account/login" element={<LoginUser />} />
          <Route path="/account/register" element={<CreateAccount />} />
          <Route path="/verifyEmail" element={<VerifyUser />} />
          <Route path="/account/forgotPassword" element={<ForgotPassword />} />
          <Route  path = "/create-product" element = {<CreateProducts />} />
          <Route  path = "/product-Overview" element = {<ProductOverview />} />
          <Route  path = "/edit-product" element = {<EditProduct />} />
          <Route  path = "/cart-Page" element = {<CartPage />} />
          <Route path="/shopGirls" element={<ShopGirls />} />
          <Route path="/manage-products" element={<ManageProductItemsnew />} />
          <Route path="/products" element={<ProductCardList />} />
          

          <Route path="/products-single" element={<ProductCard />} />
          <Route path="/FilterSort" element={<FilterSort />} />
          
          
        </Routes>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
}

export default App;
