import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../Form.css';

function AdminLogin() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === "prince" && pwd === "123") {
      history.push("/admin-dashboard");
    } else {
      setErr("Invalid Admin ID or Password!");
    }
  };

  return (
    <div className='form-container'>
      <form className='form-design' onSubmit={handleSubmit}>
        <h1>Admin Login</h1>

        <label>Admin ID :</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />

        <label>Password :</label>
        <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} required />

        {err && <p style={{color:"red"}}>{err}</p>}

        <button type="submit">Login</button>

        <div className='form-footer'>
          <Link to="/login" className="link-text">Back to User Login</Link>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;

// import React from 'react';
// import { Link } from "react-router-dom";
// import '../Form.css';   // go one level up to access Form.css

// function AdminLogin() {
//   return (
//     <div className='form-container'>
//       <form className='form-design'>
//         <h1>Admin Login</h1>

//         <label className="un"> Admin ID : </label>
//         <input type="text" id="adminId" placeholder='Enter Admin ID' required />

//         <label className="pwd"> Password : </label>
//         <input type="password" id="adminPwd" placeholder='Enter password' required />

//         <button type="submit"> Login </button>

//         <div className='form-footer'>
//           <Link to="/login" className="link-text">Back to User Login</Link>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AdminLogin;
