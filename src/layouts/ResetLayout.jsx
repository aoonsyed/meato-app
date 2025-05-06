import React from 'react'

function ResetLayout({ children, animation }) {
  return (
    <div className='h-screen w-screen font-roboto md:flex'>
        <div className='w-1/2 h-full hidden md:flex md:items-center md:justify-center'>
            <img src={animation} alt="Hero Section" />
        </div>

        <div className='h-screen bg-white max-w-dvw relative md:flex-grow'>
            {children}
        </div>


    </div>
  )
}

export default ResetLayout