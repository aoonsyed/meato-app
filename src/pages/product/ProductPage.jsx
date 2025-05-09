import React, { useState } from 'react'
import { useParams } from 'react-router'
import img1 from "../../assets/products/WholeChickenWhite.jpg"
import img2 from "../../assets/products/WholeChickenBlack.jpg"
import CustomMainButton from '../../components/Custom_Main_Button'
import MuttonChops from "../../assets/products/mutton-chops.png"
import ProductGrid from '../../components/ProductGrid'
import Cart from '../../components/Cart'

function ProductPage() {
    const { id } = useParams()

    const product = {
        id: 1,
        name: 'Halal Whole Chicken',
        catergories: ["whole bird", "bone-in & skinless"],
        description: 'Skinless and tender, the Whole Chicken from Licious is thoroughly cleaned and processed with care. This full bird includes all essential cuts like breast, drumsticks, thighs, wings, and backbone. Ideal for roasting, curries, grilling, or stews. Sourced from young and healthy chickens, the meat is juicy, flavourful, and high in protein. Delivered fresh, not frozen, for the perfect home-cooked meal.',
        details: ['No of Pieces 6', 'serves 2-3', "600g", 'Skinless & Boneless', 'Freshly Cut'],
        price: 23.00,
        weight: '1kg',
        images: [img1, img2, img1, img2],
    }

    // Sample related products
    const relatedProducts = [
        { id: 2, name: "Mutton Chops", price: 90.00, originalPrice: 110.00, weight: "1kg", image: MuttonChops },
        { id: 3, name: "Mutton Chops", price: 90.00, originalPrice: 110.00, weight: "1kg", image: MuttonChops },
        { id: 4, name: "Mutton Chops", price: 90.00, originalPrice: 110.00, weight: "1kg", image: MuttonChops },
        { id: 5, name: "Mutton Chops", price: 90.00, originalPrice: 110.00, weight: "1kg", image: MuttonChops },
    ]

    const [quantity, setQuantity] = useState(1)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value)
        if (!isNaN(value) && value > 0) {
            setQuantity(value)
        }
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 mt-32">
                {/* Product Detail Section */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Images */}
                    <div className="lg:w-1/2">
                        {/* Main Image */}
                                            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 max-w-sm lg:mx-auto">
                                                <div
                                                    style={{
                                                        backgroundImage: `url(${product.images[selectedImageIndex]})`,
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundColor: '#f9fafb'
                                                    }}
                                                    className="w-full aspect-square h-0 pb-[100%] relative"
                                                    role="img"
                                                    aria-label={product.name}
                                                ></div>
                                            </div>
            
                                            {/* Thumbnail Images */}
                        <div className="flex space-x-3 justify-center">
                            {product.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`w-16 h-16 flex-shrink-0 cursor-pointer border ${selectedImageIndex === index ? 'border-[#AE1F25]' : 'border-gray-200'} rounded overflow-hidden`}
                                    onClick={() => setSelectedImageIndex(index)}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Product Info */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
            
                        <div className="flex gap-2 text-sm text-gray-600 mt-1">
                            {product.catergories.map((category, index) => (
                                <span key={index}>{`${category} | `}</span>
                            ))}
                        </div>
            
                        <p className="mt-4 text-gray-700 border-y-2 border-[#D8D8D8] py-3">{product.description}</p>
            
                        <div className="mt-6">
                            <h3 className="font-medium text-gray-700">Details</h3>
                            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-2">
                                {product.details.map((detail, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#AE1F25]"></span>
                                        <span className="text-sm">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
            
                        <div className="mt-6">
                            <p className="text-[#AE1F25] text-xl font-bold">${product.price.toFixed(2)}</p>
                        </div>
            
                        <div className="mt-4">
                            <div className="flex items-center">
                                <span className="mr-3">Quantity</span>
                                <div className="flex items-center border-[0.5px] border-[#D8D8D8]">
                                    <button
                                        onClick={handleDecreaseQuantity}
                                        className="px-3 py-1 text-2xl font-bold cursor-pointer text-[#343434]"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        value={`${quantity}kg`}
                                        onChange={handleQuantityChange}
                                        className="w-10 text-center font-bold"
                                        readOnly
                                    />
                                    <button
                                        onClick={handleIncreaseQuantity}
                                        className="px-3 py-1 text-2xl font-bold cursor-pointer text-[#343434]"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
            
                        <div className="mt-6 flex gap-4">
                            <CustomMainButton
                                text="Buy Now"
                                width="100%"
                                className="flex-1"
                            />
                            <CustomMainButton
                                text="Add to Cart"
                                width="100%"
                                variant="outline"
                                className="flex-1 border-[#FFB752] !rounded-full"
                            />
                        </div>
                    </div>
                </div>
                {/* Related Products Section */}
                <div className="mt-16">
                    <ProductGrid
                        title="You Might Also Like"
                        products={relatedProducts}
                    />
                </div>
            </div>

            {/* <div>
                <Cart/>
            </div> */}
        </>
        
    )
}

export default ProductPage