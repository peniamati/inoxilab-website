import React from 'react'
import Image from 'next/image'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

type Props = {
    name: string,
    image: string,
    description: string
}

const ReviewCard = ({name, image, description}: Props) => {
  return (
    <div className='w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg'>
      <div>
        <FaQuoteLeft className='w-14 h-14 opacity-10 absolute top-8'/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-center '>
        {/* Text content */}
        <div className='col-span-3 order-2 lg:order-1'>
            <p className='mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]'>
                {description}
            </p>
            <div className='flex items-center mt-6'>
                <FaStar className='text-yellow-600 w-6 h-6'/>
                <FaStar className='text-yellow-600 w-6 h-6'/>
                <FaStar className='text-yellow-600 w-6 h-6'/>
                <FaStar className='text-yellow-600 w-6 h-6'/>
                <FaStar className='text-yellow-600 w-6 h-6'/>
            </div>
            <h1 className='text-xl font-semibold mt-8'>{name}</h1>
        </div>
        {/* Image content */}
        <div className='col-span-2 order-1 lg:order-2 mx-auto'>
            <Image
                src={image}
                alt={name}
                width={250}
                height={250}
                className="rounded-full"
            />
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
