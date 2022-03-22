import React, { Component } from "react";
import Slider from "react-slick";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                }
              ]
        };
        return (
            <div className="carousel">
                <Slider {...settings}>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img src="./img/img1.png" alt="carousel-img" />
                            </div>
                            <ul className='social-icons'>
                                <li><a href="https://www.facebook.com/tanishq.agarwal.353" target="_tanishq">
                                    <FaFacebookF className='fa' />
                                </a></li>
                                <li><a href="https://www.instagram.com/iamtanishqagarwal/" target="_tanishq">
                                    <FaInstagram className='fa' />
                                </a></li>
                                <li><a href="https://www.linkedin.com/in/tanishq-agarwal-10a9371a0/" target="_tanishq">
                                    <FaLinkedinIn className='fa' />
                                </a></li>
                            </ul>
                            <div className="details">
                                <h2>Veg Mixer <span className="job-title">Tomato Salad & Carrot</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img src="./img/img2.png" alt="carousel-img" />
                            </div>
                            <ul className='social-icons'>
                                <li><a href="https://www.facebook.com/tanishq.agarwal.353" target="_tanishq">
                                    <FaFacebookF className='fa' />
                                </a></li>
                                <li><a href="https://www.instagram.com/iamtanishqagarwal/" target="_tanishq">
                                    <FaInstagram className='fa' />
                                </a></li>
                                <li><a href="https://www.linkedin.com/in/tanishq-agarwal-10a9371a0/" target="_tanishq">
                                    <FaLinkedinIn className='fa' />
                                </a></li>
                            </ul>
                            <div className="details">
                                <h2>Nelli <span className="job-title">Hamburger & Fries </span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img src="./img/img3.png" alt="carousel-img" />
                            </div>
                            <ul className='social-icons'>
                                <li><a href="https://www.facebook.com/tanishq.agarwal.353" target="_tanishq">
                                    <FaFacebookF className='fa' />
                                </a></li>
                                <li><a href="https://www.instagram.com/iamtanishqagarwal/" target="_tanishq">
                                    <FaInstagram className='fa' />
                                </a></li>
                                <li><a href="https://www.linkedin.com/in/tanishq-agarwal-10a9371a0/" target="_tanishq">
                                    <FaLinkedinIn className='fa' />
                                </a></li>
                            </ul>
                            <div className="details">
                                <h2>Carnet Nachos<span className="job-title">Chill Crispy Nahos</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="carousel-img" />
                            </div>
                            <ul className='social-icons'>
                                <li><a href="https://www.facebook.com/tanishq.agarwal.353" target="_tanishq">
                                    <FaFacebookF className='fa' />
                                </a></li>
                                <li><a href="https://www.instagram.com/iamtanishqagarwal/" target="_tanishq">
                                    <FaInstagram className='fa' />
                                </a></li>
                                <li><a href="https://www.linkedin.com/in/tanishq-agarwal-10a9371a0/" target="_tanishq">
                                    <FaLinkedinIn className='fa' />
                                </a></li>
                            </ul>
                            <div className="details">
                                <h2>Guacamole Mex <span className="job-title">Mexican Chill</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img src="./img/img2.png" alt="carousel-img"/>
                            </div>
                            <ul className='social-icons'>
                                <li><a href="https://www.facebook.com/tanishq.agarwal.353" target="_tanishq">
                                    <FaFacebookF className='fa' />
                                </a></li>
                                <li><a href="https://www.instagram.com/iamtanishqagarwal/" target="_tanishq">
                                    <FaInstagram className='fa' />
                                </a></li>
                                <li><a href="https://www.linkedin.com/in/tanishq-agarwal-10a9371a0/" target="_tanishq">
                                    <FaLinkedinIn className='fa' />
                                </a></li>
                            </ul>
                            <div className="details">
                                <h2>Nelli <span className="job-title">Hamburger & Fries </span></h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
