import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './register.css'
import register from '../img/register.png'
import axios from 'axios';

export default function Register() {
let hy=useHistory();
  let email=false;
//  let[email,setEmail]=useState(false);
 let uemail= useRef();
 let uOtp= useRef();
 let username= useRef();
 let upassword= useRef();
 let gst= useRef();
 let pan= useRef();
 let mobile= useRef();
 let street= useRef();
 let shop= useRef();
 let landmark= useRef();
 let city= useRef();
 let state= useRef();
 let country= useRef();
 let pin= useRef();
  let enable=()=>{

   let input= document.querySelectorAll(".disable")

   axios.get("http://localhost:9091/merchant/verifyotp",{headers:{email:uemail.current.value,otp:uOtp.current.value}})
   .then((e)=>{console.log(e);
    if(e.status==200)
    {
      email=true;
      handleEnable();
    }
  })
   let handleEnable=()=>{
    if(email===true)
    {
      for(let i in input){
        document.querySelectorAll(".disable")[i].removeAttribute("disabled")
        }
    }
    if(email===true)
    {
      document.querySelectorAll(".otpbtn")[0].setAttribute("disabled")
      document.querySelectorAll(".otpbtn")[1].setAttribute("disabled")
    }
    else{
      document.querySelectorAll(".otpbtn")[0].removeAttribute("disabled")
      document.querySelectorAll(".otpbtn")[1].removeAttribute("disabled")
    }

   }
  }

  let handleOtp=()=>{
    axios.get("http://localhost:9091/merchant/sendotp",{headers:{type:"signup",email:uemail.current.value}})
    .then((res)=>{console.log(res);})
  }


  let handleSignup=(e)=>{
    e.preventDefault();

    let merchant={
          email:uemail.current.value,
          merchantname:username.current.value,
          password:upassword.current.value,
          gst_no:gst.current.value,
          pan_no:pan.current.value,
          mobile:mobile.current.value,
          maddress:{
            organisation_name:shop.current.value,
            street:street.current.value,
            landmark:landmark.current.value,
            city:city.current.value,
            state:state.current.value,
            country:country.current.value,
            pincode:pin.current.value
          }
          }
    // console.log(merchant);

fetch("http://localhost:9091/merchant/signUp",{method:"POST", headers:{"Content-Type":"application/json"},
body:JSON.stringify(merchant)})
.then((e)=>{console.log(e);
  if(e.status==200)
  {
    alert("Signup successfuly");
  // hy.push('/login');
  }
  
})

  }

  return (
    
    <div className="container  p-0 hero">
      
    <div className="left">
    <div className="leftUpper">
    <h3>Sign Up As A Merchent</h3>
      
      <div className="form">
        <form onSubmit={handleSignup}>
          <div className="emailVerify">
          <input type="email" placeholder="Enter Email and verify" ref={uemail}/>
          <button className='bg-success otpbtn'onClick={handleOtp}>Send OTP</button>
          </div>

          <div className="emailVerify">
          <input type="number" placeholder="Enter your OTP" ref={uOtp} />
          <button className='bg-success otpbtn' onClick={enable}>Verify OTP</button>
          </div>

          <input className='disable' type="text" placeholder="Enter Username" ref={username} disabled/>
          <div className="pwd"><input className='disable' type="password" placeholder="Enter Password" ref={upassword} disabled />
          <input className='disable' type="password" placeholder="Confirm Password" disabled /></div>
          <input className='disable' type="text" placeholder="Enter your GST NUMBER" ref={gst} disabled />
          <input className='disable' type="text" placeholder="Enter your PAN NUMBER" ref={pan} disabled />
          <label>Address:</label>
          <div className="address">
          <input className='disable' type="text" placeholder="Mobile Number" ref={mobile} disabled />
          <input className='disable' type="text" placeholder="Shop name" ref={shop} disabled />
          <input className='disable' type="text" placeholder="Street" ref={street} disabled />
          <input className='disable' type="text" placeholder="Landmark" ref={landmark} disabled />
          <input className='disable' type="text" placeholder="City" ref={city} disabled />
          <input className='disable' type="text" placeholder="State" ref={state} disabled />
          <input className='disable' type="text" placeholder="Country" ref={country} disabled />
          <input className='disable' type="text" placeholder="PinCode" ref={pin} disabled />
          </div>
          
          {/* <div className="checkbox">
          <input disabled className='disable' type="checkbox" name="" id="" /><label htmlFor="">I agree with the <a>Terms & Conditions</a> </label>
          </div> */}
          <input type="submit" className='disable ' disabled/>
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
          <img src={register} alt="" />
      </div>
      <div className="rightLower">
          <h2>Welcome To Wheels For Money</h2>
          <p>You can easly sell or rent your cars, we are providing this facility all over india </p>
      </div>
    </div>
  </div>
  )
}












































































