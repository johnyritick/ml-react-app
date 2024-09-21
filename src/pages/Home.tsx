import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import '../components/Home/HomeStyle.css';
import Footer from '../components/Footer/Footer';

export const Home = () => {
  return <React.Fragment>
    <div className='bg-black'>
      <HeroSection />
      <Footer/>
    </div>
  </React.Fragment>
}
