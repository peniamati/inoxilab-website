import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'

function Home() {
  return (
    <div className='overflow-hidden h-[2000px]'>
      <Hero/> 
      <WhyChoose/>
    </div>
  )
}

export default Home
