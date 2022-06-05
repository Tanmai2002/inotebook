import React,{useState} from "react";
import { loginApi } from "../context/notes/ApiCalls";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({email:'',password:'',cpassword:'',username:''});
  const [signup, setSignUp] = useState(false);
  
  let history=useNavigate();


  const onSubmit=async (e)=>{
    e.preventDefault();
    if(signup){
    
  }else{
    const res=await loginApi(credentials.email,credentials.password);
    if(!res.success){
      alert(res.Error);
      return;
    }
    localStorage.setItem('token',res.authToken);
    
    history('/');
    console.log(res);
  }

  }
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value});

  }
  return (
    <div>
      <h2>{signup?'Sign Up':'Login'}</h2>
      <form onSubmit={onSubmit}>

      {signup && <div className="mb-3">
          <label htmlFor="username" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            
            onChange={onChange}
            value={credentials.username}
            name="username"
          />
        </div>}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={credentials.email}
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            
            onChange={onChange}
            value={credentials.password}
            name="password"
          />
        </div>


        {signup&&<div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
           Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            onChange={onChange}
            value={credentials.cpassword}
            name="cpassword"
          />
        </div>}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div style={{cursor:'pointer'}} onClick={()=>setSignUp(!signup)}>{signup?'Login':'Sign Up'}</div>

    </div>
  );
};

export default Login;
