import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {NavLink} from 'react-router-dom';

const Login = () => {
  const [verify, setVerify] = useState(false);

  const HandleOnChange = (value) => {
    console.log("Captcha Value", value)
    setVerify(true);
  }

  const initialValues = {
    email: "",
    password: ""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues({
      email: "",
      password: ""
    })
  };
  

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.email){
      errors.email = "Email is required";
    }
    else if(!regex.test(values.email)){
      errors.email = "This is not a valid email format!";
    }
    if(!values.password){
      errors.password = "Password is required";
    }
    else if(values.password.length < 4){
      errors.password = "Password must be more than 4 characters";
    }
    else if(values.password.length > 10){
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  }

  if(Object.keys(formErrors).length === 0 && isSubmit && verify){
    setIsSubmit(false);
    alert('Signed in successfully');
  }
  return (
    <>
      <div className='login-container'>
        <div className='login-left'>
          <img src="./img/login.jpg" alt='login' />
        </div>
        <div className='login-right'>
          <div className='login-right2'>
            <img src='./img/profile.jpeg' alt='profile' />
            <h4>Tanishq Agarwal</h4>
            <h5 className='title'>Welcome <p className='box'>back!</p></h5>
          </div>
          <a href='#'>
            <div className='signIn-google'>
              <img src='./img/google.png' alt='google' />
              <h3>Sign in with Google</h3>
            </div>
          </a>
          <div className='login-email'>
            <span className='border border-left'></span>
            <span className='text'>or login with email</span>
            <span className='border border-right'></span>
          </div>
          <form method="POST" className='sign-form'>
            <div className='signin-form'>
              <label for="email">Email Address</label><br/>
              <input type="email" id="email" name="email" className='form-control' value={formValues.email} onChange={handleChange}/>
            </div>
            <p className='error'>{formErrors.email}</p>
            <div className='signin-form password'>
                <label for='password'>Password</label>
                <NavLink to="/forget"><span className='text-gray'>Forget Password?</span></NavLink>
            </div>
            <input type="password" name="password" className="form-control" value={formValues.password} onChange={handleChange} />
            <p className='error'>{formErrors.password}</p>
          </form>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            render='explicit'
            onChange={HandleOnChange}
            className='recaptcha'
          />
          <button type="submit" className="btn btn-style" onClick={ handleSubmit} >
            Login
          </button>
          <div className='login-email or-sign'>
            <span className='border border-left'></span>
            <NavLink to="/signup"><span className='text'>or SignUp</span></NavLink>
            <span className='border border-right'></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;