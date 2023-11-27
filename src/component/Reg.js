import React from 'react';
import './Reg.css'; // Import your CSS file
import { useState } from 'react';
import axios from "axios"
export default function Reg() {
  // You can add state or additional logic as needed

  
    const[fname,setFName]=useState("");
    const[lname,setLName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handleFname=(event)=>
    {
        setFName(event.target.value);
    }
    const handleLname=(event)=>
    {
        setLName(event.target.value);
    }
    const handleEmail=(event)=>
    {
        setEmail(event.target.value);
    }
    const handlePassword=(event)=>
    {
        setPassword(event.target.value);
    }
    const handleSubmit=(event)=>
    {
        event.preventDefault();
        axios.
        post("http://localhost:3001/users",{"fname":fname,"lname":lname,"email":email,"password":password})
        .then((res)=>
        {
            console.log(res.data);
        })
        .catch((error)=>
        {
            console.log("Error: "+error);
        })
    }
    return (
      <div class="rt">
      <div className="container" >
        <div className="title">Registration</div>
        <div className="content" style={{marginLeft:"10%"}}>
          <form action="#">
            <div className="user-details" >
              <div className="input-box">
                <span className="details">First Name</span>
                <input type="text" placeholder="Enter your name" required onChange={handleFname}/>
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input type="text" placeholder="Enter your name" required onChange={handleLname}/>
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder="Enter your username" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required onChange={handleEmail}/>
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" required onChange={handlePassword} />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" onClick={handleSubmit}/>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }


// export default Reg;
