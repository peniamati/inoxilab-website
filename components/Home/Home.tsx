import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import AnalyticsFeature from './AnalyticsFeature/AnalyticsFeature'
import Projects from './Projects/Projects'
import Review from './Review/Review'
import Contact from './Contact/Contact'
import { GoogleOAuthProvider } from '@react-oauth/google'

function Home() {
  return (
    <div className=' h-[2000px]'>
      <Hero/> 
      <WhyChoose/>
      <AnalyticsFeature/>
      <Projects/>
      <Review/>
      <GoogleOAuthProvider clientId={process.env.CLIENT_ID || ''} >
      <Contact />
    </GoogleOAuthProvider>
    </div>
  )
}

export default Home
