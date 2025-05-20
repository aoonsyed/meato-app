import React, { useEffect, useRef } from 'react';
import Cancel from "../assets/cart/Cancel.png"

function Modal({ isOpen, onClose, children, title, maxWidth = 'md' , className = ''}) {
  const modalRef = useRef(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Add escape key listener
  useEffect(() => {
    const handleEscape = (e) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Determine max width class based on the maxWidth prop
  const getMaxWidthClass = () => {
    switch(maxWidth) {
      case 'sm': return 'max-w-sm';
      case 'md': return 'max-w-md';
      case 'lg': return 'max-w-lg';
      case 'xl': return 'max-w-xl';
      case '2xl': return 'max-w-2xl';
      case 'full': return 'max-w-full';
      default: return 'max-w-md';
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-[rgba(0,0,0,0.5)] w-screen h-screen z-[9999] flex items-center justify-center p-4 ${className}`}
      onClick={handleBackdropClick}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      ref={modalRef}
    >      <div 
        className={`bg-white rounded-md shadow-lg w-full ${getMaxWidthClass()} max-h-[90vh] overflow-y-auto relative`}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6">
          {/* Header */}
          {title && (
            <div className='flex justify-between items-center mb-4 pb-3 border-b border-[#D8D8D8]'>
              <h2 className='font-bold text-xl'>{title}</h2>
              <button 
                onClick={onClose}
                className="cursor-pointer hover:border rounded-full"
              >
                <img src={Cancel} alt="Cross Button" className='w-8'/>
              </button>
            </div>
          )}
          
          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
