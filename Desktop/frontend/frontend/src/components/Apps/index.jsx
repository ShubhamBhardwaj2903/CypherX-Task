import React from 'react'
import './apps.css'

const Apps = () => {
    return (
        <div className='wrapper max-width'>
            <div className="container width flex flex-col absolute-center">
                <div className="app-title">Stop recording transactions manually</div>
                <div className="app-sub-title">Spreadsheet integrated with other NextcloudERP’s app</div>
                <div className="app-imgs flex absolute-center">
                    <div className="app flex flex-col absolute-center">
                        <img src='assets/app.png' alt='app_img'/>
                        <div className="app-name">Sales</div>
                    </div>
                    <div className="app flex flex-col absoulte-center">
                        <img src='assets/app.png' alt='app_img'/>
                        <div className="app-name">Accounting</div>
                    </div>
                    <div className="app flex flex-col absoulte-center">
                        <img src='assets/app.png' alt='app_img'/>
                        <div className="app-name">Subscriptions</div>
                    </div>
                    <div className="app flex flex-col absoulte-center">
                        <img src='assets/app.png' alt='app_img'/>
                        <div className="app-name">Documents</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Apps