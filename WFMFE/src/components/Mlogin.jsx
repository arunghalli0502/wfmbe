import "./login.css";
import login from '../img/login.png'
import { Link, useHistory } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export default function Mlogin() {
  let historty=useHistory();
  let emailOrUsername= useRef();
  let password= useRef();



  let handlelogin=(e)=>{
    e.preventDefault();
    console.log("hadle login executed");
    axios.get("http://localhost:9091/merchant/login", {
      headers:{
                merchantnameOremail:emailOrUsername.current.value,
                password:password.current.value
      }
    })
    .then( (response)=>{ 
      if(response.status==200)
      {
        console.log(response.data);
        let data=response.data
        console.log(data);
       localStorage.setItem("name",data.name)
       localStorage.setItem("id",data.id)

        historty.push(`/Mdashboard${data.id}`)
      }
      else{
        console.log("its not working");
        alert("invalid credential");
      }
    }  )
  }

  return (
    <div className="container  p-0 loginhero">
      <div className="left">
      <div className="leftUpper">
      <h3>Merchant Login</h3>
        <hr />
        <div className="welcome">
          <h1 className="text-capitalize">Welcome to Wheels for money</h1>
          <p>
            Plese login with your email or username and password!!!  
          </p>
        </div>
        <div className="form">
          <form onSubmit={handlelogin}>
            <input type="text" placeholder="Enter Username / Email" ref={emailOrUsername} />
            <input type="password" placeholder="Enter Password" ref={password} />
            <div className="checkbox">
            <input type="checkbox" name="" id="" /><label htmlFor="">Remember me</label>
            </div>
            <input type="submit" />
            <Link to="/resetpwd">Forget Password</Link>
          </form>
        </div>
      </div>
        <div className="register">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="rightUpper">
            <img src={login} alt="" />
        </div>
        <div className="rightLower">
            <h2>Rent Your Dream Car on Reasonable Prices</h2>
            <p>You can rent or sell your cars with this platform.</p>
        </div>
      </div>
    </div>
  );
}
