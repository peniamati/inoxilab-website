'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import AnalyticsFeature from './AnalyticsFeature/AnalyticsFeature'
import Projects from './Projects/Projects'
import Review from './Review/Review'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Whatsapp from './WhatsappButton/Whatsapp'

function Home() {

  useEffect(() => {
    const initAos = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      })
    };
    initAos();
  }, []) 

  return (
    <div className='overflow-hidden'>
      <Hero/> 
      <WhyChoose/>
      <AnalyticsFeature/>
      <Projects/>
      <Review/>
      <Contact />
      <Whatsapp/>
    </div>
  )
}

export default Home
