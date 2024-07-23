import React from 'react'
import './heroSection.css'

const HeroSection = () => {
  return (
    <div className='wrapper hero max-width flex absolute-center'>
      <div className="container width">
        <div className="section">
            <div className="hero_title">Go to extra mile <br/> with Spreadsheet</div>
            <div className="hero_sub_title">Upskill your Business Intelligence practices</div>
            <div className="hero_button">
              <button className='button1'>Meet an Expert</button>
              <button className='button2'>Schedule a demo</button>
            </div>
        </div>
      </div>
      <div className="image-container">
          <img src='assets/hero.png' alt='report_image'/>
        </div>
    </div>
  )
}

export default HeroSection