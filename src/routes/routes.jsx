import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";


import LandingPage from "../pages/landingPages/LandingPage";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import VerifyCode from "../pages/Auth/VerifyCode";
import ResetPassword from "../pages/Auth/ResetPassword";
import ProtectedRoutes from "../components/ProtectedRoutes";
import UnprotectedRoutes from "../components/UnprotectedRoutes"



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<LandingPage/>}/>,

        {/* Unprotected Routes */}
        <Route element={<UnprotectedRoutes/>}>
        <Route path="/login" element={<Login/>} />,
        <Route path="/signup" element={<SignUp/>} />,
        <Route path="/forgot-password" element={<ForgotPassword/>} />,
        <Route path="/verify-code" element={<VerifyCode/>} />,
        <Route path="/reset-password" element={<ResetPassword/>} />,
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<LandingPage />} />       // Replace Dashboard
        </Route>

        </>
    )
)

export default router;