import React, { useState, useRef, useEffect } from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { Link, useNavigate } from 'react-router';
import AuthLayout from '../../layouts/AuthLayout';
import Frame from '../../assets/Auth/ForgotHero.png';

function ForgotPassword() {

    const [mailMsg, setMailMsg] = useState('');
    const navigate = useNavigate();
    const handleClick = () => {
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!mail) {
            setMailMsg("Please enter your email address.");
            return;
        } else if (!emailRegex.test(mail)) {
            setMailMsg("Please enter a valid email address.");
            return;
        }

    
        navigate("/verify-code");
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    const [mail, setMail] = useState('');
    const handleChange = (e) => {
        setMail(e.target.value);
    }

    

  return (
    <AuthLayout>
      <div className='flex flex-col justify-evenly items-center h-full w-full'>
        <div>
            <img src={Frame} alt="" />
        </div>
        <RoundedDiv
          height="auto"
          width="90%"
          className='max-w-md py-8 px-6 flex flex-col gap-4'
        >
          <h2 className='text-center text-xl font-semibold mb-3'>Forgot Password?</h2>
          
          <p className='text-center text-sm text-gray-600 mb-4'>
            Enter your email for the verification process.<br />
            We will send a 4 digits code to your email. <br />
            {mailMsg && <span className='text-red-500'>{mailMsg}</span>}
          </p>
          
          <InputField
            placeholder="Email"
            type="email"
            width="100%"
            className="mb-5"
            value={mail}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          
          <CustomMainButton
            text="Continue"
            variant="primary"
            width="100%"
            className="mb-4"
            onClick={handleClick}
          />
          
          <div className='text-center text-sm'>
            <Link to="/login" className='text-red-700 font-semibold'>Back to Login</Link>
          </div>
        </RoundedDiv>
      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;