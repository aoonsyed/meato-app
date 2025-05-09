import React, { useState, useEffect } from 'react'
import Carousal1 from "../../assets/landingPage/Services/Carousal1.jpg"
import ImageCarousal from '../../components/ImageCarousal'
import CategoryCarousal from "../../components/CategoryCarousal"
import ProductGrid from '../../components/ProductGrid'
import muttonChopsImage from '../../assets/products/mutton-chops.png';

function Services() {

    const carousal = [
        Carousal1,
        Carousal1,
        Carousal1,
        Carousal1,
        Carousal1,
        Carousal1,
    ]

     const wholeChicken = [
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
      ];
     const bonelessChickenBreast = [
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
      ];

      const curryCutChicken = [
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
    ]

    const chickenMince = [
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
    ]


    return(
        <>
        <div className='container mx-auto overflow-hidden'>
            <div className='mx-10'>
                <div className='mt-32'>
                    <ImageCarousal carousal={carousal}/>
                </div>
            </div>
            <div>
                <CategoryCarousal/>
            </div>
            
                <div className="my-8">
                    <ProductGrid 
                        products={wholeChicken} 
                        title="Whole Chicken" 
                    />
                </div>
                <div className="my-8">
                    <ProductGrid 
                        products={curryCutChicken} 
                        title="Curry Cut Chicken" 
                    />
                </div>
                <div className="my-8">
                    <ProductGrid 
                        products={bonelessChickenBreast} 
                        title="Boneless Chicken Breast" 
                    />
                </div>
                <div className="my-8">
                    <ProductGrid 
                        products={chickenMince} 
                        title="Chicken Mince" 
                    />
                </div>
        </div>
        </>
    )
}

export default Services
