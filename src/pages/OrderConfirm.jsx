import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'

function OrderConfirm() {

    const location = useLocation();
  const data = location.state;

  if (!data) {
    return <p>No order data found!</p>;
  }


  return (
    <div className='w-full h-full mt-10 mb-20 flex flex-col items-center justify-center'>
        <img src="./images/orderConfirm.jpg" 
        alt="order-confirm"
        className='w-85 h-85' 
        />

        <h2 className='text-4xl font-semibold'>Thank You For Ordering..</h2>
        <p className='font-lg mt-5'>Your order will deliver on this address: <span className='font-semibold'>{data.state},{data.city},{data.address},{data.pincode}</span></p>

        <Link to='/products' className='px-8 py-3 mt-5 rounded-2xl font-semibold bg-(--color-secondary)'>Continue Shopping</Link>
    </div>
  )
}

export default OrderConfirm