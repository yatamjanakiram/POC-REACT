import './AppointmentDetails.css';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";
import axios from "axios";
 
const Admin = () =>{
    const [data, setData] =useState([]);
   
    const loadData = async() =>{
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
            };
       
            useEffect(() =>{
        loadData();
            }, []);
       
       
            const deleteAppointment = (id) => {
                if (
                  window.confirm("Are you sure that you wanted to delete that contact?")
                ) {
                  axios.delete(`http://localhost:5000/api/remove/${id}`); // Updated to /api/remove
                  toast.success("Contact Deleted Successfully");
                }
                setTimeout(() => {
                  loadData();
                }, 500);
              };
return(
 
<div style={{marginTop: "150px"}}>
<Link to="/admin">
         {/* <button className='btn btn-contact' style={{background: "#87C4FF",color:"black"}}>Appointment Booking</button> */}
         </Link>
         <h2>Admin Details</h2>
     
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
);
};
export default Admin;