import React, { useState } from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { useNavigate } from 'react-router';
import ResetLayout from '../../layouts/ResetLayout';
import ResetHero from '../../assets/Auth/ResetHero.png';
import { useLocation } from 'react-router';
import api from '../../services/ApiCall';
import Logo from '../../assets/Auth/Logo.png';
import toast from 'react-hot-toast';

function ResetPassword() {
  const location = useLocation();
  const code = location.state?.code || '';
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleReset = () => {

    if (!password || !confirmPassword) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    // api.post('accounts/changepassword/', {
    //   "otp": code,
    //   "password": password
    // })
    // .then(response => {
    //   if (response.status === 200) {
    //     toast.success('Password reset successfully!');
    //     navigate('/login');
    //   } else if (response.status === 400) {
    //     toast.error('Invalid OTP. Please try again.');
    //     navigate('/verify-code');
    //   } 
    //   else {
    //     toast.error(response.msg || 'An error occurred. Please try again later.');
    //   }
    // })

    toast.success('Password reset successfully!');
        navigate('/login');

  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleReset();
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
          
          
          <div>
            <InputField
              placeholder="Password"
              type="password"
              width="100%"
              className="mb-3 mt-1"
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
              id={"password"}
              labelName={"Password"}
              compulsory={true}
            />
          </div>
          
          <div>
            <InputField
              placeholder="Confirm Password"
              type="password"
              width="100%"
              className="mb-5 mt-1"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onKeyDown={handleKeyDown}
              id={"confirm_password"}
              labelName={"Confirm Password"}
              compulsory={true}
            />
          </div>
          
          <CustomMainButton
            text="Reset Password"
            variant="primary"
            width="100%"
            className="mb-4"
            onClick={handleReset}
          />
        </RoundedDiv>
      </div>
    </ResetLayout>
  );
}

export default ResetPassword;