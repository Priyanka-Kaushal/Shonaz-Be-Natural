import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store/store';
import CreateAccount from "./auth/signUp.tsx";
import Navbar from './Home/Navbar.js';
import LoginUser from './auth/Login.tsx';
import CartPage from './layoutsOfPages/CartPage.tsx';
import FooterComponent from "./Home/Footer";
import HomePage from "./Home/Home.js";
import ForgotPassword from './auth/ForgotPassword';
import SearchPage from './Layouts/SearchPage';
import CreateProducts from "./components/adminAccess/createProduct.tsx";
import ProductOverview from './layoutsOfPages/ProductOverview.tsx';
import ProductCardList from './Home/prodThumbnailComponent.js';
import ProductCard from "./layoutsOfPages/ProductCard.tsx";
import VerifyUser from  "./auth/emailVerify.tsx";
import FilterSort from './Layouts/FilterAndSorting.tsx';
import Unauthorized from './components/auth/Unauthorized.tsx';
import ProtectedRoute from './components/auth/ProtectedRoutes.tsx';
import CheckoutForm from "./Layouts/useraccount.js";
import ManageProductItems from "./components/adminAccess/manageProduct.tsx"


import { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";

import PrivacyPolicy from "./documentsPages/privacyPolicy.js";
import ShippingDeliveriesPolicy from './documentsPages/shippingPolicy.js';
import TermsOfService from './documentsPages/termsOService.js';
import ContactPage from './documentsPages/contact.js';
import PaymentMethod from './components/Shipping/shipping.js';
import Orderconfirmation from './components/Shipping/orderConfirmation.js';
import AddProductsNew from './components/adminAccess/createProduct.tsx';
import EditProduct from './components/adminAccess/editProduct.tsx';
import BannerSetup from './components/adminAccess/BannerImageModal.js';
import BannerImageView from "./components/adminAccess/BannerImageViewPage.js"
import CategoryListPage from './components/adminAccess/categoryListPage.js';
import CategoryPageBySlug from './collections/CategoryPageBySlug';
import ProductsPage from './collections/ProductPage.js';




function App() {
  return (
    <Provider store={store}>
      <Router>
          <Navbar />
        
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/account/login" element={<LoginUser />} />
              <Route path="/account/register" element={<CreateAccount />} />
              <Route path="/verifyEmail" element={<VerifyUser />} />
              <Route path="/account/forgotPassword" element={<ForgotPassword />} />



             <Route path="/product/:id" element={<ProductOverview />} />

              <Route path="/view-cart" element={<CartPage />} />

           <Route path="/collection" element={<ProductsPage />} />

              {/* <Route path="/products-single" element={<ProductCard />} /> */}
             
              <Route path="/FilterSort" element={<FilterSort />} />
              <Route path="/checkout-form" element={<CheckoutForm />} />
              <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
               <Route path="/Shipping-Deliveries-Policy" element={<ShippingDeliveriesPolicy />} />
               <Route path="/Terms-Of-Service" element= {<TermsOfService/>} />
               <Route path="/contact-page" element= {<ContactPage/>} />
               <Route path="/payment-method" element = {<PaymentMethod/>} />
                <Route path="/payment_confirmation_request" element={<Orderconfirmation />} />
                {/* <Route path="/dashboard/create-product" element={<AddProductsNew/>} /> */}
                <Route path="/dashboard/manageProduct" element={<ManageProductItems/>} />
                <Route path="/dashboard/editProduct" element={<EditProduct/>} />
                <Route path="/dashboard/bannerSetup" element = { <BannerSetup/>} />
                <Route path = "dashboard/bannerview" element = {<BannerImageView /> } />
                <Route path= "/dashboard/categoryListPage" element = {<CategoryListPage/>} />
                <Route path="/collection/:slug" element={<CategoryPageBySlug />} />
                 <Route path="/collection/:slug" element={<CategoryPageBySlug />} />
                <Route
                path="/create-products"
                element={
                  <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                    <CreateProducts />
                   <ManageProductItems />
                  </ProtectedRoute>
                }
              />
              <Route path="/unauthorized" element={<Unauthorized />} />
            </Routes>
          </Box>
          <FooterComponent />
        <Toaster position="top-right" />
      </Router>
    </Provider>
  );
}

export default App;
