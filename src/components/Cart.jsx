import React, {useState} from 'react'
import remove from "../assets/cart/Remove.png"
import Cancel from "../assets/cart/Cancel.png"
import Custom_Main_Button from "./Custom_Main_Button"

// Temporary 
import img1 from '../assets/products/WholeChickenWhite.jpg' 
import img2 from '../assets/products/WholeChickenBlack.jpg'
import img3 from '../assets/products/mutton-chops.png'

function Cart() {
    // Convert cart to a state variable
    const [cart, setCart] = useState([
        {
            id: 1,
            name: 'Halal Beef Meat',
            price: 23.00,
            quantity: 1,
            image: img1,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 23.99,
            pricePerUnit: '( 00/ kg)',
            quantity: 4,
            image: img2,
        },
        {
            id: 3,
            name: 'Product 2',
            price: 7.99,
            pricePerUnit: '( 00/ kg)',
            quantity: 1,
            image: img3,
        },
    ]);

    const handleDecreaseQuantity = (id) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id && item.quantity > 1 
                    ? {...item, quantity: item.quantity - 1} 
                    : item
            )
        );
    }

    const handleIncreaseQuantity = (id) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id 
                    ? {...item, quantity: item.quantity + 1} 
                    : item
            )
        );
    }

    const handleQuantityChange = (e, id) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setCart(prevCart => 
                prevCart.map(item => 
                    item.id === id 
                        ? {...item, quantity: value} 
                        : item
                )
            );
        }
    }

    return (
        <>
        <div className='flex flex-col items-cente justify-center w-full max-w-3xl py-10 px-10'>

            <div className='flex flex-col pb-3 mb-3 border-b-[0.5px] border-[#D8D8D8] w-full'>
                <div className=' flex justify-end'>
                    <img src={Cancel} alt="Cross Button" className='w-8'/>
                </div>
                <div className=''>
                    <h1 className='font-bold text-2xl'>Your Cart</h1>
                </div>
            </div>

            {/* Products Start  */}
            <div className="w-full max-w-3xl mx-auto">
                {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-4 border-b border-gray-100">
                        <div className="flex items-center">
                            <div className="w-32 h-32 mr-4">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-base mb-1">{item.name}</h3>
                                <p className="text-gray-500 text-sm mb-2">{`(${Math.ceil(item.price)} / Kg)`}</p>
                                <div className="flex items-center border-[0.5px] border-[#D8D8D8]">
                                        <button
                                            onClick={() => handleDecreaseQuantity(item.id)}
                                            className="px-3 py-1 font-bold cursor-pointer text-[#343434]"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            value={`${item.quantity}kg`}
                                            onChange={(e) => handleQuantityChange(e, item.id)}
                                            className="w-10 text-center font-bold"
                                            readOnly
                                        />
                                        <button
                                            onClick={() => handleIncreaseQuantity(item.id)}
                                            className="px-3 py-1 font-bold cursor-pointer text-[#343434]"
                                        >
                                            +
                                        </button>
                                    </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <button className="mb-2 self-center cursor-pointer" onClick={() => setCart(cart.filter(i => i.id !== item.id))}>
                                <img src={remove} alt="Remove" className="w-5 h-5" />
                            </button>
                            <p className="font-medium">${(item.price*item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Products End */}

            {/* Total Start*/}
            <div className="w-full max-w-3xl mx-auto mt-6">
                <div className="flex justify-between items-center py-3">
                    <p className="font-medium text-lg">Subtotal ({cart.length} {cart.length === 1 ? 'Item' : 'Items'})</p>
                    <div className='border-b border-dashed border-[#D8D8D8s] flex-grow mx-5'></div>                 <p className="font-bold text-lg">${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</p>
                </div>
                
                <div className="flex justify-between items-center py-3">
                    <p className="font-medium text-lg">Shipping Fee</p>
                    <div className='border-b border-dashed border-[#D8D8D8s] flex-grow mx-5'></div> 
                    <p className="font-bold text-lg">$0</p>
                </div>
                
                <div className="flex justify-between items-center py-3">
                    <p className="font-medium text-lg">Total</p>
                    <div className='border-b border-dashed border-[#D8D8D8s] flex-grow mx-5'></div> 
                    <p className="font-bold text-lg">${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</p>
                </div>
                
                <div className="mt-6 mb-2 flex justify-center">
                    <Custom_Main_Button
                        text="Check Out"
                        className="border-none"
                    />
                </div>
            </div>
            {/* Total End */}
        </div>
        </>
    )
}

export default Cart