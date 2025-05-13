import React from 'react'
import { useParams } from 'react-router'
import NewsGrid from "../../components/NewsGrid"

// Temporary Static Imports
import {
    dummy1,
    dummy2,
    dummy3,
    dummy4,
} from "../../assets/news/index"
import News1 from "../../assets/news/staticNews1.png"
import News2 from "../../assets/news/staticNews2.jpg"

const news = [
     {
                id: 1,
                image: dummy1,
                title: 'How to prepare a delicious gluten free sushi',
                date: '2023-01-03'
            },
            {
                id: 2,
                image: dummy2,
                title: 'Exclusive baking lessons from the pastry king',
                date: '2023-01-05'
            },
            {
                id: 3,
                image: dummy3,
                title: 'How to prepare the perfect fries in an air fryer',
                date: '2023-01-03'
            },
            {
                id: 4,
                image: dummy4,
                title: 'How to prepare delicious chicken tenders',
                date: '2023-01-03'
            },
]

function News() {
    const { id } = useParams()

    return (
        <>
            <div className='flex flex-col items-center justify-center w-full h-full pt-38 md:pt-32'>
                {/* Main Article Container */}
                <div className='w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-8 pb-12'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900'>
                        The secret tips & tricks to prepare a perfect burger & pizza for our customers
                    </h1>

                    {/* Main Article Content */}
                    <div className='bg-white rounded-lg overflow-hidden'>
                        {/* Article Hero Image */}
                        <div className='w-full'>
                            <img
                                src={News1}
                                alt="Delicious pasta dish with sauce"
                                className='w-full h-64 md:h-96 object-cover'
                            />
                        </div>

                        {/* Article Text Content */}
                        <div className='p-4 md:p-8'>
                            <div className='prose max-w-none'>
                                <h2 className='text-xl md:text-2xl font-bold mb-4'>What do you need to prepare a home-made burger?</h2>

                                <p className='mb-6 text-gray-700'>
                                    Creating the perfect burger and pizza is all about combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today we'll unveil some closely guarded secrets and insider tips for mastering these beloved comfort food classics.
                                </p>

                                <ol className='list-decimal pl-6 mb-6 space-y-6'>
                                    <li>
                                        <span className='font-bold'>Quality Beef:</span> The heart of a perfect burger is top-quality ground beef. Opt for fresh, high-quality ground beef with a fat content of at least 15-20% for the best flavor and juiciness. Freshly ground is always preferred over pre-packaged.
                                    </li>

                                    <li>
                                        <span className='font-bold'>Seasoning:</span> Simplicity is the key. A generous pinch of salt and black pepper just before cooking will enhance the meat's natural flavor without overwhelming it. Avoid mixing salt directly into the beef beforehand as this can lead to overly compressed, tough burgers.
                                    </li>

                                    <li>
                                        <span className='font-bold'>Gentle Handling:</span> Be kind to your meat! Overworking the beef can make it dense and tough. Delicately form your patties just until they hold together—no pressing or compacting.
                                    </li>

                                    <li>
                                        <span className='font-bold'>Cooking:</span> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot. This creates a flavorful sear on the outside while keeping the inside juicy. Flip only once for the best results, and never press down on the patties while cooking—that precious juice is flavor!
                                    </li>

                                    <li>
                                        <span className='font-bold'>Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the meat, resulting in a more flavorful bite.
                                    </li>
                                </ol>


                                <h2 className='text-xl md:text-2xl font-bold mb-4'>What are the right ingredients to make it delicious?</h2>

                                <p className='mb-6 text-gray-700'>
                                    Creating the perfect burger and pizza is all about combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today we'll unveil some closely guarded secrets and insider tips for mastering these beloved comfort food classics.
                                </p>

                                <ol className='list-decimal pl-6 mb-6 space-y-6'>
                                    <li>
                                        <span className='font-bold'>Quality Beef:</span> The heart of a perfect burger is top-quality ground beef. Opt for fresh, high-quality ground beef with a fat content of at least 15-20% for the best flavor and juiciness. Freshly ground is always preferred over pre-packaged.
                                    </li>

                                    <li>
                                        <span className='font-bold'>Seasoning:</span> Simplicity is the key. A generous pinch of salt and black pepper just before cooking will enhance the meat's natural flavor without overwhelming it. Avoid mixing salt directly into the beef beforehand as this can lead to overly compressed, tough burgers.
                                    </li>

                                    <li>
                                        <span className='font-bold'>Gentle Handling:</span> Be kind to your meat! Overworking the beef can make it dense and tough. Delicately form your patties just until they hold together—no pressing or compacting.
                                    </li>

                                    <li>
                                        <span className='font-bold'>Cooking:</span> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot. This creates a flavorful sear on the outside while keeping the inside juicy. Flip only once for the best results, and never press down on the patties while cooking—that precious juice is flavor!
                                    </li>

                                    <li>
                                        <span className='font-bold'>Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the meat, resulting in a more flavorful bite.
                                    </li>
                                </ol>
                                <div className='my-8'>
                                    <img
                                        src={News2}
                                        alt="Fresh burger with fries"
                                        className='w-full h-64 md:h-80 object-cover rounded-lg'
                                    />
                                </div>
                                <div className='mt-8'>
                                    <h2 className='text-xl md:text-2xl font-bold mb-4'>What are the right ingredients to make it delicious?</h2>

                                    <p className='text-gray-700'>
                                        Quality ingredients are the foundation of any outstanding food product. Use fresh vegetables like crisp lettuce, ripe tomatoes, and sliced onions to accompany your burgers and pizzas. For pizza, choose high-quality cheeses and homemade sauces to elevate the flavor profile. Remember, exceptional results start with exceptional ingredients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related News Section  */}
                <div className="flex flex-col items-center justify-center py-10 px-4 md:px-8 lg:px-12">
                    <h1 className="text-4xl font-bold mb-4 text-center">Read More News</h1>
                    <p className="text-[#636363] font-medium text-center mb-2 max-w-2xl">
                        Explore more stories, updates, and insights from the world of fresh meat.
                    </p>
                    <p className="text-[#636363] font-medium text-center mb-10 max-w-2xl">
                        meat industry news.
                    </p>

                    <div className="w-full max-w-7xl mx-auto">
                        <NewsGrid news={news} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default News