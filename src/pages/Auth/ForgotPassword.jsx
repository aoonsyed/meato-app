import React from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { Link, useNavigate } from 'react-router';
import ResetLayout from '../../layouts/ResetLayout';
import ForgotHero from '../../assets/Auth/ForgotHero.png';
import api from '../../services/ApiCall';
import Logo from "../../assets/Auth/Logo.png";
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema } from '../../utils/validationSchemas';

function ForgotPassword() {
    const navigate = useNavigate();
      // Initialize react-hook-form
    const { 
      register, 
      handleSubmit, 
      formState: { errors } 
    } = useForm({
      resolver: yupResolver(forgotPasswordSchema)
    });

    // Form submission handler
    const onSubmit = (data) => {
      // In a real implementation, you would call your API here
      // api.post('accounts/forgotpassword/', {
      //     email: data.email
      // })
      // .then(...)
      // .catch(...)
      
      toast.success("OTP sent to your email!");
      navigate('/verify-code');
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSubmit(onSubmit)();
      }
    };

    return (
      <ResetLayout animation={ForgotHero}>
        <div className='flex flex-col justify-evenly items-center h-full w-full'>
          <RoundedDiv
            height="auto"
            width="90%"
            className='max-w-md py-8 px-6 flex flex-col gap-4'
          >
            <div>
              <img src={Logo} alt="Logo" className='w-1/3 m-auto mb-4' />  
            </div>

            <h2 className='text-center text-xl font-semibold mb-3'>Forgot Password?</h2>
            
            <p className='text-center text-sm text-gray-600 mb-4'>
              Enter your email for the verification process.<br />
              We will send a 4 digits code to your email. <br />
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <InputField
                  placeholder="Email"
                  type="text"
                  width="100%"
                  className={`mb-1 mt-1 ${errors.email ? 'border-red-500' : ''}`}
                  variant={errors.email ? 'red' : 'grey'}
                  {...register('email')}
                  onKeyDown={handleKeyDown}
                  id="email"
                  labelName="Email"
                  compulsory={true}
                />
                {errors.email && <p className="text-red-500 text-xs mb-4">{errors.email.message}</p>}
              </div>
              
              <CustomMainButton
                text="Continue"
                variant="primary"
                width="100%"
                className="mb-4 mt-4"
                type="submit"
              />
            </form>
            
            <div className='text-center text-sm'>
              <Link to="/login" className='text-red-700 font-semibold'>Back to Login</Link>
            </div>
          </RoundedDiv>
        </div>
      </ResetLayout>
    );
}

export default ForgotPassword;