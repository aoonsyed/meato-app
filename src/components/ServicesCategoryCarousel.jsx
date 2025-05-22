import React from 'react'
import CategoryCircle from "./CategoryCircle";
import BeefIcon from "../assets/landingPage/beef.png";
import ChickenIcon from "../assets/landingPage/chicken.png";
import MuttonIcon from "../assets/landingPage/mutton.png";
import SeafoodIcon from "../assets/landingPage/seafood.png";
import TurkeyIcon from "../assets/landingPage/turkey.png";
import ReadyToCookIcon from "../assets/landingPage/ready-to-cook.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";

function ServicesCategoryCarousal({setSelectedCategory, prodRef}) {

   function handleCategoryClick(e) {
        // console.log(e);
        setSelectedCategory(e.target.alt);
        prodRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
   }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
            }
          }
        ],
        customPaging: i => (
          <div className='h-3 w-3 rounded-full bg-gray-300 hover:bg-red-600'></div>
        ),
        appendDots: dots => (
          <div className='flex justify-center mt-12 w-full'>
            <div className='flex justify-center items-center space-x-3'>
              {dots}
            </div>
           </div>
        ),
      };

  return (
    <>
        <div className='py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold'>Browse by Category</h2>
        </div>
        
        <Slider {...settings} className="category-slider pb-10">
          <CategoryCircle icon={BeefIcon} title="Beef" onClick={handleCategoryClick} />
          <CategoryCircle icon={ChickenIcon} title="Chicken"  onClick={handleCategoryClick} />
          <CategoryCircle icon={MuttonIcon} title="Mutton"  onClick={handleCategoryClick} />
          <CategoryCircle icon={SeafoodIcon} title="Seafood"  onClick={handleCategoryClick} />
          <CategoryCircle icon={TurkeyIcon} title="Turkey"  onClick={handleCategoryClick} />
          <CategoryCircle icon={ReadyToCookIcon} title="Ready-to-Cook"  onClick={handleCategoryClick} />
          {/* Repeat elements to demonstrate carousel */}
          <CategoryCircle icon={BeefIcon} title="Beef" onClick={handleCategoryClick} />
          <CategoryCircle icon={ChickenIcon} title="Chicken"  onClick={handleCategoryClick} />
          <CategoryCircle icon={MuttonIcon} title="Mutton"  onClick={handleCategoryClick} />
          <CategoryCircle icon={SeafoodIcon} title="Seafood"  onClick={handleCategoryClick} />
          <CategoryCircle icon={TurkeyIcon} title="Turkey"  onClick={handleCategoryClick} />
          <CategoryCircle icon={ReadyToCookIcon} title="Ready-to-Cook"  onClick={handleCategoryClick} />
        </Slider>
        
        
      </div>
    </div>
    </>
  )
}

export default ServicesCategoryCarousal