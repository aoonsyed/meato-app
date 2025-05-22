import React from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { useNavigate } from 'react-router';
import ResetLayout from '../../layouts/ResetLayout';
import ResetHero from '../../assets/Auth/ResetHero.png';
import { useLocation } from 'react-router';
import Logo from '../../assets/Auth/Logo.png';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordSchema } from '../../utils/validationSchemas';

function ResetPassword() {
  const location = useLocation();
  const code = location.state?.code || '';
  const navigate = useNavigate();
    // Initialize react-hook-form
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(resetPasswordSchema)
  });

  // Form submission handler
  const onSubmit = (data) => {
    // In a real implementation, you would call your API here
    // api.post('accounts/changepassword/', {
    //   "otp": code,
    //   "password": data.password
    // })
    // .then(...)
    // .catch(...)
    
    toast.success('Password reset successfully!');
    navigate('/login');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <ResetLayout animation={ResetHero}>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <RoundedDiv
          height="auto"
          width="90%"
          className='max-w-md py-10 px-6 flex flex-col gap-4'
        >
          <div>
            <img src={Logo} alt="Logo" className='w-1/3 m-auto mb-4' />  
          </div>
          <h2 className='text-center text-3xl font-semibold mb-2'>Reset Password?</h2>
          
          <p className='text-center text-sm text-gray-600 mb-5'>
            Set a new password for your account so<br />
            you can login and access all the features.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <InputField
                placeholder="Password"
                type="password"
                width="100%"
                className={`mb-1 ${errors.password ? 'border-red-500' : ''}`}
                variant={errors.password ? 'red' : 'grey'}
                {...register('password')}
                onKeyDown={handleKeyDown}
                id="password"
                labelName="Password"
                compulsory={true}
                labelClassName='my-1'
              />
              {errors.password && <p className="text-red-500 text-xs mt-1 mb-2">{errors.password.message}</p>}
            </div>
            
            <div>
              <InputField
                placeholder="Confirm Password"
                type="password"
                width="100%"
                className={`mb-1 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                variant={errors.confirmPassword ? 'red' : 'grey'}
                {...register('confirmPassword')}
                onKeyDown={handleKeyDown}
                id="confirm_password"
                labelName="Confirm Password"
                compulsory={true}
                labelClassName='my-1'
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 mb-4">{errors.confirmPassword.message}</p>}
            </div>
            
            <CustomMainButton
              text="Reset Password"
              variant="primary"
              width="100%"
              className="mb-4 mt-4"
              type="submit"
            />
          </form>
        </RoundedDiv>
      </div>
    </ResetLayout>
  );
}

export default ResetPassword;