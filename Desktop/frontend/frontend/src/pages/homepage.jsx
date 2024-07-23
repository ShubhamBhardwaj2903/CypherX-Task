import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Features from '../components/Features'
import Apps from '../components/Apps'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <Services/>
            <Features/>
            <Apps/>
            <Footer/>
        </>
    )
}

export default HomePage