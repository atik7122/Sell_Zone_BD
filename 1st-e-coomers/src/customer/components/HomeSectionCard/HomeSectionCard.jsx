import React from 'react'

export const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[18rem] max-3'>
1
        <div className='h-[15rem] w-[15rem]'>
            <img className='object-cover object-top  w-full h-full ' 
            src={product.imageUrl} 
            alt="" 
            />

        </div>
        <div className='p-6'>
            <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
            <p className='mt-4 text-sm text-gray-500'>{
            product.title}
            </p>

        </div>
    </div>
  )
}

export default HomeSectionCard