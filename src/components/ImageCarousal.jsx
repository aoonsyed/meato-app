import React from 'react'
import Slider from 'react-slick';
import Custom_Main_Button from "./Custom_Main_Button"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";

function ImageCarousal({carousal}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ],
        customPaging: i => (
            <div className='h-3 w-3 rounded-full bg-gray-300 hover:bg-red-600'></div>
        ),
        appendDots: dots => (
            <div className='flex justify-center mt-12 w-full'>
                <div className='flex justify-center items-center space-x-3 -m-20'>
                    {dots}
                </div>
            </div>
        ),
    };
  return (
    <div className="relative">
       <Slider {...settings} className="category-slider">
            {carousal.map((image, index) => (
                <div key={index} className="relative">
                    <img src={image} alt={`Carousal Image ${index}`} className='h-[70vh] w-full object-cover mx-auto rounded-2xl'/>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className='text-white font-bold text-center max-w-2xl px-4'>
                            <h1 className='text-2xl md:text-4xl lg:text-5xl pl-4 border-l-4 border-[#AE1F25] inline-block text-left'>Why Choose Our Meat?</h1>
                            <span className='block my-5 text-lg md:text-2xl'>Get premium cuts delivered in 60 minutes fresh, fast, flavorful.</span>
                            <Custom_Main_Button text="Order Now" />
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default ImageCarousal