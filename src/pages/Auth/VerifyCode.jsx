import React, { useState, useRef, useEffect } from 'react';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { Link, useNavigate } from 'react-router';
import AuthLayout from '../../layouts/AuthLayout';
import VerifyCodeHero from "../../assets/Auth/VerifyHero.png";

function VerifyCode() {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const navigate = useNavigate();
  
  const handleChange = (index, value) => {
    const newCode = [...code];
    const digit = value.replace(/[^0-9]/g, '');
    newCode[index] = digit;
    setCode(newCode);
    
    if (digit && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
    if (e.key === 'Enter') {
      handleContinue();
    }
  };

  const handleContinue = () => {
    if (code.every(digit => digit !== '')) {
      navigate('/reset-password');
    }
  };

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  return (
    <AuthLayout>
      <div className='flex flex-col justify-center items-center h-full w-full'>

        <div className='mb-8'>
                    <img src={VerifyCodeHero} alt="" />
                </div>
        <RoundedDiv
          height="auto"
          width="90%"
          className='max-w-md py-10 px-6 flex flex-col gap-4'
        >
          <h2 className='text-center text-xl font-semibold mb-2'>Enter 4 Digits Code</h2>
          
          <p className='text-center text-sm text-gray-600 mb-5'>
            Enter the digits code that you received on<br />
            your email.
          </p>
          
          <div className='flex justify-center gap-3 mb-8'>
            {[0, 1, 2, 3].map((index) => (
              <div 
                key={index} 
                className='w-14 h-16 border border-red-800 rounded-md flex items-center justify-center'
              >
                <input
                  ref={inputRefs[index]}
                  type="text"
                  className='w-full h-full text-center text-2xl font-bold border-none outline-none'
                  value={code[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  maxLength={1}
                  inputMode='numeric'
                />
              </div>
            ))}
          </div>
          
          <CustomMainButton
            text="Continue"
            variant="primary"
            width="70%"
            className="mb-4 m-auto"
            onClick={handleContinue}
          />
        </RoundedDiv>
      </div>
    </AuthLayout>
  );
}

export default VerifyCode;