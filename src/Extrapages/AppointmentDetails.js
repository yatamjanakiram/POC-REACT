import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios'
import './AppointmentDetails.css';
import { useNavigate } from 'react-router-dom'

function AppointmentDetails() {
  const [data, setData] = useState([]);
  
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const deleteAppointment = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that appointment?")
    ) {
      axios.delete(`http://localhost:5000/api/delete/${id}`); // Updated to /api/remove
      toast.success("Appointment Deleted Successfully");
    }
    setTimeout(() => {
      loadData();
    }, 500);
  };
      
  return (
    <div>
        <div style={{ marginTop: "150px" }}>
        
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>NO</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Contact</th>
              <th style={{ textAlign: "center" }}>Doctor</th>
              <th style={{ textAlign: "center" }}>AppointmentDate</th>
              <th style={{ textAlign: "center" }}>AppointmentTime</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.contact}</td>
                  <td>{item.doctor}</td>
                  <td>{item.appointmentDate}</td>
                  <td>{item.appointmentTime}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit1">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete1"
                      onClick={() => deleteAppointment(item.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view1">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
        
    </div>
  )
}

export default AppointmentDetails;