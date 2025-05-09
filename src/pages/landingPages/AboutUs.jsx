import React from 'react'
import {
  aboutSteak1,
  aboutSteak2,
  deal,
  freeDelivery,
  handShake,
  returnIcon,
  satisfaction,
  tag,
  vegies,
} from "../../assets/about/index"
import StatBox from "../../components/StatBox"

function AboutUs() {
  return (
    <>
    {/* About Us Landing Start */}
    <section className="py-12 px-4 md:py-16 lg:py-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">

          <div className="w-full md:w-1/2 relative px-4 md:px-6 lg:px-8 mb-10 md:mb-0">
            <div className="relative mx-auto md:mx-0">

              <div className="relative z-10 max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] ml-0 md:ml-4">
                <img 
                  src={aboutSteak2} 
                  alt="Cooked meat with sides" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
              

              <div className="absolute z-20 max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] top-[30%] -right-[10%] md:-right-[5%]">
                <img 
                  src={aboutSteak1} 
                  alt="Premium steak cut" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          
          <div className="w-full md:w-1/2 pt-16 md:pt-0 px-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#343434] mb-6">
              We deliver fresh meat for your kitchen.
            </h2>
            <p className="text-[#343434] font-medium mb-4">
              Our journey started with a goal to offer premium meat cuts with unmatched 
              freshness, trusted quality, and speedy delivery. From farm to doorstep, our 
              products are hygienically packed, thoughtfully sourced, and crafted for the 
              home chef's delight.
            </p>
            <p className="text-[#636363]">
              We believe that great cooking starts with great ingredients. Our team, known for precision 
              and passion, ensures every order is packed with care and flavor to make your meals truly 
              memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* About Us Landing End */}

    {/* What we provide Start */}
    <section className="py-12 px-4 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <h2 className="font-bold text-center mb-16 text-4xl">
          What we provide
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Best Prices & Offers */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 flex items-center justify-center">
              <img src={tag} alt="Best Prices" className="w-16 h-auto"/>
              </div>
            <h3 className="text-xl font-bold mb-3 text-center text-[#343434]">Best Prices & Offers</h3>
            <p className="text-[18px] leading-[24px] font-medium text-center text-[#636363] max-w-xs">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
            </p>
          </div>
          
          {/* Wide Assortment */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 flex items-center justify-center">
              <img src={handShake} alt="Wide Assortment" className="w-16 h-auto" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-[#343434]">Wide Assortment</h3>
            <p className="text-[18px] leading-[24px] font-medium text-center text-[#636363] max-w-xs">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
            </p>
          </div>
          
          {/* Free Delivery */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 flex items-center justify-center">
              <img src={freeDelivery} alt="Free Delivery" className="w-16 h-auto" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-[#343434]">Free Delivery</h3>
            <p className="text-[18px] leading-[24px] font-medium text-center text-[#636363] max-w-xs">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
            </p>
          </div>
          
          {/* Easy Returns */}
          <div className="flex flex-col items-center mt-12 md:mt-16">
            <div className="w-24 h-24 mb-6 flex items-center justify-center">
              <img src={returnIcon} alt="Easy Returns" className="w-16 h-auto" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-[#343434]">Easy Returns</h3>
            <p className="text-[18px] leading-[24px] font-medium text-center text-[#636363] max-w-xs">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
            </p>
          </div>
          
          {/* 100% Satisfaction */}
          <div className="flex flex-col items-center mt-12 md:mt-16">
            <div className="w-24 h-24 mb-6 flex items-center justify-center">
              <img src={satisfaction} alt="100% Satisfaction" className="w-16 h-auto" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-[#343434]">100% Satisfaction</h3>
            <p className="text-[18px] leading-[24px] font-medium text-center text-[#636363] max-w-xs">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
            </p>
          </div>
          
          {/* Great Daily Deal */}
          <div className="flex flex-col items-center mt-12 md:mt-16">
            <div className="w-24 h-24 mb-6 flex items-center justify-center">
              <img src={deal} alt="Great Daily Deal" className="w-16 h-auto" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-[#343434]">Great Daily Deal</h3>
            <p className="text-[18px] leading-[24px] font-medium text-center text-[#636363] max-w-xs">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* What we provide end */}

    {/* Banner 1 */}
    <section className="py-12 md:py-16 lg:py-20 bg-[#fff5f5]">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 flex-grow lg:pr-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#343434] mb-6">
              A little insight for our valued customer
            </h2>
            <p className="text-[#636363] mb-8">
              We believe that great meals begin with premium ingredients, delivered with 
              care. Our team is dedicated to quality, service, and speed making every order a 
              truly satisfying experience from start to finish.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <StatBox number="3" label="Locations" />
              <StatBox number="1995" label="Founded" />
              <StatBox number="65+" label="Staff Members" />
              <StatBox number="100%" label="Satisfied Customers" />
            </div>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
            <img 
              src={vegies} 
              alt="Chef preparing fresh vegetables" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    {/* Banner 1 end */}

    {/* Banner 2 */}

    </>
  )
}

export default AboutUs