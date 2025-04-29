import LandingCenter from "../../assets/landingPage/LandingCenter.png";
import CustomMainButton from "../../components/Custom_Main_Button";
import { useNavigate } from "react-router";
import AuthLayout from "../../layouts/AuthLayout";
import { useRef, useEffect } from "react";

function landingPage() {
  const navigate = useNavigate();

  const btnRef = useRef();

  const handleClick = () => {
    navigate("/login");
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  useEffect(() => {
    if(btnRef.current) {
      btnRef.current.focus();
    }
  
  }, [])
  



  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center flex-grow">
        <div>
          <img src={LandingCenter} className="h-80 md:h-96" alt="Food items illustration" />
        </div>
        <div className="text-center px-8 -translate-y-10">
          <h1 className="font-inter font-semibold text-[22px] text-[#343434] leading-tight">
            Pre-Cut And Pre-Cleaned<br className="md:hidden"/> For Easy Cooking
          </h1>
        </div>
      </div>
      
      <div className="flex justify-center relative -translate-y-15">
        <CustomMainButton
          text="GET STARTED"
          variant="primary"
          fontSize="16px"
          fontWeight="400"
          className="w-64 py-3 focus:outline-none"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          ref={btnRef}
        />
      </div>
    </AuthLayout>
  );
}

export default landingPage;