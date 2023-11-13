import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import UserDataDisplay from "./UserDataDisplay";
import { toast } from "react-toastify";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
  margin: "0 auto",
};

const inputStyle = {
  marginBottom: "10px",
  padding: "8px",
  fontSize: "16px",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "white",
  padding: "10px",
  fontSize: "18px",
  cursor: "pointer",
};

const buttonStyle1 = {
  backgroundColor: "black",
  color: "white",
  padding: "10px",
  fontSize: "18px",
  width: "300px",
  cursor: "pointer",
};

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [disabledDates, setDisabledDates] = useState([]);
  const [disabledTimes, setDisabledTimes] = useState([]);

  const componentRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    useEffect(() => {
    const fetchDisabledDatesAndTimes = async () => {
      if (formData.doctor) {
        try {
          const response = await axios.get(`http://localhost:5000/api/getAppointments?doctor=${formData.doctor}`);
          const appointments = response.data;
          const disabledDates = appointments.map((appointment) => appointment.appointmentDate);
          const disabledTimes = appointments.map((appointment) => appointment.appointmentTime);
          setDisabledDates(disabledDates);
          setDisabledTimes(disabledTimes);
        } catch (error) {
          console.error("Error fetching disabled dates and times:", error);
        }
      }
    };
  
    fetchDisabledDatesAndTimes();
  }, [formData.doctor]);



  useEffect(() => {
    // Fetch the already booked dates and times for the selected doctor
    const fetchDisabledDatesAndTimes = async () => {
      if (formData.doctor) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/get?doctor=${formData.doctor}`
          );
          const appointments = response.data;
          const disabledDates = appointments.map(
            (appointment) => appointment.appointmentDate
          );
          const disabledTimes = appointments.map(
            (appointment) => appointment.appointmentTime
          );
          setDisabledDates(disabledDates);
          setDisabledTimes(disabledTimes);
        } catch (error) {
          console.error("Error fetching disabled dates and times:", error);
        }
      }
    };

    fetchDisabledDatesAndTimes();
  }, [formData.doctor]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the Node.js server to save the appointment details
      await axios.post("http://localhost:5000/api/post", formData);
      alert("Appointment booked successfully!");

      // Set the submitted data for display
      setSubmittedData(formData);

      setFormData({
        name: "",
        contact: "",
        doctor: "",
        appointmentDate: "",
        appointmentTime: "",
      });
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  const generatePDF = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Appointment Details",
    onAfterPrint: () => alert("Data saved in PDF"),
  });

  return (
    <div>
      {submittedData && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div ref={componentRef} style={{ marginTop: "100px" }}>
            <UserDataDisplay user={submittedData} />
          </div>
          <button onClick={generatePDF} style={{ alignSelf: "center" }}>
            Download as PDF
          </button>
        </div>
      )}

      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 className="p-2">Appointment Form</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          style={inputStyle}
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="contact"
          placeholder="Your Contact No"
          style={inputStyle}
          value={formData.contact}
          onChange={handleChange}
        />
        <select
          name="doctor"
          style={inputStyle}
          value={formData.doctor}
          onChange={handleChange}
        >
          <option value="">Choose a Doctor</option>
          <option value="Dr. Jhon">Dr. Jhon</option>
          <option value="Dr.Ramesh">Dr. Ramesh</option>
          <option value="Dr.Sowjanya">Dr. Sowjanya</option>
          <option value="Dr.Srikanth">Dr. srikanth</option>
        </select>
        <input
          type="date"
          name="appointmentDate"
          style={inputStyle}
          value={formData.appointmentDate}
          onChange={handleChange}
          disabled={disabledDates.includes(formData.appointmentDate)}
        />
        <select
          name="appointmentTime"
          style={inputStyle}
          value={formData.appointmentTime}
          onChange={handleChange}
          disabled={disabledTimes.includes(formData.appointmentTime)}
        >
          <option value="">Choose a slot</option>
          <option value="10 to 10:30">10 to 10:30</option>
          <option value="10:30 to 11">10:30 to 11</option>
          <option value="11 to 11:30">11 to 11:30</option>
          <option value="11:30 to 12">11:30 to 12</option>
        </select>
        <button type="submit" style={buttonStyle}>
          Book Appointment
        </button>
        <Link to={"/"}>
          <input
            type="button"
            style={buttonStyle1}
            className="btn btn-dark"
            value="Go Back"
          ></input>
        </Link>
      </form>
    </div>
  );
};

export default Appointment;
