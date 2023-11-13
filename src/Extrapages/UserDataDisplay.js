import React from "react";

const UserDataDisplay = ({ user }) => {
  return (
    <div>
      {user ? (
        <div>
          
      <div className="card1">
        <div className="card1-header">
          <p>User Appointment Detail</p>
        </div>
        <div className="container">
          <p>Name: {user.name}</p>
          <p>Contact: {user.contact}</p>
          <p>Doctor: {user.doctor}</p>
          <p>Appointment Date: {user.appointmentDate}</p>
          <p>Appointment Time: {user.appointmentTime}</p>
          </div>
        </div>
        </div>
        
      ) : (
        <p>User data not available</p>
      )}
    </div>
  );
};

export default UserDataDisplay;
