import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("rohit@gmail.com");
  const [password, setPassword] = useState("Sharma@123");

  const handleLogin = async () => {
    try{
     const res =  await axios.post(
      "http://localhost:7777/login",
      {
        emailId,
        password
      },
        {withCredentials: true}
    );
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div className="flex justify-center my-10">
     <div className="card card-border bg-base-300 w-96">
  <div className="card-body">
    <h2 className="card-title justify-center">Login Page</h2>
   <div>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email ID</legend>
  <input 
  type="text"
  value={emailId}
  className="input"
  onChange={(e) => setEmailId(e.target.value)}
  />
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input 
  type="password"
  value={password}
  className="input"
  onChange={(e) => setPassword(e.target.value)}
   />
</fieldset>

   </div>
    <div className="card-actions justify-center m-2">
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;