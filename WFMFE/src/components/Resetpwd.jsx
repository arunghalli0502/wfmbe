import resetpwd from '../img/resetpwd.png'
import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './resetpwd.css'
import axios from 'axios'


export default function Register() {
  let history = useHistory();
  let uemail = useRef();
  let uOtp = useRef();
  let upwd = useRef();
  let email = false;

  let enable = (e) => {
    e.preventDefault();
    let input = document.querySelectorAll(".disable")
    axios.get("http://localhost:9091/merchant/verifyotp",{headers:{email:uemail.current.value,otp:uOtp.current.value}})
   .then((response)=>{console.log(response)
    if(response.status===200)
    {
      email=true;
      handleEnable();
    }
  })
  let  handleEnable=()=>{
    if (email === true) 
    {
      console.log("otp verifed enabling the password input");
      for (let i in input)
      {
        document.querySelectorAll(".disable")[i].removeAttribute("disabled")
      }
    }
  }
}



  let handleOtp = (e) => {
    e.preventDefault();
    axios.get("http://localhost:9091/merchant/sendotp", { headers: { type: "forget", email: uemail.current.value } })
      .then((res) => { console.log(res); })
  }


  let handleresetpwd =(e)=>
  {
    e.preventDefault();
    axios.get("http://localhost:9091/merchant/setnewpassword", { headers: { newpassword: upwd.current.value+"", email: uemail.current.value } })
    .then( (res)=>{ 
      console.log(res); 
      if(res.status===200)
      {
        history.push("/login")
      }


      })

  }


  return (
    <div className="container  p-0 resethero">
      <div className="left">
        <div className="leftUpper">
          <h3>Reset Password</h3>
          <hr />
          <div className="welcome">
            <h1 className='text-capitalize'>Welcome to Wheels for money</h1>
            <p>
              If you have forgot your password dont worry you can reset it here.
            </p>
          </div>
          <div className="form">
            <form onSubmit={handleresetpwd}>
              <div className="emailVerify">
                <input type="email" placeholder="Enter Email and verify" ref={uemail} />
                <button className='bg-success otpbtn' onClick={handleOtp}>Send OTP</button>
              </div>

              <div className="emailVerify">
                <input type="number" placeholder="Enter your OTP" ref={uOtp} />
                <button className='bg-success otpbtn' onClick={enable} >Verify OTP</button>
              </div>

              <input type="password" className='disable' disabled placeholder="Enter Password" ref={upwd} />
              {/* <input type="email" placeholder="Enter Email" /> */}
              <div className="checkbox">
                <input type="checkbox" name="" id="" className='disable' disabled /><label htmlFor="">Remember Me</label>
              </div>
              <input type="submit" className='disable' disabled />
            </form>
          </div>
        </div>
        <div className="register">
          <p>
            Do you have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="rightUpper">
          <img src={resetpwd} alt="" />
        </div>
        <div className="rightLower">
          <h2>Rent Your Dream Car on Reasonable Prices</h2>
          <p>You can rent or sell your cars with this platform.</p>
        </div>
      </div>
    </div>
  )
}
