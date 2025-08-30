// import React, { useState } from "react";

// export default function ViewBookings() {
//   const [bookings] = useState([
//     { id: 1001, user: "Asha", slot: "A-1", time: "2025-08-24 10:00", status: "active" },
//     { id: 1002, user: "Ravi", slot: "B-3", time: "2025-08-23 09:30", status: "cancelled" }
//   ]);

//   return (
//     <div className="page container">
//       <h2 className="section-title">All Bookings</h2>
//       <div className="card">
//         <table className="table">
//           <thead><tr><th>ID</th><th>User</th><th>Slot</th><th>Time</th><th>Status</th></tr></thead>
//           <tbody>
//             {bookings.map(b=>(
//               <tr key={b.id}>
//                 <td>{b.id}</td>
//                 <td>{b.user}</td>
//                 <td>{b.slot}</td>
//                 <td>{b.time}</td>
//                 <td><span className="badge">{b.status}</span></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
