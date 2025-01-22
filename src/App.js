import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store/store';
import LoginUser from './auth/Login';
import Navbar from './Layouts/Navbar';
import HomePage from "./Components/Home";
import CreateAccount from "./auth/SignUp";
import ForgotPassword from './auth/ForgotPassword';
import Footer from "./Layouts/Footer";
import NewArrivals from './collections/NewArrivals';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page route */}
          <Route path="/shop/new-arrivals" element={<NewArrivals />} />
          <Route path="/account/login" element={<LoginUser />} />
          <Route path="/account/register" element={<CreateAccount />} />
          <Route path="/account/forgotPassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
