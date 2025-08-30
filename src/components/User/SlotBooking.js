
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import "./CSS/SlotBooking.css";

function SlotBooking({ slots, setSlots }) {
    const history = useHistory();

    const [selectedSlot, setSelectedSlot] = useState(null);
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState("");

    const handleSlotSelect = (slot) => {
        if (slot.status !== "available") return;
        setSelectedSlot(slot.id);
    };

    const handleBooking = (e) => {
        e.preventDefault();
        if (!selectedSlot || !vehicleNumber || !bookingDate || !bookingTime) {
            alert("Please fill all fields and select a slot!");
            return;
        }

        alert(
            `Slot ${selectedSlot} booked successfully!\nDate: ${bookingDate}\nTime: ${bookingTime}`
        );

        setSlots((prev) =>
            prev.map((slot) =>
                slot.id === selectedSlot ? { ...slot, status: "occupied" } : slot
            )
        );

        // Reset form
        setSelectedSlot(null);
        setVehicleNumber("");
        setBookingDate("");
        setBookingTime("");

        history.push("/user-home");
    };

    return (
        <div>
        <Navbar />
        <div className="slot-booking-page">
            
                <h2 className="welcome">Book a Parking Slot</h2>

                {/* Slot Selection */}
                <div className="Ssections">
                    <h3 className="section-title">Select an Available Slot</h3>
                    <div className="slot-grid">
                        {slots.map((slot) => (
                            <div
                                key={slot.id}
                                className={`slot ${slot.status} ${selectedSlot === slot.id ? "selected" : ""}`}
                                onClick={() => handleSlotSelect(slot)}
                            >
                                {slot.id}
                            </div>
                        ))}
                    </div>
                    {selectedSlot && (
                        <p className="selected-info">Selected Slot: {selectedSlot}</p>
                    )}
                </div>

                {/* Booking Form */}
                <div className="Ssections">
                    <h3 className="section-title">Enter Vehicle Details & Time</h3>
                    <form className="booking-form" onSubmit={handleBooking}>
                        <input
                            type="text"
                            placeholder="Vehicle Number"
                            value={vehicleNumber}
                            onChange={(e) => setVehicleNumber(e.target.value)}
                        />
                        <input
                            type="date"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                        />
                        <input
                            type="time"
                            value={bookingTime}
                            onChange={(e) => setBookingTime(e.target.value)}
                        />
                        <button type="submit">Confirm Booking</button>
                    </form>
                </div>

                {/* Legend */}
                <div className="Ssections">
                    <h3 className="section-title">Slot Status</h3>
                    <div className="legend">
                        <span className="legend-item available">Available</span>
                        <span className="legend-item occupied">Occupied</span>
                        <span className="legend-item reserved">Reserved</span>
                        <span className="legend-item special">Special</span>
                    </div>
                </div>
            
        </div>
        </div>
    );
}

export default SlotBooking;
