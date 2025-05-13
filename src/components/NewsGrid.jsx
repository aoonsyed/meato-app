import React from 'react'
import NewsCard from './NewsCard'

function NewsGrid({news}) {
    
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8">
        {news.map((item, index) => (
          <NewsCard 
            key={`${item.id}-${index}`}
            id={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </div>
  )
}

export default NewsGrid