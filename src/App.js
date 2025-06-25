// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from 'react-redux';
// import store from './redux/store/store';
// import CreateAccount from "./auth/signUp.tsx";
// import ProductPage from './components/auth/productPage.tsx';
// import Navbar from './Layouts/Navbar';
// import LoginUser from './auth/Login.tsx';
// // signup, forgot password, reset Password
// import { Toaster } from "react-hot-toast";
// import CartPage from './components/CartPage.tsx';
// import Footer from "./Layouts/Footer.js";
// import HomePage from "./components/Home.js";

// import ForgotPassword from './auth/ForgotPassword';
// import NewArrivals from './collections/newArrival.tsx';
// import SearchPage from './Layouts/SearchPage';
// // import SHOPACCESSORIES from './collections/SHOPACCESSORIES';
// // import EditProduct from "./Components/Admin/EditProducts";
// // 
// import CreateProducts from "./components/admin/createProduct.tsx";
// // import ManageProductItems from './components/admin/MangageProducts.tsx';

// import ProductOverview from './Layouts/productOverview\.tsx';
// import EditProduct from './components/admin/editProduct.tsx';

// // import ProductList from './collections/productList.ts';
// import ShopGirls from './collections/shopGirls.tsx';
// import ManageProductItemsnew from './components/admin/manageProduct.tsx';
// import ProductCardThumbnails from './collections/prodComponent.tsx';

// import ProductCard from "./layouts/productCard.tsx";
// import VerifyUser from  "./auth/emailVerify.tsx";
// import Spinner from './Layouts/Spinner.js';
// import FilterSort from './components/FilterAndSorting.tsx';
// import Unauthorized from './components/auth/Unauthorized.tsx';
// import ProtectedRoute from './components/auth/ProtectedRoutes.tsx';
// import AccountPage from "./Layouts/useraccount.js";
// import Sidebar from './components/sidebar.tsx';
// import GoogleSignUp from "./auth/googleSignUp.js"; // Make sure this import path is correct



// function App() {
// return ( <Provider store={store}> 
// <Router> 
//   <Navbar /> 
//    <Sidebar />
// <Routes>
// <Route path="/" element={<HomePage />} />
// <Route path="/product-page" element={<ProductPage />} />
// <Route path="/shop/new-arrivals" element={<NewArrivals />} />
// <Route path="/account/login" element={<LoginUser />} />
// <Route path="/account/register" element={<CreateAccount />} />
// <Route path="/verifyEmail" element={<VerifyUser />} />
// <Route path="/account/forgotPassword" element={<ForgotPassword />} />
// <Route path="/product-Overview" element={<ProductOverview />} />
// <Route path="/cart-Page" element={<CartPage />} />
// <Route path="/shopGirls" element={<ShopGirls />} />
// <Route path="/products" element={<ProductCardThumbnails />} />
// <Route path="/products-single" element={<ProductCard />} />
// <Route path="/FilterSort" element={<FilterSort />} />
// <Route path= "/account-details"element = {<AccountPage/>} />
// {/* <Route path= "/SignUpWithGoogle"element = {<SignUpWithGoogle/>} /> */}
// <Route path="/auth/google" element={<GoogleSignUp />} />
//  <Route
//   path="/create-products"
//   element={
//     <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
//       <CreateProducts />
//     </ProtectedRoute>
//   }
// />

//   <Route path="/unauthorized" element={<Unauthorized />} /> 

//       {/* <Route path="/edit-product" element={
//         <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
//           <EditProduct />
//         </ProtectedRoute>
//       } /> */}

//       {/* <Route path="/manage-products" element={
//         <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
//           <ManageProductItemsnew />
//         </ProtectedRoute>
//       } /> */}
//     </Routes>
//     <Footer />
//   </Router>
// </Provider>

// );
// }

// export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store/store';
import CreateAccount from "./auth/signUp.tsx";
import ProductPage from './components/auth/productPage.tsx';
import Navbar from './Layouts/Navbar';
import LoginUser from './auth/Login.tsx';
import CartPage from './components/CartPage.tsx';
import FooterComponent from "./Layouts/Footer";
import HomePage from "./components/Home.js";
import ForgotPassword from './auth/ForgotPassword';
import NewArrivals from './collections/newArrival.tsx';
import SearchPage from './Layouts/SearchPage';
import CreateProducts from "./components/admin/createProduct.tsx";
import ProductOverview from './Layouts/productOverview.tsx';
import ShopGirls from './collections/shopGirls.tsx';
import ProductCardList from './collections/prodComponent.tsx';
import ProductCard from "./layouts/productCard.tsx";
import VerifyUser from  "./auth/emailVerify.tsx";
import FilterSort from './components/FilterAndSorting.tsx';
import Unauthorized from './components/auth/Unauthorized.tsx';
import ProtectedRoute from './components/auth/ProtectedRoutes.tsx';
import AccountPage from "./Layouts/useraccount.js";

// import Sidebar from './components/sidebar.tsx';
import { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";

import PrivacyPolicy from "./documentsPages/privacyPolicy.js";
import ShippingDeliveriesPolicy from './documentsPages/shippingPolicy.js';
import TermsOfService from './documentsPages/termsOService.js';
import ContactPage from './documentsPages/contact.js';
import PaymentMethod from './components/Shipping/shipping.js';
import Orderconfirmation from './components/Shipping/orderConfirmation.js';
import AddProductsNew from './components/admin/createProduct.tsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Navbar />
          {/* <Sidebar /> */}
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product-page" element={<ProductPage />} />
              <Route path="/shop/new-arrivals" element={<NewArrivals />} />
              <Route path="/account/login" element={<LoginUser />} />
              <Route path="/account/register" element={<CreateAccount />} />
              <Route path="/verifyEmail" element={<VerifyUser />} />
              <Route path="/account/forgotPassword" element={<ForgotPassword />} />
              <Route path="/product-Overview" element={<ProductOverview />} />
              <Route path="/view-cart" element={<CartPage />} />
              <Route path="/shopGirls" element={<ShopGirls />} />
              <Route path="/products" element={<ProductCardList />} />
              <Route path="/products-single" element={<ProductCard />} />
              <Route path="/FilterSort" element={<FilterSort />} />
              <Route path="/account-details" element={<AccountPage />} />
              <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
               <Route path="/Shipping-Deliveries-Policy" element={<ShippingDeliveriesPolicy />} />
               <Route path="/Terms-Of-Service" element= {<TermsOfService/>} />
               <Route path="/contact-page" element= {<ContactPage/>} />
               <Route path="/payment-method" element = {<PaymentMethod/>} />
                <Route path="/payment_confirmation_request" element={<Orderconfirmation />} />
                <Route path="/dashboard/create-product" element={<AddProductsNew/>} />
              <Route
                path="/create-products"
                element={
                  <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                    <CreateProducts />
                  </ProtectedRoute>
                }
              />
              <Route path="/unauthorized" element={<Unauthorized />} />
            </Routes>
          </Box>
          <FooterComponent />
        </Box>
        <Toaster position="top-right" />
      </Router>
    </Provider>
  );
}

export default App;
