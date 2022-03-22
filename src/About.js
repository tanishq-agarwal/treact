import React, { useState } from 'react';
import { FiYoutube } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const About = () => {

    const [model, setModel] = useState(false);
    const getImg = () => {
        setModel(true);
    };

    return (
        <>
            <div className={model ? "model open" : "model"}>
                <iframe width="960" height="550" src="https://www.youtube.com/embed/cDwa_JwuC-w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <GrClose onClick={() => setModel(false)} />
            </div>
            <section className="common-section meals meals-leftside container" data-aos="fade-right">
                <div className="meal-section" >
                    <div className="meals-near-you">
                        <div className="meal-items">
                            <h1 className="title">
                                Delicious & Affordable <p className='box'>Meals Near You.</p>
                            </h1>
                            <p className="main-hero-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='order'>
                                <button className="btn btn-style">Order Now</button>
                                <div className='meet-chefs' onClick={() => getImg()} >
                                    <FiYoutube className='youtube' />
                                    <span>Meet The Chefs</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="meals-img">
                        <img src="./img/img11.png" alt="mealImg" />
                    </div>
                </div>

            </section>

            <section className="common-section meals meals-rightside container" data-aos="zoom-in-left" >
                <div className="">
                    <div className="meals-near-you">
                        <div className="meals-img">
                            <img src="./img/img12.png" alt="mealImg" />
                        </div>
                        <div className="meal-items">
                            <div className="title">
                                <h5 className='subheading'>Established Since 2014</h5>
                                We've been serving for<p className='box'>over 5 years.</p>
                            </div>
                            <p className="main-hero-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <br />
                                <br />
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className='order'>
                                <button className="btn btn-style">Latest Offers</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;