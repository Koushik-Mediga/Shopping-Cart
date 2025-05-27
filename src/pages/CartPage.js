import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';
import { checkoutCart, clearCart } from '../redux/Slices/cartSlice';

const CartPage = () => {
    const cartItems = useSelector( (state)=>state.cart );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const calculateTotalAmount = (items)=>{
        let amount = 0;
        for(let item of items){
            amount += item.price;
        }
        return amount;
    }
  
    return (
        <div className='flex justify-center'>
        {
            (cartItems.length>0)? (
                <div className="flex flex-row gap-5 w-11/12 justify-around">
                    <div className='flex flex-col gap-4 '>
                        {
                            cartItems.map((item)=>{
                                return (
                                    <CartItem key={item.id} item={item} />
                                )
                            })
                        }
                    </div>
                    <div className='flex flex-col justify-start'>
                        <button onClick={()=>{dispatch(clearCart())}} className='mt-16 mb-32 text-lg text-white w-6/12 bg-gray-600 rounded-lg font-bold'>Clear Cart</button>
                        <h2 className='text-xl text-green-600'>Your Cart</h2>
                        <h3 className='text-2xl text-green-600 mb-2'>SUMMARY</h3>
                        <p className='text-lg text-gray-600 font-bold'>Total Items: <span>{cartItems.length}</span> </p>
                        <p className='text-lg text-gray-600 font-bold mb-32'>Total Amount: <span>Rs. {calculateTotalAmount(cartItems)}</span></p>
                        <button onClick={()=>{dispatch(checkoutCart())}} className='text-lg text-white w-10/12 bg-green-600 rounded-lg font-bold'>Checkout Now</button>
                    </div>
                </div>
            ):(
                <div className='w-1/2 h-[500px] flex flex-col justify-center items-center gap-4'>
                    <h2 className='text-2xl text-gray-700 font-bold mb-32'>Your Cart is Empty!</h2>
                    <button onClick={()=>{navigate('/')}} className='text-lg text-white w-10/12 bg-green-600 rounded-lg font-bold p-2'>Shop Now</button>
                </div>
            )
        }
    
    </div>
  )
}

export default CartPage