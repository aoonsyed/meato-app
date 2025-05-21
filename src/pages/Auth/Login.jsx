import React, { useEffect, useState } from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { Link } from 'react-router';
import AuthLayout from '../../layouts/AuthLayout';
import authService from '../../services/AuthServices';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authSlice';
import { useNavigate } from 'react-router';
import Logo from "../../assets/Auth/Logo.png";
import toast from 'react-hot-toast';


function Login() {

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const navigate = useNavigate();

        const dispatch = useDispatch();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleEmailChange = (e) => {
                setEmail(e.target.value);
        }

        const handlePasswordChange = (e) => {
                setPassword(e.target.value);
        }

        const handleKeyDown = (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleLogin();
          }
        }

        const handleLogin = () => {
          
                const data = {
                        email: email,
                        password: password
                };
                // authService.login(data, dispatch)
                //         .then(response => {
                //           toast.success("Login successful!");
                //           navigate('/dashboard');
                //         })
                //         .catch(error => {
                //           toast.error(error.message || "Login failed");
                //         });

                if (!email) {
                  toast.error("Please enter your email address.");
                    return;
                } else if (!emailRegex.test(email)) {
                  toast.error("Please enter a valid email address.");
                    return;
                }
                if (!password) {
                  toast.error("Please enter your password.");
                    return;
                }
                toast.promise(
                ()=>new Promise((resolve, reject) => {
                    dispatch(login({
    "userid": 7,
    "email": "muhammadraza123@gmail.com",
    "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxODQ3NzIxODIxLCJpYXQiOjE3NDc3MjE1MjEsImp0aSI6IjZlYzllOTBmNTRhOTQxMTU5Nzg4ODM2NTZkZTE5MGYyIiwidXNlcl9pZCI6N30.mjspOtnnk_Zdfj30II1WUo5v706D_qSldtToc6Z7ChI",
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc3OTI1NzUyMSwiaWF0IjoxNzQ3NzIxNTIxLCJqdGkiOiIwMTI4YmYzNjY3NmQ0MjhjYjhmYWUxOGU4YjRlY2I1NSIsInVzZXJfaWQiOjd9.9zRzF7RS68H6WT8nVsnb3WgfTRYbAK2TtNkYOOpYkFM"
}));
                    resolve()
                    navigate('/');

        }),
                {
                  loading: 'Saving...',
                  success: <b>Login Successful!</b>,
                }
                );

                


        }


  return (
    <AuthLayout>
      <div className='flex justify-center items-center h-full w-full'>
        <RoundedDiv
          height="auto"
          width="70%"
          className='py-6 px-6 flex flex-col font-roboto md:max-w-sm'
        >
          <div>
            <img src={Logo} alt="Logo" className='w-1/3 m-auto mb-4' />
          </div>

          <div className='text-center mb-4'>
          <h2 className='text-center text-4xl mb-2 font-bold'>Login</h2>
          <p className='font-normal'>Welcome to Meat Expert</p>
          </div>
          <InputField
            placeholder="Enter your email"
            width="100%"
            className="mb-3"
            type='email'
            value={email}
            onChange={handleEmailChange}
            onKeyDown={handleKeyDown}
            id="email"
            labelName="Email"
            compulsory={true}
            labelClassName='my-1'
          />
          <InputField
            placeholder="Enter your password"
            type="password"
            width="100%"
            className="mb-1"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyDown}
            id="password"
            labelName={"Password"}
            compulsory={true}
            labelClassName='my-1'
          />
          
          <div className='text-right text-xs my-4 font-medium font-roboto'>
            <Link to="/forgot-password" className='text-[#343434]'>Forgot Password?</Link>
          </div>
          
          <CustomMainButton
            text="Log In"
            variant="primary"
            width="100%"
            className="mb-4"
            onClick={handleLogin}
            fontSize='20px'
            fontWeight='600'
          />
          
          <div className='text-center text-xs font-normal'>
            Don't have an account? <Link to="/signup" className='text-red-700 underline'>Sign Up</Link>
          </div>
        </RoundedDiv>
      </div>
    </AuthLayout>
  );
}

export default Login;