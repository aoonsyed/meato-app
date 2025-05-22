import React from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { Link } from 'react-router';
import AuthLayout from '../../layouts/AuthLayout';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { useNavigate } from 'react-router';
import Logo from "../../assets/Auth/Logo.png";
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/validationSchemas';

function Login() {
        const navigate = useNavigate();
        const dispatch = useDispatch();
          // Initialize react-hook-form
        const { 
          register, 
          handleSubmit, 
          formState: { errors } 
        } = useForm({
          resolver: yupResolver(loginSchema)
        });

        // Form submission handler
        const onSubmit = (data) => {
          toast.promise(
            () => new Promise((resolve) => {
              dispatch(login({
                "userid": 7,
                "email": "muhammadraza123@gmail.com",
                "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxODQ3NzIxODIxLCJpYXQiOjE3NDc3MjE1MjEsImp0aSI6IjZlYzllOTBmNTRhOTQxMTU5Nzg4ODM2NTZkZTE5MGYyIiwidXNlcl9pZCI6N30.mjspOtnnk_Zdfj30II1WUo5v706D_qSldtToc6Z7ChI",
                "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc3OTI1NzUyMSwiaWF0IjoxNzQ3NzIxNTIxLCJqdGkiOiIwMTI4YmYzNjY3NmQ0MjhjYjhmYWUxOGU4YjRlY2I1NSIsInVzZXJfaWQiOjd9.9zRzF7RS68H6WT8nVsnb3WgfTRYbAK2TtNkYOOpYkFM"
              }));
              resolve();
              navigate('/');
            }),
            {
              loading: 'Logging in...',
              success: <b>Login Successful!</b>,
            }
          );
        };

        // Handle Enter key press
        const handleKeyDown = (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit(onSubmit)();
          }
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
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              placeholder="Enter your email"
              width="100%"
              className={`mb-1 ${errors.email ? 'border-red-500' : ''}`}
              type='email'
              variant={errors.email ? 'red' : 'grey'}
              {...register('email')}
              onKeyDown={handleKeyDown}
              id="email"
              labelName="Email"
              compulsory={true}
              labelClassName='my-1'
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 mb-2">{errors.email.message}</p>}
            
            <InputField
              placeholder="Enter your password"
              type="password"
              width="100%"
              className={`mb-1 ${errors.password ? 'border-red-500' : ''}`}
              variant={errors.password ? 'red' : 'grey'}
              {...register('password')}
              onKeyDown={handleKeyDown}
              id="password"
              labelName={"Password"}
              compulsory={true}
              labelClassName='my-1'
            />
            {errors.password && <p className="text-red-500 text-xs mt-1 mb-2">{errors.password.message}</p>}
            
            <div className='text-right text-xs my-4 font-medium font-roboto'>
              <Link to="/forgot-password" className='text-[#343434]'>Forgot Password?</Link>
            </div>
            
            <CustomMainButton
              text="Log In"
              variant="primary"
              width="100%"
              className="mb-4"
              onClick={handleSubmit(onSubmit)}
              fontSize='20px'
              fontWeight='600'
              type="submit"
            />
          </form>
          
          <div className='text-center text-xs font-normal'>
            Don't have an account? <Link to="/signup" className='text-red-700 underline'>Sign Up</Link>
          </div>
        </RoundedDiv>
      </div>
    </AuthLayout>
  );
}

export default Login;