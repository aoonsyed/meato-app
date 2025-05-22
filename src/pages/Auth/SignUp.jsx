import React from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { Link } from 'react-router';
import AuthLayout from '../../layouts/AuthLayout';
import authService from '../../services/AuthServices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Logo from "../../assets/Auth/Logo.png";
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../../utils/validationSchemas';

function SignUp() {
    const navigate = useNavigate();
      // Initialize react-hook-form
    const { 
      register, 
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: yupResolver(signupSchema)
    });

    // Form submission handler
    const onSubmit = (data) => {
      // Remove confirm_password as it's not needed for the API
      const { confirm_password, ...signupData } = data;
      
      toast.promise(
        () => (new Promise((resolve) => {
          // In a real implementation, you would call your signup API here
          // authService.signup(signupData)
          setTimeout(() => {
            resolve();
            navigate('/login');
          }, 1000);
        })),
        {
          loading: 'Creating your account...',
          success: <b>Signup Successful!</b>,
        }
      );
    };

    return (
      <AuthLayout>
        <div className='flex justify-center items-start min-h-full w-full py-8 px-4'>
          <RoundedDiv
            height="auto"
            width="90%"
            className='max-w-md px-12 py-6 md:py-10 flex flex-col'
          >
            <div>
              {/* <img src={Logo} alt="Logo" className='m-auto mb-4 ' /> */}
            </div>

            <h2 className='text-center text-2xl mb-2 font-bold'>Sign Up</h2>
            <p className='font-normal text-center text-sm'>Let's get things done faster and smarter</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1 my-3'>
              <InputField
                placeholder="First Name"
                width="100%"
                variant={errors.first_name ? "red" : "grey"}
                {...register('first_name')}
                id="first_name"
                labelName="First Name"
                compulsory={true}
              />
              {errors.first_name && <p className="text-red-500 text-xs ">{errors.first_name.message}</p>}
              
              <InputField
                placeholder="Last Name"
                width="100%"
                variant={errors.last_name ? "red" : "grey"}
                {...register('last_name')}
                id="last_name"
                labelName="Last Name"
                compulsory={true}
              />
              {errors.last_name && <p className="text-red-500 text-xs ">{errors.last_name.message}</p>}
              
              <InputField
                placeholder="Email"
                type="text"
                width="100%"
                variant={errors.email ? "red" : "grey"}
                {...register('email')}
                id="email"
                labelName="Email"
                compulsory={true}
              />
              {errors.email && <p className="text-red-500 text-xs ">{errors.email.message}</p>}
              
              <InputField
                placeholder="Username"
                type="text"
                width="100%"
                variant={errors.username ? "red" : "grey"}
                {...register('username')}
                id="username"
                labelName="Username"
                compulsory={true}
              />
              {errors.username && <p className="text-red-500 text-xs ">{errors.username.message}</p>}
              
              <InputField
                placeholder="Password"
                type="password"
                width="100%"
                variant={errors.password ? "red" : "grey"}
                {...register('password')}
                id="password"
                labelName="Password"
                compulsory={true}
              />
              {errors.password && <p className="text-red-500 text-xs ">{errors.password.message}</p>}
              
              <InputField
                placeholder="Confirm Password"
                type="password"
                width="100%"
                variant={errors.confirm_password ? "red" : "grey"}
                {...register('confirm_password')}
                id="confirm_password"
                labelName="Confirm Password"
                compulsory={true}
              />
              {errors.confirm_password && <p className="text-red-500 text-xs ">{errors.confirm_password.message}</p>}
            
              <CustomMainButton
                text="Sign Up"
                variant="primary"
                width="100%"
                className="mt-4 mb-4"
                type="submit"
              />
            </form>
            
            <div className='text-center text-sm'>
              Already have an account? <Link to="/login" className='text-red-700 font-semibold'>Log In</Link>
            </div>
          </RoundedDiv>
        </div>
      </AuthLayout>
    );
}

export default SignUp;