import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import "./CSS/CancelBooking.css";

function CancelBooking({ slots, setSlots }) {
  const history = useHistory();

  // Handle cancellation
  const handleCancel = (slotId) => {
    const confirmCancel = window.confirm(
      `Are you sure you want to cancel booking for Slot ${slotId}?`
    );

    if (!confirmCancel) return;

    setSlots((prev) =>
      prev.map((slot) =>
        slot.id === slotId ? { ...slot, status: "available" } : slot
      )
    );

    alert(`Booking for Slot ${slotId} cancelled successfully!`);
    history.push("/user-home"); // go back to dashboard
  };

  // Filter only booked slots
  const bookedSlots = slots.filter((s) => s.status === "occupied");

  return (
    <div>
      <Navbar />
      <div className="cancel-booking-page">
        <h2 className="elcome">Cancel Booking</h2>

        {bookedSlots.length === 0 ? (
          <p className="no-bookings">You have no active bookings.</p>
        ) : (
          <div className="slot-list">
            {bookedSlots.map((slot) => (
              <div key={slot.id} className="slot-item">
                <span>Slot {slot.id}</span>
                <button
                  className="cancel-btn"
                  onClick={() => handleCancel(slot.id)}
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CancelBooking;
