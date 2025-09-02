import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo_amine} className='mb-5 w-24' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Amine Store is a leading e-commerce platform providing a wide range of products to customers worldwide. Our mission is to deliver quality products with exceptional customer service. Join us on our journey to make shopping easier and more enjoyable.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+36 12345678</li>
            <li>contact@aminestore.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ aminestore.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
