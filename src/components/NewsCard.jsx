import React from 'react';
import { useNavigate } from 'react-router';

const NewsCard = ({ image, title, date, id }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (id) {
      navigate(`/news/${id}`);
    }
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };  return (
    <div 
      className="bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-1 cursor-pointer rounded-lg shadow-md" 
      onClick={handleClick}
    >
      <div className="h-44 md:h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-sm mb-2">{formatDate(date)}</p>
        <h3 className="font-semibold text-lg text-gray-800 line-clamp-2 hover:text-[#AD1F23] transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default NewsCard;