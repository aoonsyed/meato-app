import React, { useEffect, useRef } from 'react';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { Link, useNavigate } from 'react-router';
import ResetLayout from '../../layouts/ResetLayout';
import VerifyCodeHero from "../../assets/Auth/VerifyHero.png";
import Logo from "../../assets/Auth/Logo.png";
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { verifyCodeSchema } from '../../utils/validationSchemas';

function VerifyCode() {
  const navigate = useNavigate();
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    // Initialize react-hook-form
  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { errors, isValid },
    getValues
  } = useForm({
    resolver: yupResolver(verifyCodeSchema),
    mode: 'onChange'
  });

  // Form submission handler
  const onSubmit = (data) => {
    const code = `${data.code1}${data.code2}${data.code3}${data.code4}`;
    navigate('/reset-password', { state: { code } });
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !getValues(`code${index + 1}`) && index > 0) {
      inputRefs[index - 1].current.focus();
    }
    if (e.key === 'Enter' && isValid) {
      handleSubmit(onSubmit)();
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    
    if (value) {
      setValue(`code${index + 1}`, value.slice(-1), { shouldValidate: true });
      
      // Move focus to next input
      if (index < 3) {
        setTimeout(() => {
          inputRefs[index + 1].current.focus();
        }, 10);
      }
    } else {
      setValue(`code${index + 1}`, '', { shouldValidate: true });
    }
  };

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  return (
    <ResetLayout animation={VerifyCodeHero}>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <RoundedDiv
          height="auto"
          width="90%"
          className='max-w-md py-10 px-6 flex flex-col gap-4'
        >
          <div>
            <img src={Logo} alt="Logo" className='w-1/3 m-auto mb-4' />  
          </div>

          <h2 className='text-center text-3xl font-semibold mb-2'>Enter 4 Digits Code</h2>
          
          <p className='text-center text-sm text-gray-600 mb-5'>
            Enter the digits code that you received on<br />
            your email.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-center gap-3 mb-8'>
              {[0, 1, 2, 3].map((index) => (
                <div 
                  key={index} 
                  className={`w-14 h-16 border rounded-md flex items-center justify-center ${
                    errors[`code${index + 1}`] ? 'border-red-500' : 'border-red-800'
                  }`}
                >
                  <input
                    {...register(`code${index + 1}`)}
                    ref={(e) => {
                      // Set both react-hook-form ref and our local ref
                      register(`code${index + 1}`).ref(e);
                      inputRefs[index].current = e;
                    }}
                    type="text"
                    className='w-full h-full text-center text-2xl font-bold border-none outline-none'
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    maxLength={1}
                    inputMode='numeric'
                  />
                </div>
              ))}
            </div>
            
            {(errors.code1 || errors.code2 || errors.code3 || errors.code4) && (
              <p className="text-red-500 text-xs text-center mb-4">Please enter all four digits</p>
            )}
            
            <div className='flex justify-center items-center'>
              <CustomMainButton
                text="Continue"
                variant="primary"
                width="70%"
                className="mb-4 m-auto"
                type="submit"
              />
            </div>
          </form>
        </RoundedDiv>
      </div>
    </ResetLayout>
  );
}

export default VerifyCode;