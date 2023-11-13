import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";
import {useReactToPrint} from "react-to-print"

const View = () => {
  const [user, setUser] = useState({});
  const componentPDF = useRef();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/get/${id}`);
        setUser({ ...response.data[0] });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);

  const generatePDF = useReactToPrint({
    content: ()=>componentPDF.current,
    documentTitle: "Appointment Details",
    onAfterPrint:()=>alert("Data saved in PDF")
  });

  return (
    <div className="text-center">
    <div ref={componentPDF} style={{width: '100%'}}>
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Appointment Detail</p>
        </div>
        
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br></br>
          <br></br>
          <strong>Name: </strong>
          <span>{user.name}</span>
          <br></br>
          <br></br>
          <strong>Contact: </strong>
          <span>{user.contact}</span>
          <br></br>
          <br></br>
          <strong>Doctor: </strong>
          <span>{user.doctor}</span>
          <br></br>
          <br></br>
          <strong>AppointmentDate: </strong>
          <span>{user.appointmentDate}</span>
          <br></br>
          <br></br>
          <strong>AppointmentTime: </strong>
          <span>{user.appointmentTime}</span>
          <br></br>
          <br></br>
          </div>
          
          
        </div>
      </div>
    </div>
    <Link to="/admin">
    <div className="btn btn-edit1">Go Back </div>
  </Link>
  
    <button className="btn btn-edit1" onClick={ generatePDF}>Download</button>
    </div>
  );
};

export default View;
