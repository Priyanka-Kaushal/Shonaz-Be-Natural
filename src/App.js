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
import NewArrivals from './collections/newArrival.tsx';
import SearchPage from './Layouts/SearchPage';
// import SHOPACCESSORIES from './collections/SHOPACCESSORIES';
// import EditProduct from "./Components/Admin/EditProducts";
import CreateProducts from "./components/admin/createProduct.tsx";
// import ManageProductItems from './components/admin/MangageProducts.tsx';

import ProductOverview from './Layouts/productOverview\.tsx';
import EditProduct from './components/admin/editProduct.tsx';

// import ProductList from './collections/productList.ts';
import ShopGirls from './collections/shopGirls.tsx';
import ManageProductItemsnew from './components/admin/manageProduct.tsx';
import ProductCardList from './collections/prodComponent.tsx';

import ProductCard from "./layouts/productCard.tsx";
import VerifyUser from  "./auth/emailVerify.tsx";
import Spinner from './Layouts/Spinner.js';
import FilterSort from './components/FilterAndSorting.tsx';
import Unauthorized from './components/auth/Unauthorized.tsx';
import ProtectedRoute from './components/auth/ProtectedRoutes.tsx';

function App() {
return ( <Provider store={store}> <Router> <Navbar /> <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/product-page" element={<ProductPage />} />
<Route path="/shop/new-arrivals" element={<NewArrivals />} />
<Route path="/account/login" element={<LoginUser />} />
<Route path="/account/register" element={<CreateAccount />} />
<Route path="/verifyEmail" element={<VerifyUser />} />
<Route path="/account/forgotPassword" element={<ForgotPassword />} />
<Route path="/product-Overview" element={<ProductOverview />} />
<Route path="/cart-Page" element={<CartPage />} />
<Route path="/shopGirls" element={<ShopGirls />} />
<Route path="/products" element={<ProductCardList />} />
<Route path="/products-single" element={<ProductCard />} />
<Route path="/FilterSort" element={<FilterSort />} />
<Route path="/unauthorized" element={<Unauthorized />} />


      {/* Protected admin/superadmin routes */}
      <Route path="/create-product" element={
        <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
          <CreateProducts />
        </ProtectedRoute>
      } />

      <Route path="/edit-product" element={
        <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
          <EditProduct />
        </ProtectedRoute>
      } />

      <Route path="/manage-products" element={
        <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
          <ManageProductItemsnew />
        </ProtectedRoute>
      } />
    </Routes>
  </Router>
</Provider>

);
}

export default App;
