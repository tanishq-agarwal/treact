import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";


const ForgetPassword = () => {
    const [verify, setVerify] = useState(false);

    const handleSubscribe = () => {
        if (verify) {
            alert('You will get mail to change password!');
        }
        else {
            alert('Please verify that you are a human');
        }
    }
    const HandleOnChange = (value) => {
        console.log("Captcha Value", value)
        setVerify(true);
    }

    return (
        <>
            <div className='login-container forget-password'>
                <div className='login-left'>
                    <img src="./img/login.jpg" alt='login' />
                </div>
                <div className='login-right'>
                    <div className='login-right2'>
                        <img src='./img/profile.jpeg' alt='profile' />
                        <h4>Tanishq Agarwal</h4>
                        <h5 className='title'>Recover your <p className='box'>account!</p></h5>
                    </div>
                    <form method="POST" className='sign-form'>
                        <div className='signin-form'>
                            <label for="email">Enter Your Email Address</label><br />
                            <input type="email" id="email" name="email" className='form-control' />
                        </div>
                    </form>
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        render='explicit'
                        onChange={HandleOnChange}
                        className='recaptcha'
                    />
                    <button type="submit" className="btn btn-style" onClick={() => handleSubscribe()} >
                        Continue
                    </button>
                </div>
            </div>
        </>
    )
}


export default ForgetPassword;