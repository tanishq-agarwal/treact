import React from 'react';
import { FcHome } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import serviceApi from "./API/serviceApi";
import { NavLink } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <section className='container services-container' data-aos="zoom-in-left">
                    <div className='services'>
                        <div className='title'>
                            <h1 className='services-heading'>Amazing <p className='box'>Serivces.</p></h1>
                        </div>
                        <div className='services-list'>
                            {serviceApi.map((curElem) => {
                                const { id, title, desc } = curElem;
                                return (
                                    <>
                                        <div className='locations' key={id}>
                                            <NavLink to="/" className='page-link'>
                                                <div className='service-icon'>
                                                    <FcHome className='icon' />
                                                </div>
                                                <h2>{title}</h2>
                                                <p className='description'>{desc}</p>
                                                <span className='link'>
                                                    <span>Learn More</span>
                                                    <BsArrowRight className='arrow' />
                                                </span>
                                            </NavLink>
                                        </div>
                                    </>
                                )
                            })}


                            {/* <div className='locations'>
                            <a href="#" className='page-link'>
                                <div className='service-icon'>
                                    <GiCook className='icon' />
                                </div>
                                <h2>230+ Locations</h2>
                                <p className='description'>Lorem ipsum donor amet siti ceali placeholder text</p>
                                <span className='link'>
                                    <span>Learn More</span>
                                    <BsArrowRight className='arrow' />
                                </span>
                            </a>
                        </div>
                        <div className='locations'>
                            <a href="#" className='page-link'>
                                <div className='service-icon'>
                                    <GiPartyPopper className='icon' />
                                </div>
                                <h2>230+ Locations</h2>
                                <p className='description'>Lorem ipsum donor amet siti ceali placeholder text</p>
                                <span className='link'>
                                    <span>Learn More</span>
                                    <BsArrowRight className='arrow' />
                                </span>
                            </a>
                        </div> */}
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Services;