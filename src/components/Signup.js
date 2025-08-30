import React, { useState } from 'react';
import { Link ,useHistory} from "react-router-dom";
import "./Form.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history=useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple regex

    if (!username) return setError("Username required");
    if (!emailPattern.test(email)) return setError("Enter valid email");
    if (password.length < 6) return setError("Password ≥ 6 chars");
    
    setError("");
    alert("✅ Registered Successfully");
    history.push("/login");
  };

  return (
    <div className='form-container'>
      <form className='form-design' onSubmit={handleSubmit}>
        <h1>Registration Form</h1>

        <label className="un"> Username : </label>
        <input type="text" id="un" placeholder='Enter your name'
          value={username} onChange={(e) => setUsername(e.target.value)} />

        <label className="Email"> Email : </label>
        <input type="email" id="Email" placeholder='Enter your email'
          value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="pwd"> Password : </label>
        <input type="password" id="pwd" placeholder='Enter password'
          value={password} onChange={(e) => setPassword(e.target.value)} />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit"> Register </button>

        <div className='form-footer'>
          Already have an account? <Link to="/login" className="link-text">Login</Link>
        </div>
      </form>
    </div>
  );
}
export default Signup;
