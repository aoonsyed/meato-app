import React from 'react'
import NewsGrid from '../../components/NewsGrid'

function NewsPage() {

const news = [
        {
            id: 1,
            image: '/src/assets/news/dummy1.jpg',
            title: 'How to prepare a delicious gluten free sushi',
            date: '2023-01-03'
        },
        {
            id: 2,
            image: '/src/assets/news/dummy2.jpg',
            title: 'Exclusive baking lessons from the pastry king',
            date: '2023-01-05'
        },
        {
            id: 3,
            image: '/src/assets/news/dummy3.jpg',
            title: 'How to prepare the perfect fries in an air fryer',
            date: '2023-01-03'
        },
        {
            id: 4,
            image: '/src/assets/news/dummy4.jpg',
            title: 'How to prepare delicious chicken tenders',
            date: '2023-01-03'
        },
        {
            id: 5,
            image: '/src/assets/news/dummy5.jpg',
            title: '5 great cooking gadgets you can buy to save time',
            date: '2023-01-03'
        },
        {
            id: 6,
            image: '/src/assets/news/dummy6.jpg',
            title: 'The secret tips & tricks to prepare a perfect burger',
            date: '2023-01-05'
        },
        {
            id: 7,
            image: '/src/assets/news/dummy7.jpg',
            title: '7 delicious cheesecake recipes you can prepare',
            date: '2023-01-03'
        },
        {
            id: 8,
            image: '/src/assets/news/dummy8.jpg',
            title: '5 great pizza restaurants you should visit this city',
            date: '2023-01-03'
        },
        {
            id: 9,
            image: '/src/assets/news/dummy5.jpg',
            title: '5 great cooking gadgets you can buy to save time',
            date: '2023-01-03'
        },
        {
            id: 10,
            image: '/src/assets/news/dummy1.jpg',
            title: 'How to prepare a delicious gluten free sushi',
            date: '2023-01-05'
        },
        {
            id: 11,
            image: '/src/assets/news/dummy3.jpg',
            title: 'Top 20 simple and quick desserts for kids',
            date: '2023-01-03'
        },
        {
            id: 12,
            image: '/src/assets/news/dummy8.jpg',
            title: 'Top 20 simple and quick desserts for guests',
            date: '2023-01-03'
        },
    ]

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 md:px-8 lg:px-12 min-h-screen pt-36 md:pt-28">
      <h1 className="text-4xl font-bold mb-4 text-center">News</h1>
      <p className="text-[#636363] font-medium text-center mb-2 max-w-2xl">
        Get the latest updates on fresh stock, special cuts, and
      </p>
      <p className="text-[#636363] font-medium text-center mb-10 max-w-2xl">
        meat industry news.
      </p>
      
      <div className="w-full max-w-7xl mx-auto">
        <NewsGrid news={news} />
      </div>
    </div>
  )
}

export default NewsPage