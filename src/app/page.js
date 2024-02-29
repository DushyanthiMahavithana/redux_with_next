'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '@/redux/cartslice';

import Category1 from "@/components/Category1";

export default function Home() {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleremove = (id) =>{
    dispatch(remove(id))
}
  return (
    <>
    <h1 className="text-center text-3xl my-5">Products</h1>
    <Category1/>
    <>
      <h1 className="text-center text-3xl my-5">Cart</h1>
      <div>
        {cartItems.map((product) => (
          <><p key={product.id}>{product.name} </p>
          <button onClick={() => handleremove(product.id)}>remove</button></>
        ))}
      </div>
    </>

    </>
  );
}
