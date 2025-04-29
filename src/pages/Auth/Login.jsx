import React, { useState } from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { Link } from 'react-router';
import AuthLayout from '../../layouts/AuthLayout';

function Login() {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleEmailChange = (e) => {
                setEmail(e.target.value);
        }

        const handlePasswordChange = (e) => {
                setPassword(e.target.value);
        }

  return (
    <AuthLayout>
      <div className='flex justify-center items-center h-full w-full'>
        <RoundedDiv
          height="auto"
          width="90%"
          className='max-w-md py-20 px-6 flex flex-col gap-4'
        >
          <h2 className='text-center text-xl font-semibold mb-4'>Log In</h2>
          
          <InputField
            placeholder="Email"
            width="100%"
            className="mb-3"
            type='email'
            value={email}
            onChange={handleEmailChange}
          />
          
          <InputField
            placeholder="Password"
            type="password"
            width="100%"
            className="mb-1"
            value={password}
            onChange={handlePasswordChange}
          />
          
          <div className='text-right text-sm mb-4'>
            <Link to="/forgot-password" className='text-gray-500'>Forgot Password?</Link>
          </div>
          
          <CustomMainButton
            text="Log In"
            variant="primary"
            width="100%"
            className="mb-4"
          />
          
          <div className='text-center text-sm'>
            Don't have an account? <Link to="/signup" className='text-red-700 font-semibold'>Sign Up</Link>
          </div>
        </RoundedDiv>
      </div>
    </AuthLayout>
  );
}

export default Login;