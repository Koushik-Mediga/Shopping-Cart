import React from 'react'
import Product from '../components/Product'
import {products} from '../data'

const HomePage = () => {
  return (
    <div className='w-11/12 flex flex-row gap-5 justify-around items-center flex-wrap'>
        {
            products.map((product)=>{
                return (
                    <Product key={product.id} productData={product}/>
                );
            })
        }
    </div>
  )
}

export default HomePage