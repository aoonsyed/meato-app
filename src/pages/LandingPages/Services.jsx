import React, { useState, useEffect, useRef } from 'react'
import Carousal1 from "../../assets/landingPage/Services/Carousal1.jpg"
import ImageCarousal from '../../components/ImageCarousal'
import CategoryCarousal from "../../components/CategoryCarousal"
import ServicesCategoryCarousel from "../../components/ServicesCategoryCarousel"
import ProductGrid from '../../components/ProductGrid'
import muttonChopsImage from '../../assets/products/mutton-chops.png';

function Services() {

    const [selectedCategory,setSelectedCategory] = useState("Chicken");

    const carousal = [
        Carousal1,
        Carousal1,
        Carousal1,
        Carousal1,
        Carousal1,
        Carousal1,
    ]

    const categories = {
        "Beef": [
          {"Premium Cuts": [{
            id: 1,
            name: 'Beef Ribeye',
            weight: '500g',
            price: 299.00,
            originalPrice: 349.00,
            image: muttonChopsImage,
          },
          {
            id: 2,
            name: 'Beef Tenderloin',
            weight: '500g',
            price: 329.00,
            originalPrice: 379.00,
            image: muttonChopsImage,
          },
          {
            id: 3,
            name: 'Beef Sirloin',
            weight: '500g',
            price: 279.00,
            originalPrice: 319.00,
            image: muttonChopsImage,
          },
          {
            id: 4,
            name: 'T-Bone Steak',
            weight: '400g',
            price: 399.00,
            originalPrice: 449.00,
            image: muttonChopsImage,
          }]},
          {"Everyday Cuts": [{
            id: 1,
            name: 'Beef Curry Cut',
            weight: '500g',
            price: 229.00,
            originalPrice: 259.00,
            image: muttonChopsImage,
          },
          {
            id: 2,
            name: 'Beef Mince',
            weight: '450g',
            price: 199.00,
            originalPrice: 249.00,
            image: muttonChopsImage,
          },
          {
            id: 3,
            name: 'Beef Bones',
            weight: '500g',
            price: 129.00,
            originalPrice: 149.00,
            image: muttonChopsImage,
          },
          {
            id: 4,
            name: 'Beef Brisket',
            weight: '500g',
            price: 269.00,
            originalPrice: 299.00,
            image: muttonChopsImage,
          }]}
        ],
        
        "Chicken": [
          {"Whole Chicken": [
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
      ]},
          {"Curry Cut Chicken": [
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
    ]},
          {"Boneless Chicken Breast": [
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
      ]},
          {"Chicken Mince": [
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
    ]},
        ],

        "Mutton": [
          {"Premium Cuts": [{
            id: 1,
            name: 'Mutton Chops',
            weight: '500g',
            price: 599.00,
            originalPrice: 649.00,
            image: muttonChopsImage,
          },
          {
            id: 2,
            name: 'Mutton Leg',
            weight: '500g',
            price: 529.00,
            originalPrice: 579.00,
            image: muttonChopsImage,
          },
          {
            id: 3,
            name: 'Mutton Shoulder',
            weight: '500g',
            price: 549.00,
            originalPrice: 599.00,
            image: muttonChopsImage,
          },
          {
            id: 4,
            name: 'Mutton Ribs',
            weight: '500g',
            price: 499.00,
            originalPrice: 549.00,
            image: muttonChopsImage,
          }]},
          {"Everyday Cuts": [{
            id: 1,
            name: 'Mutton Curry Cut',
            weight: '500g',
            price: 479.00,
            originalPrice: 529.00,
            image: muttonChopsImage,
          },
          {
            id: 2,
            name: 'Mutton Mince',
            weight: '450g',
            price: 559.00,
            originalPrice: 599.00,
            image: muttonChopsImage,
          },
          {
            id: 3,
            name: 'Mutton Bones',
            weight: '500g',
            price: 249.00,
            originalPrice: 279.00,
            image: muttonChopsImage,
          }]}
        ],

        "Turkey": [
          {"Whole Turkey": [{
            id: 1,
            name: 'Whole Turkey',
            weight: '4-5kg',
            price: 1599.00,
            originalPrice: 1799.00,
            image: muttonChopsImage,
          },
          {
            id: 2,
            name: 'Turkey Breast',
            weight: '1kg',
            price: 699.00,
            originalPrice: 799.00,
            image: muttonChopsImage,
          },
          {
            id: 3,
            name: 'Turkey Drumsticks',
            weight: '800g',
            price: 599.00,
            originalPrice: 649.00,
            image: muttonChopsImage,
          }]}
        ],

        "Seafood": [
          {"Fish": [{
            id: 1,
            name: 'Pomfret',
            weight: '500g',
            price: 499.00,
            originalPrice: 549.00,
            image: muttonChopsImage,
          },
          {
            id: 2,
            name: 'Rohu',
            weight: '1kg',
            price: 299.00,
            originalPrice: 349.00,
            image: muttonChopsImage,
          },
          {
            id: 3,
            name: 'Katla',
            weight: '1kg',
            price: 349.00,
            originalPrice: 399.00,
            image: muttonChopsImage,
          },
          {
            id: 4,
            name: 'Salmon',
            weight: '300g',
            price: 699.00,
            originalPrice: 799.00,
            image: muttonChopsImage,
          }]},
          {"Prawns & Crabs": [{
            id: 1,
            name: 'Tiger Prawns',
            weight: '250g',
            price: 399.00,
            originalPrice: 449.00,
            image: muttonChopsImage,
          },
          {
            id: 2,
            name: 'Jumbo Prawns',
            weight: '250g',
            price: 499.00,
            originalPrice: 549.00,
            image: muttonChopsImage,
          },
          {
            id: 3,
            name: 'Mud Crab',
            weight: '500g',
            price: 649.00,
            originalPrice: 699.00,
            image: muttonChopsImage,
          }]}
        ],

        "Ready-to-Cook": [
          {"Marinated": [{
            id: 1,
            name: 'Tandoori Chicken',
            weight: '500g',
            price: 249.00,
            originalPrice: 299.00,
            image: muttonChopsImage,
          },
          {
            id: 2,
            name: 'Chicken Malai Tikka',
            weight: '500g',
            price: 279.00,
            originalPrice: 329.00,
            image: muttonChopsImage,
          },
          {
            id: 3,
            name: 'Achari Fish',
            weight: '350g',
            price: 349.00,
            originalPrice: 399.00,
            image: muttonChopsImage,
          },
          {
            id: 4,
            name: 'Lemon Garlic Prawns',
            weight: '300g',
            price: 449.00,
            originalPrice: 499.00,
            image: muttonChopsImage,
          }]},
          {"Kebabs & Patties": [{
            id: 1,
            name: 'Chicken Seekh Kebab',
            weight: '400g',
            price: 229.00,
            originalPrice: 279.00,
            image: muttonChopsImage,
          },
          {
            id: 2,
            name: 'Mutton Shammi Kebab',
            weight: '400g',
            price: 349.00,
            originalPrice: 399.00,
            image: muttonChopsImage,
          },
          {
            id: 3,
            name: 'Chicken Burger Patty',
            weight: '300g',
            price: 249.00,
            originalPrice: 299.00,
            image: muttonChopsImage,
          },
          {
            id: 4,
            name: 'Fish Fingers',
            weight: '300g',
            price: 299.00,
            originalPrice: 349.00,
            image: muttonChopsImage,
          }]}
        ],
    }

    const prodRef = useRef(null)

      const onClick = () => {
        prodRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
      }

    return(
        <>
        <div className='container mx-auto overflow-hidden'>
            <div className='mx-10'>
                <div className='mt-16'>
                    <ImageCarousal carousal={carousal} btnOnClick={onClick}/>
                </div>
            </div>
            <div>
                <ServicesCategoryCarousel setSelectedCategory={setSelectedCategory} prodRef={prodRef} />
            </div>
            <div ref={prodRef}>

            {categories[selectedCategory].map((category, index) => {
              return (
                <div className="my-8" key={index}>
                  {Object.entries(category).map(([categoryName, products]) => (
                    <ProductGrid 
                      key={categoryName}
                      products={products} 
                      title={categoryName} 
                    />
                  ))}
                </div>
              )
            }
            )}

           

            </div>
        </div>
        </>
    )
}

export default Services
