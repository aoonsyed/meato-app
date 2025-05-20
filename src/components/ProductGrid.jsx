import React, { useState, useRef, useEffect } from 'react';
import ProductCard from './ProductCard';

import LeftBtn from "../assets/products/LeftBtn.png";
import RightBtn from "../assets/products/RightBtn.png";

const ProductGrid = ({title, products, id}) => {
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [screenSize, setScreenSize] = useState('large');
  const productsPerPage = 12;
  
  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  
  const isMobile = screenSize === 'mobile';
  

  // Calculate total pages and current page products
  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
    // Scroll back to the beginning when changing pages
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
    // Scroll back to the beginning when changing pages
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  };

  // Scroll functions for mobile
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-12 px-4" id={id}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="flex space-x-4">
            <button 
              onClick={isMobile ? scrollLeft : goToPreviousPage}
              className={`p-2 rounded-full hover:opacity-50 hover:cursor-pointer`}
              aria-label="Previous page or scroll left"
            >
              <img src={LeftBtn} alt="Previous" className="w-8 h-8" />
            </button>
            <button 
              onClick={isMobile ? scrollRight : goToNextPage}
              className={`p-2 rounded-full hover:opacity-50 hover:cursor-pointer`}
              aria-label="Next page or scroll right"
            >
              <img src={RightBtn} alt="Next" className="w-8 h-8" />
            </button>
          </div>
        </div>
        
        {/* Product grid with responsive column count */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-flow-col auto-cols-max gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {currentProducts.map((product, index) => (
            <div key={product.id + "-" + index} className="w-56 md:w-auto">
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                weight={product.weight}
                price={product.price}
                originalPrice={product.originalPrice}
              />
            </div>
          ))}
        </div>
        
        {/* Optional: Add page indicators for mobile */}
        {isMobile && totalPages > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <span 
                key={i}
                className={`h-2 w-2 rounded-full ${currentPage === i ? 'bg-primary' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;