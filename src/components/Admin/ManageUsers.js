// import React, { useState } from "react";

// export default function ManageUsers() {
//   const [users, setUsers] = useState([
//     { id: 1, name: "Asha", email: "asha@example.com", active: true },
//     { id: 2, name: "Ravi", email: "ravi@example.com", active: false }
//   ]);

//   const toggle = (id) => {
//     setUsers(users.map(u => u.id === id ? { ...u, active: !u.active } : u));
//   };

//   return (
//     <div className="page container">
//       <h2 className="section-title">Manage Users</h2>
//       <div className="card">
//         <table className="table">
//           <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Status</th><th>Action</th></tr></thead>
//           <tbody>
//             {users.map(u=>(
//               <tr key={u.id}>
//                 <td>{u.id}</td>
//                 <td>{u.name}</td>
//                 <td>{u.email}</td>
//                 <td>{u.active ? "Active" : "Inactive"}</td>
//                 <td><button className="btn outline" onClick={()=>toggle(u.id)}>Toggle</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
