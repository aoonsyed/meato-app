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
        <Route element={<LandingLayout/>}>
            <Route path="/" element={<LandingPage/>}/>,
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/services" element={<Services/>}/>

        </Route>


        {/* Protected Routes */}
        {/* <Route element={<ProtectedRoutes />}>
        </Route> */}

        </>
    )
)

export default router;