import React from "react";
import Navbar from "../Navbar";
import "./CSS/BookingHistory.css";

function BookingHistory({ historyData = [] }) {
  return (
    <div>
      <Navbar />
      <div className="booking-history-page">
        <h2 className="welcome"> Booking History</h2>

        {historyData.length === 0 ? (
          <p className="no-history">No booking history available.</p>
        ) : (
          <table className="history-table">
            <thead>
              <tr>
                <th>Slot ID</th>
                <th>Vehicle Number</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action Time</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((record, index) => (
                <tr key={index}>
                  <td>{record.slotId}</td>
                  <td>{record.vehicleNumber || "-"}</td>
                  <td>{record.date || "-"}</td>
                  <td>{record.time || "-"}</td>
                  <td className={record.status.toLowerCase()}>{record.status}</td>
                  <td>{record.actionTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default BookingHistory;
