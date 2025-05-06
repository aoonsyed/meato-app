import React, { useState, useRef, useEffect } from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { Link, useNavigate } from 'react-router';
import ResetLayout from '../../layouts/ResetLayout';
import ForgotHero from '../../assets/Auth/ForgotHero.png';
import api from '../../services/ApiCall';
import Logo from "../../assets/Auth/Logo.png";
import { toast } from 'react-toastify';

function ForgotPassword() {

    const navigate = useNavigate();
    const handleClick = () => {
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!mail) {
          toast.error("Please enter your email address.");
            return;
        } else if (!emailRegex.test(mail)) {
          toast.error("Please enter a valid email address.");
            return;
        }

        api.post('accounts/forgotpassword/', {
            email: mail})
            .then(response => {
                if (response.status === 200) {
                  toast.success("OTP sent to your email!");
                  navigate('/verify-code');
                } else {
                  toast.error(response.msg || "Something went wrong");
                }
            })
            .catch(error => {
              toast.error("Something went wrong");
            });
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
    <ResetLayout 
    animation={ForgotHero}>
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
          
          <div>
            <InputField
              placeholder="Email"
              type="email"
              width="100%"
              className="mb-5 mt-1"
              value={mail}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              id={"email"}
              labelName="Email"
              compulsory={true}
            />
          </div>
          
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
    </ResetLayout>
  );
}

export default ForgotPassword;