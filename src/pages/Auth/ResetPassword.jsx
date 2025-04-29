import React, { useState } from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { useNavigate } from 'react-router';
import AuthLayout from '../../layouts/AuthLayout';
import ResetHero from '../../assets/Auth/ResetHero.png';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errorMsg) setErrorMsg('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (errorMsg) setErrorMsg('');
  };

  const handleReset = () => {

    if (!password || !confirmPassword) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }




    navigate('/login');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleReset();
    }
  };

  return (
    <AuthLayout>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='mb-8'>
          <img src={ResetHero} alt="Reset Password" />
        </div>
        <RoundedDiv
          height="auto"
          width="90%"
          className='max-w-md py-10 px-6 flex flex-col gap-4'
        >
          <h2 className='text-center text-xl font-semibold mb-2'>Reset Password</h2>
          
          <p className='text-center text-sm text-gray-600 mb-5'>
            Set a new password for your account so<br />
            you can login and access all the features.
          </p>
          
          {errorMsg && (
            <p className='text-center text-sm text-red-500 mb-2'>{errorMsg}</p>
          )}
          
          <InputField
            placeholder="Password"
            type="password"
            width="100%"
            className="mb-3"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyDown}
          />
          
          <InputField
            placeholder="Confirm Password"
            type="password"
            width="100%"
            className="mb-5"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onKeyDown={handleKeyDown}
          />
          
          <CustomMainButton
            text="Reset Password"
            variant="primary"
            width="100%"
            className="mb-4"
            onClick={handleReset}
          />
        </RoundedDiv>
      </div>
    </AuthLayout>
  );
}

export default ResetPassword;