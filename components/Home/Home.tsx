import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import AnalyticsFeature from './AnalyticsFeature/AnalyticsFeature'
import Projects from './Projects/Projects'
import Review from './Review/Review'

function Home() {
  return (
    <div className=' h-[2000px]'>
      <Hero/> 
      <WhyChoose/>
      <AnalyticsFeature/>
      <Projects/>
      <Review/>
    </div>
  )
}

export default Home
