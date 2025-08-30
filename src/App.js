import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";

import BookingHistory from "./components/User/BookingHistory";
import CancelBooking from "./components/User/CancelBooking";
import SlotBooking from "./components/User/SlotBooking";

import UserHome from "./components/User/UserHome";
import UserProfile from "./components/User/UserProfile";

function App() {
  const [slots, setSlots] = useState([
    { id: 1, status: "available" },
    { id: 2, status: "occupied" },
    { id: 3, status: "available" },
    { id: 4, status: "available" },
    { id: 5, status: "reserved" },
    { id: 6, status: "available" },
    { id: 7, status: "available" },
    { id: 8, status: "special" },
    { id: 9, status: "occupied" },
    { id: 10, status: "available" },
    { id: 11, status: "occupied" },
    { id: 12, status: "available" },
    { id: 13, status: "available" },
    { id: 14, status: "available" },
    { id: 15, status: "occupied" },
    { id: 16, status: "available" },
    { id: 17, status: "available" },
    { id: 18, status: "occupied" },
    { id: 19, status: "available" },
    { id: 20, status: "available" },
    { id: 21, status: "available" },
    { id: 22, status: "occupied" },
    { id: 23, status: "available" },
    { id: 24, status: "available" },
    { id: 25, status: "available" },
  ]);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/admin-dashboard" component={AdminDashboard} />

        {/* User */}
        <Route path="/BookingHistory">
          <BookingHistory slots={slots} />
        </Route>
        <Route path="/CancelBooking">
          <CancelBooking slots={slots} setSlots={setSlots} />
        </Route>
        <Route path="/SlotBooking">
          <SlotBooking slots={slots} setSlots={setSlots} />
        </Route>
        
        <Route path="/user-home">
          <UserHome slots={slots} setSlots={setSlots} />
        </Route>
        <Route path="/user-profile" component={UserProfile} />

        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
