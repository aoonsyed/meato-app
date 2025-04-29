import React from 'react';
import LandingSide from "../assets/landingPage/LandingSide.png";
import landingBG from "../assets/landingPage/LandingBG.png";


function AuthLayout({ children }) {
  return (
    <div className="md:flex h-screen w-screen">
      <div 
        className="hidden md:block w-1/2 h-full bg-cover" 
        style={{ backgroundImage: `url(${LandingSide})` }}
      />

      <div className="flex flex-col h-screen bg-white max-w-dvw relative md:flex-grow">
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        <div className="h-1/6">
          <div 
            style={{ backgroundImage: `url(${landingBG})` }}
            className="bg-cover md:bg-contain bg-no-repeat md:bg-repeat-x bg-bottom h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;