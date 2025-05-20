import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";


import LandingPage from "../pages/LandingPages/LandingPage";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import VerifyCode from "../pages/Auth/VerifyCode";
import ResetPassword from "../pages/Auth/ResetPassword";
import ProtectedRoutes from "../components/ProtectedRoutes";
import UnprotectedRoutes from "../components/UnprotectedRoutes"
import LandingLayout from "../layouts/LandingLayout";
import AboutUs from "../pages/LandingPages/AboutUs";
import Services from "../pages/LandingPages/Services";
import ContactUs from "../pages/LandingPages/ContactUs";
import ProductPage from "../pages/product/ProductPage";
import NewsPage from "../pages/News/NewsPage";
import News from "../pages/News/News";
import SellWithUsPge from "../pages/LandingPages/SellWithUsPge";
import MyProfile from "../pages/Profile/MyProfile";



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        

        {/* Unprotected Routes */}
        <Route element={<UnprotectedRoutes/>}>
            <Route path="/login" element={<Login/>} />,
            <Route path="/signup" element={<SignUp/>} />,
            <Route path="/forgot-password" element={<ForgotPassword/>} />,
            <Route path="/verify-code" element={<VerifyCode/>} />,
            <Route path="/reset-password" element={<ResetPassword/>} />,
        </Route>
        {/* Protected Routes */}
        <Route element={<LandingLayout/>}>
            <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<LandingPage/>}/>,
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<ContactUs/>}/>,
                <Route path="/product/:id" element={<ProductPage/>}/>,
                <Route path="/news/" element={<NewsPage/>}/>,
                <Route path="/news/:id" element={<News/>}/>,
                <Route path="/sell" element={<SellWithUsPge/>}/>,
                <Route path="/profile" element={<MyProfile/>}/>,
                
            </Route>
        </Route>



        </>
    )
)

export default router;