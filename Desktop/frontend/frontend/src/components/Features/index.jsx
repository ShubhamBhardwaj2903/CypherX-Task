import React from 'react'
import './features.css'

const Features = () => {
    return (
        <div className='wrapper max-width'>
            <div className="container width">
                <div className="feature-section1 flex absolute-center">
                    <img src='assets/feature1.png' alt='feature_img' />
                    <div className="feature-texts">
                        <div className="feature-title">Highlight Information</div>
                        <div className="feature-sub-title">With the conditional formatting option, you can effortlessly detect critical issues and identify patterns and trends. Easy! It can help you to notice your important data first.</div>
                    </div>
                </div>
                <div className="feature-section2 flex absolute-center">
                    <div className="feature-texts">
                        <div className="feature-title">Easily find data with filter </div>
                        <div className="feature-sub-title">Add filters based on Date, Relations, or Text and always have up-to-date and customizable data, as different data can be quickly shown on the change of criteria. Powerful, right?!</div>
                    </div>
                    <img src='assets/feature2.png' alt='feature_img' />
                </div>
            </div>
            <div className="data flex flex-col absolute-center">
                <div className="data-title">More efficiently visualize your data</div>
                <div className="data-subtitle">Visual representations help us to understand data easier and quicker. They make large volumes of data, and sometimes complicated ones, properly represented and with authority and clarity. </div>
                <img src='assets/data.png' alt='data_img' />
            </div>
        </div>

    )
}

export default Features