import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import "./CSS/UserProfile.css";

function UserProfile() {
  const history = useHistory();

  // Dummy user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "9876543210",
    password: "********",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save profile changes
  const handleSave = () => {
    setUser(formData);
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  // Logout function → redirects to login page
  const handleLogout = () => {
    history.push("/login");
  };

  return (
    <div>
      <Navbar />
      <h2 className="heading">User Profile</h2>
      <div className="profile-page">
        {!editMode ? (
          <div className="profile-details">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Password:</strong> {user.password}
            </p>
            <button className="edit-btn" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="profile-edit">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>

            <div className="profile-buttons">
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
              <button className="cancel-btn" onClick={() => setEditMode(false)}>
                Cancel
              </button>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
