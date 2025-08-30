// import React, { useState } from "react";

// export default function ManageSlots() {
//   const [slots, setSlots] = useState([
//     { id: 1, name: "A-1", status: "available" },
//     { id: 2, name: "A-2", status: "unavailable" },
//     { id: 3, name: "B-1", status: "available" }
//   ]);
//   const [newSlot, setNewSlot] = useState({ name: "", status: "available" });

//   const addSlot = (e) => {
//     e.preventDefault();
//     if (!newSlot.name.trim()) return;
//     setSlots([...slots, { id: Date.now(), ...newSlot }]);
//     setNewSlot({ name: "", status: "available" });
//   };

//   const toggleStatus = (id) => {
//     setSlots(slots.map(s => s.id === id ? { ...s, status: s.status === "available" ? "unavailable" : "available" } : s));
//   };

//   const removeSlot = (id) => setSlots(slots.filter(s => s.id !== id));

//   return (
//     <div className="page container">
//       <h2 className="section-title">Manage Slots</h2>
//       <div className="card mb-12">
//         <form className="grid grid-2" onSubmit={addSlot}>
//           <div>
//             <label>Slot Name</label>
//             <input className="input" value={newSlot.name} onChange={e=>setNewSlot({...newSlot, name: e.target.value})} placeholder="C-4" />
//           </div>
//           <div>
//             <label>Status</label>
//             <select className="input" value={newSlot.status} onChange={e=>setNewSlot({...newSlot, status: e.target.value})}>
//               <option value="available">available</option>
//               <option value="unavailable">unavailable</option>
//             </select>
//           </div>
//           <div>
//             <button className="btn" type="submit">Add Slot</button>
//           </div>
//         </form>
//       </div>

//       <div className="card">
//         <table className="table">
//           <thead>
//             <tr><th>ID</th><th>Name</th><th>Status</th><th>Actions</th></tr>
//           </thead>
//           <tbody>
//             {slots.map(s=>(
//               <tr key={s.id}>
//                 <td>{s.id}</td>
//                 <td>{s.name}</td>
//                 <td><span className="badge">{s.status}</span></td>
//                 <td>
//                   <button className="btn outline" onClick={()=>toggleStatus(s.id)}>Toggle</button>{" "}
//                   <button className="btn" onClick={()=>removeSlot(s.id)}>Remove</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
