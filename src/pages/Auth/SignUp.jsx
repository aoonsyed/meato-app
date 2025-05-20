import React,{useState} from 'react';
import InputField from '../../components/InputField';
import RoundedDiv from '../../components/RoundedDiv';
import CustomMainButton from '../../components/Custom_Main_Button';
import { Link } from 'react-router';
import AuthLayout from '../../layouts/AuthLayout';
import authService from '../../services/AuthServices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Logo from "../../assets/Auth/Logo.png";
import toast from 'react-hot-toast';


function SignUp() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [signupData, setSignupData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
    });

    const handleSignup = () => {
      if (!signupData.first_name || !signupData.last_name || !signupData.email || 
        !signupData.username || !signupData.password) {
        toast.warning('Please fill in all required fields');
        return;
    }

    if (signupData.password !== confirmPassword) {
        toast.error('Passwords do not match!');
        return;
    }
    
    // toast.info('Processing signup...', { autoClose: 2000 });
    
    // authService.signup(signupData)
    //   .then(response => {
    //     toast.success('Signup successful! Please log in.');
    //     setTimeout(() => navigate('/login'), 2000);
    //   })
    //   .catch(error => {
    //     toast.error(error.message || 'Signup failed. Please try again.');
    //   });

    toast.promise(
                ()=>(new Promise((resolve, reject) => (
                  setTimeout(() => {
                  resolve()
                  navigate('/login')
                  }, 1000)
                ))),
                {
                  loading: 'Saving...',
                  success: <b>Signup Successful!</b>,
                }
                );
        
    }

  return (
    <AuthLayout>
      <div className='flex justify-center items-center h-full w-full'>
        <RoundedDiv
          height="auto"
          width="90%"
          className='max-w-md px-12 py-6 md:py-10 flex flex-col'
        >

        <div>
          {/* <img src={Logo} alt="Logo" className='m-auto mb-4 ' /> */}
        </div>

        <h2 className='text-center text-2xl mb-2 font-bold'>Sign Up</h2>
        <p className='font-normal text-center text-sm'>Let's get things done faster and smater</p>
          
          <div className='flex flex-col gap-1 my-3'>
            <InputField
              placeholder="First Name"
              width="100%"
              className=""
              value={signupData.first_name}
              onChange={(e) => setSignupData({ ...signupData, first_name: e.target.value })}
              id="first_name"
              labelName="First Name"
              compulsory={true}
            />
            <InputField
              placeholder="Last Name"
              width="100%"
              className=""
              value={signupData.last_name}
              onChange={(e) => setSignupData({ ...signupData, last_name: e.target.value })}
              id="last_name"
              labelName="Last Name"
              compulsory={true}
            />
            <InputField
              placeholder="Email"
              type="email"
              width="100%"
              className=""
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              id="email"
              labelName="Email"
              compulsory={true}
            />
            <InputField
              placeholder="Username"
              type="text"
              width="100%"
              className=""
              value={signupData.username}
              onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
              id="username"
              labelName="Username"
              compulsory={true}
            />
            
            <InputField
              placeholder="Password"
              type="password"
              width="100%"
              className=""
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              id="password"
              labelName="Password"
              compulsory={true}
            />
            <InputField
              placeholder="Confirm Password"
              type="password"
              width="100%"
              className=""
              value={confirmPassword}
              onChange={(e) =>{
                setConfirmPassword(e.target.value)
              }}
              id="confirm_password"
              labelName="Confirm Password"
              compulsory={true}
            />
          </div>
          
          <CustomMainButton
            text="Sign Up"
            variant="primary"
            width="100%"
            className="mt-2 mb-4"
            onClick={handleSignup}
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