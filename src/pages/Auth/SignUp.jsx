import React,{useState} from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { Link } from 'react-router';
import AuthLayout from '../../layouts/AuthLayout';

function SignUp() {

    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

  return (
    <AuthLayout>
      <div className='flex justify-center items-center h-full w-full'>
        <RoundedDiv
          height="auto"
          width="90%"
          className='max-w-md py-8 px-6 flex flex-col gap-4 md:translate-y-10'
        >
          <h2 className='text-center text-xl font-semibold mb-4'>Create Account</h2>
          
          <InputField
            placeholder="First Name"
            width="100%"
            className="mb-3"
            value={signupData.firstName}
            onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
          />
          <InputField
            placeholder="Last Name"
            width="100%"
            className="mb-3"
            value={signupData.lastName}
            onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
          />

          <InputField
            placeholder="Email"
            type="email"
            width="100%"
            className="mb-3"
            value={signupData.email}
            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
          />

          <InputField
            placeholder="Phone Number"
            type="tel"
            width="100%"
            className="mb-3"
            value={signupData.phoneNumber}
            onChange={(e) => setSignupData({ ...signupData, phoneNumber: e.target.value })}
          />
          
          <InputField
            placeholder="Password"
            type="password"
            width="100%"
            className="mb-3"
            value={signupData.password}
            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
          />

          <InputField
            placeholder="Confirm Password"
            type="password"
            width="100%"
            className="mb-3"
            value={signupData.confirmPassword}
            onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
          />
          
          <CustomMainButton
            text="Sign Up"
            variant="primary"
            width="100%"
            className="mt-2 mb-4"
            onClick={() => {

              console.log(signupData);
            }}
          />
          
          <div className='text-center text-sm'>
            Already have an account? <Link to="/login" className='text-red-700 font-semibold'>Log In</Link>
          </div>
        </RoundedDiv>
      </div>
    </AuthLayout>
  );
}

export default SignUp;