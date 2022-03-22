import React,{useState} from 'react';
import { FaFacebookF,FaLinkedinIn,FaGithub,FaInstagram } from "react-icons/fa";

const Footer = () => {
    const [formValues, setFormValues] = useState({
        email: ""
    });
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormValues({...formValues, [name]: value});
    }
    const submitData = (e) => {
        e.preventDefault();
        alert('You have successfully subscribed');
        setFormValues({
            email: ""
          })
    }
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='footer'>
                        <div className='footer-container'>
                            <div className='footer-inside'>
                                <div className='main'>
                                    <h2>Main</h2>
                                    <ul>
                                        <li><a href="/">Blog</a></li>
                                        <li><a href="/about">FAQs</a></li>
                                        <li><a href="/service">Support</a></li>                                   <li><a href="/contact">About Us</a></li>
                                    </ul>
                                </div>

                                <div className='product'>
                                    <h2>Product</h2>
                                    <ul>
                                        <li><a href="/">Log In</a></li>
                                        <li><a href="/about">Personal</a></li>
                                        <li><a href="/service">Business</a></li>                                   <li><a href="/contact">Team</a></li>
                                    </ul>
                                </div>
                                <div className='press'>
                                    <h2>Press</h2>
                                    <ul>
                                        <li><a href="/">Logos</a></li>
                                        <li><a href="/about">Events</a></li>
                                        <li><a href="/service">Stories</a></li>                                   <li><a href="/contact">Office</a></li>
                                    </ul>
                                </div>

                                <div className='legal'>
                                    <h2>Legal</h2>
                                    <ul>
                                        <li><a href="/">GDPR</a></li>
                                        <li><a href="/about">Privcy Policy</a></li>
                                        <li><a href="/service">Terms of Service</a></li>                                   <li><a href="/contact">Disclaimer</a></li>
                                    </ul>
                                </div>

                                <div className='subscribe'>
                                    <h5 className='subscribe-heading'>SUBSCRIBE TO OUR NEWSLETTER</h5>
                                    <p className='subscribe-para'>We deliver high quality blog posts written by professionals weekly. And we promise no spam.</p>
                                    <form method="get" action="#" className='subscribe-form'>
                                        <input type="email" placeholder='Your Email Address' className='input-form' name="email" value={formValues.email} onChange={handleChange}></input>
                                        <button type="submit" className='btn btn-style' onClick={submitData}>Subscribe</button>
                                    </form>
                                </div>

                            </div>
                            <hr />
                            <div className='bottom-footer'>
                                <div className='navLeft'>
                                    <div className='navheader'>T</div>
                                    <h3>Treact</h3>
                                </div>

                                <div className='main-hero-para'>
                                    <p>&copy; 2021 Treact. All Rights Reserved.</p>
                                </div>

                                <div className='social-link'>
                                    <a href="https://www.facebook.com/tanishq.agarwal.353" target="_tanishq">
                                        <FaFacebookF className='fontawesome-style'/>
                                    </a>
                                    <a href="https://www.instagram.com/iamtanishqagarwal/" target="_tanishq">
                                        <FaInstagram className='fontawesome-style'/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/tanishq-agarwal-10a9371a0/" target="_tanishq">
                                        <FaLinkedinIn className='fontawesome-style'/>
                                    </a>
                                    <a href="https://github.com/tanishq-agarwal" target="_tanishq">
                                        <FaGithub className='fontawesome-style'/>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;