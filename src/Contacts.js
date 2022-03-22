import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Contacts = () => {

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value })
  };


  const submitData = async (event) => {
    event.preventDefault();

    const { name, phone, email, message } = userData;

    if (name && phone && email  && message  && verify) {
        const res = await fetch('https://treact-468d7-default-rtdb.firebaseio.com/userDataRecords.json',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    message
                }),
            }
        );

        if (res) {
            setUserData({
                name: "",
                phone: "",
                email: "",
                message: "",
                verify: false
            });
            alert("Data Stored");
        } else {
            alert("Please fill the data");
        }
    }
    else {
        alert("Please fill all the fields");
    }
}

  const [verify, setVerify] = useState(false);

  // const handleSubscribe = () => {
  //   if (verify) {
  //     alert('You have successfully subscribed');
  //   }
  //   else {
  //     alert('Please verify that you are a human');
  //   }
  // }
  const HandleOnChange = (value) => {
    console.log("Captcha Value", value)
    setVerify(true);
  }

  return (
    <>
      <section className="contact-us container">
        <h1 className='title'>Contact <p className='box'>Us.</p>
        </h1>
        <div className="section-container">
          <div className='contact-left'>
            <div className="contact-heading">
              <h2>Lets talk about everything!</h2>
            </div>
            <img src="./img/profile.jpeg" alt="profile" className="profile" />
            <h5>Feel free to ask us anything!</h5>
            <p>Have doubt or suggestion to make? Feel free to ask anything. If you have any suggestions, please let me know. Your suggestions are highly appreciated. Keep dropping your priceless opinions.</p>
          </div>

          <div className='contact-right'>
            <form method="POST">
              <label for="fname">Full Name</label>
              <input type="text" id="name" name="name" className='form-control' value={userData.name} onChange={postUserData} />
              <label for="email">Email</label>
              <input type="email" id="email" name="email" className='form-control' value={userData.email} onChange={postUserData}/>
              <label for='phone'>Phone</label>
              <input type="text" name="phone" className="form-control" value={userData.phone} onChange={postUserData}/>
              <label for='message'>Message</label>
              <textarea name="message" rows="4" cols="50" className='form-control' value={userData.message} onChange={postUserData}>
              </textarea>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                render='explicit'
                onChange= {HandleOnChange}
                className='recaptcha'
              />
              <button type="submit" className="btn btn-style" onClick={submitData}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts;