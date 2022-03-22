import React from 'react';
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

const Download = () => {
    return (
        <>
            <section className='downloading' data-aos="fade-right">
                <div className='download'>
                    <div className='download-container container'>
                        <div className='downloadApp'>
                            <h5 className='subheading'>Download app</h5>
                            <h2 className='downloadText'>People around you are ordering delicious meals using the <p className='box'>Treact App.</p>
                            </h2>
                            <div className='downloadLinks'>
                                <a href="http://apple.com" target='_blank'>
                                    <BsApple className='icon'/>
                                    <span>App Store</span>
                                </a>
                                <a href="http://play.google.com" target='_blank'>
                                    <FaGooglePlay  className='icon'/>
                                    <span>Google Play</span>
                                </a>
                            </div>
                        </div>
                        <div className='downloadImg'>
                            <img src="./img/img4.png" alt="download"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Download