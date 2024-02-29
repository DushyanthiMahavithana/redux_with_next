'use client'
import React ,{ useState } from 'react'
import ProductList1 from '../helpers/productsList1'

import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { add } from '@/redux/cartslice'



export default function Category1() {

  const [selectedMenu, setSelectedMenu] = useState(null);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handled = (product) =>{
      dispatch(add(product))
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {ProductList1.map(product=>(
            <div key={product.id} className="bg-gray-200 p-4 rounded-lg text-center">
                <h2 className=' text-gray-600 mb-2 font-mono'>{product.name}</h2>
        
            <button className='text-rose-600' onClick={()=>{
              setSelectedMenu(product);
              handled(product)}}>Add to cart</button>
            </div>
        ))}

    </div>
  )
}
