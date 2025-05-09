import React from 'react';
import BG from "../../assets/landingPage/raw-meat-table.png"
import Custom_Main_Button from '../../components/Custom_Main_Button';
import OrderImg from "../../assets/landingPage/easy-order.png";
import DeliveryImg from "../../assets/landingPage/delivery.png";
import QualityImg from "../../assets/landingPage/quality.png";
import CategoryCarousal from '../../components/CategoryCarousal';
import knife from "../../assets/products/knife.png";
import steak from "../../assets/products/steak.png";
import bites from "../../assets/products/bites.png";
import Delivery from "../../assets/products/DeliveryIcon.png";
import Top from "../../assets/products/TopIcon.png";
import Online from "../../assets/products/OnlineIcon.png";
import Banner from "../../assets/products/BannerImg.jpg"
import PlayStore from "../../assets/products/PlayStore.png"
import AppStore from "../../assets/products/AppStore.png"
import muttonChopsImage from '../../assets/products/mutton-chops.png';
import ProductGrid from '../../components/ProductGrid';




function LandingPage() {  

  const popularProducts = [
    {
      id: 1,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 2,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 3,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 4,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 5,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 6,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 7,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 8,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 1,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 2,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 3,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 4,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 5,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 6,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 7,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 8,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 8,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 8,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
    {
      id: 8,
      name: 'Mutton Chops',
      weight: '1kg',
      price: 90.00,
      originalPrice: 110.00,
      image: muttonChopsImage,
    },
  ];

  return (
   <>

    {/* Landing Hero  */}
    <div className='relative h-screen w-full max-h-screen flex flex-col justify-center items-center'>
      <div className='absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat -z-10'
        style={{ 
          backgroundImage: `url(${BG})`}} 
      >
        <div className='absolute top-0 left-0 w-full h-full bg-[#000000] opacity-60'/>
      </div>

      <div className='z-10 text-center px-4 text-white font-bold max-w-6xl md:m-10 m-5'>
        <h1 className='text-3xl md:text-7xl md:mb-10 mb-5'>Quality Meat, Just How You Like</h1>
        <h2 className='md:text-4xl'>Delivering premium uncooked meats to your door where quality meets your passion for great cooking.</h2>
      </div>

      <div className='z-10 mt-4'>
        <Custom_Main_Button text='Get Started'/>
      </div>
    </div>      
    {/* Landing Hero End */}
  
    {/* Landing Content */}
    <div className='py-16 w-full'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold'>Your Favourite Food Delivery Partner</h2>
      </div>

      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

          <div className='flex flex-col items-center text-center'>
            <div className='mb-4 h-48 flex items-center justify-center'>
              <img src={OrderImg} alt="Easy ordering illustration" className='h-auto max-h-full' />
            </div>
            <h3 className='text-xl font-bold mb-2'>Easy To Order</h3>
            <p>You only need a few steps in ordering food</p>
          </div>

          
          <div className='flex flex-col items-center text-center'>
            <div className='mb-4 h-48 flex items-center justify-center'>
              <img src={DeliveryImg} alt="Fast delivery illustration" className='h-auto max-h-full' />
            </div>
            <h3 className='text-xl font-bold mb-2'>Fastest Delivery</h3>
            <p>Delivery that is always ontime even faster</p>
          </div>

          
          <div className='flex flex-col items-center text-center'>
            <div className='mb-4 h-48 flex items-center justify-center'>
              <img src={QualityImg} alt="Best quality illustration" className='h-auto max-h-full' />
            </div>
            <h3 className='text-xl font-bold mb-2'>Best Quality</h3>
            <p>Not only fast for us quality is also number one</p>
          </div>
        </div>
      </div>
    </div>
    {/* Landing Content End */}

    {/* Browse by Category Start */}
    <CategoryCarousal/>
    {/* Browse by Category End */}

    {/* Popular Products Start */}
    <ProductGrid
    title={"Popular Products"}
    products={popularProducts}
    />
    {/* Popular Products End */}

    {/* Banner 1 Start */}
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:px-20 py-6">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Image gallery */}
            <div className="md:w-5/12 p-4 flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 h-11/12 pr-0 md:pr-2 mb-2 md:mb-0 flex-grow">
                <img 
                  src={knife}
                  alt="Chef with knife"
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="w-full md:w-4/12 flex flex-row md:flex-col mt-5">
                <div className="w-1/2 md:w-full p-1">
                  <img 
                    src={steak} 
                    alt="Prepared meat dish" 
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <div className="w-1/2 md:w-full p-1 mt-5">
                  <img 
                    src={bites} 
                    alt="Raw meat" 
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
            
            {/* Right side - Text content */}
            <div className="md:w-7/12 p-4 lg:pl-20">
              <h2 className="text-6xl font-bold text-gray-900 mb-4">Top-Quality Meat to Your Door</h2>
              <p className="text-gray-600 mb-6">
                Our curated butcher shop delivers premium cuts to your door in no time. Enjoy fresh, hygienically packed meat without stepping out.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                   <img src={Delivery} alt="" />
                  <p className="ml-3 text-base font-medium text-[#343434]">Delivery within 60 minutes</p>
                </div>
                
                <div className="flex items-center">
                  <img src={Top} alt="" />
                  <p className="ml-3 text-base font-medium text-[#343434]">Top Quality at Best Prices</p>
                </div>
                
                <div className="flex items-center">
                  <img src={Online} alt="" /> 
                  <p className="ml-3 text-base font-medium text-[#343434]">Online Services Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Banner 1 Ends */}

    {/* Banner 2 Start */}
    <div className='w-full bg-[#FFC6C720] py-16 px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/2 mb-8 md:mb-0 md:pr-8'>
          <div className='max-w-lg'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#AE1F25] mb-10'>Put us in your pocket</h1>
            <p className='text-[#636363] font-medium text-base md:text-lg mb-8'>
              Download our app from google play or app store and you don't have to be worry about your food anymore.
            </p>
          </div>
          <div className='flex flex-wrap gap-4'>
            <a href="https://www.apple.com/app-store/" className='inline-block' target='blank'>
              <img src={AppStore} alt="Download on the App Store" className='h-12 md:h-16 w-auto' />
            </a>
            <a href="https://play.google.com/store/games?hl=en_US" className='inline-block' target='blank'>
              <img src={PlayStore} alt="Get it on Google Play" className='h-12 md:h-16 w-auto' />
            </a>
          </div>
        </div>

        <div className='w-full md:w-1/2'>
          <div className='relative max-w-2xl mx-auto'>
            <img 
              src={Banner} 
              alt="Meato mobile app with food items" 
              className='rounded-2xl w-full h-auto shadow-lg'
            />
          </div>
        </div>
      </div>
    </div>
    {/* Banner 2 Ends */}

   </>
  );
}

export default LandingPage;
