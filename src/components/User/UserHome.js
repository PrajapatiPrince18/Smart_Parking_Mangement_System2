
import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import { PieChart, Pie, Cell, Tooltip,  ResponsiveContainer } from "recharts";

import "./CSS/UserHome.css";

function UserHome({ slots }) {  // ✅ user can't change slots, no setSlots needed
  const history = useHistory();

  const pieData = [
    { name: "Available", value: slots.filter((s) => s.status === "available").length },
    { name: "Occupied", value: slots.filter((s) => s.status === "occupied").length },
    { name: "Reserved", value: slots.filter((s) => s.status === "reserved").length },
    { name: "Special", value: slots.filter((s) => s.status === "special").length },
  ];

  const COLORS = ["#28a745", "#dc3545", "#ffc107", "#007bff"];

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h2 className="welcome"> Welcome, User</h2>

        <div className="first-section fsection">
          <h3 className="section-title"> Parking Summary </h3>
          <div className="cards">
            <div className="card">
              <h3>Total Slots</h3>
              <p>{slots.length}</p>
            </div>
            <div className="card">
              <h3>Available</h3>
              <p>{slots.filter((s) => s.status === "available").length}</p>
            </div>
            <div className="card">
              <h3>Occupied</h3>
              <p>{slots.filter((s) => s.status === "occupied").length}</p>
            </div>
          </div>
        </div>

        <div className="second-section fsection">
          <h3 className="section-title"> Slot Status </h3>
          <div className="legend">
            <div className="legend-item available">Available</div>
            <div className="legend-item occupied">Occupied</div>
            <div className="legend-item reserved">Reserved</div>
            <div className="legend-item special">Special</div>
          </div>
        </div>

        <div className="third-section fsection">
          <h3 className="section-title"> Parking Layout </h3>
          <div className="slot-grid">
            {slots.map((slot) => (
              <div
                key={slot.id}
                className={`slot ${slot.status} read-only`} // ✅ add read-only class
              >
                {slot.id}
              </div>
            ))}
          </div>
        </div>

        <div className="fourth-section fsection">
          <h3 className="section-title"> ⚡ Quick Actions </h3>
          <div className="actions">
            <button onClick={() => history.push("/slotbooking")}>Book Slot</button>
            <button onClick={() => history.push("/cancelbooking")}>Cancel Booking</button>
            <button onClick={() => history.push("/bookinghistory")}>Booking History</button>
          </div>
        </div>

        <div className="fifth-section fsection">
          <h3 className="section-title"> Parking Slot Distribution </h3>
          <div className="chart-section">
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius="80%"
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      
    </PieChart>
  </ResponsiveContainer>
</div>

        </div>

        <footer className="footer">
          <div className="footer-container">
            <p>© 2025 Smart Parking System. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default UserHome;
