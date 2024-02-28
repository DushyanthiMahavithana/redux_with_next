import React from 'react'
import ProductList1 from '../helpers/productsList1'


export default function Category1() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {ProductList1.map(product=>(
            <div key={product.id} className="bg-gray-200 p-4 rounded-lg text-center">
                <h2 className=' text-gray-600 mb-2 font-mono'>{product.name}</h2>
        
            <button className='text-rose-600'>Add to cart</button>
            </div>
        ))}

    </div>
  )
}
