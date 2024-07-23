import React from 'react'
import './services.css'

const Services = () => {
  return (
    <div className='wrapper section1 max-width'>
      <div className="container width flex flex-col absolute-center">
        <div className="service_title">Keep focus on profit rest of things <br/>we do it for you</div>
        <div className="service_section flex absolute-center">
            <div className="service flex flex-col  absolute-center">
                <img src='assets/service1.png' alt='service_img'/>
                <div className="service-tag">Easily manage data</div>
                <div className="service-desc">anyone can easily access & manage data with the authentic user permission</div>
            </div>
            <div className="service flex flex-col absolute-center">
                <img src='assets/service2.png' alt='service_img'/>
                <div className="service-tag">Make projections</div>
                <div className="service-desc">Understand your financial situation and discover your profit potential.</div>
            </div>
            <div className="service flex flex-col  absolute-center">
                <img src='assets/service3.png' alt='service_img'/>
                <div className="service-tag">Calculate commission</div>
                <div className="service-desc">Devise a strong business plan and enhance team performance.</div>
            </div>
            <div className="service flex flex-col  absolute-center">
                <img src='assets/service4.png' alt='service_img'/>
                <div className="service-tag">Analyze Data</div>
                <div className="service-desc">Devise a strong business plan and enhance team performance.</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services