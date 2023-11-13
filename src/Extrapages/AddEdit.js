import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
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


const initialState = {
  name: "",
  contact: "",
  doctor: "",
  appointmentDate: "",
  appointmentTime: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, contact, doctor, appointmentDate,appointmentTime } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !contact || !doctor || !appointmentDate || !appointmentTime) {
      toast.error("Please provide value into input field");
    } else {
      if (!id) {
        axios
          .post("http://localhost:5000/api/post", {
            // Updated to /api/post
            name,
            contact,
            doctor,
            appointmentDate,
            appointmentTime,
          })
          .then(() => {
            setState({ name: "", email: "", contact: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Appointment added Successfully");
      } else {
        axios
          .put(`http://localhost:5000/api/update/${id}`, {
            // Updated to /api/update
            name,
            contact,
            doctor,
            appointmentDate,
            appointmentTime,
          })
          .then(() => {
            setState({ name: "", contact: "", doctor: "", appointmentDate: "", appointmentTime: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Appointment Updated Successfully");
      }

      setTimeout(() => {
        navigate("/admin"); // Use navigate as a function
      }, 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <h2>Appointment </h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name..."
          value={name || ""}
          onChange={handleInputChange}
        ></input>
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Contact No..."
          value={contact || ""}
          onChange={handleInputChange}
        ></input>
        <label htmlFor="doctor">Doctor</label>
        
        <select
        type="doctor"
        name="doctor"
        style={inputStyle}
        value={state.doctor}
        onChange={handleInputChange}
      >
        <option value="">Choose a Doctor</option>
        <option value="Dr. Jhon">Dr. Jhon</option>
        <option value="Dr.Ramesh">Dr. Ramesh</option>
        <option value="Dr.Sowjanya">Dr. Sowjanya</option>
        <option value="Dr.Srikanth">Dr. srikanth</option>
      </select>
      <label htmlFor="date">Date</label>
      <input
  type="date"
  name="appointmentDate"
  style={inputStyle}
  value={state.appointmentDate} // Change from formData.appointmentDate to state.appointmentDate
  onChange={handleInputChange}
/>
<label htmlFor="time">Time</label>
<select
      
      name="appointmentTime"
      style={inputStyle}
      value={state.appointmentTime}
      onChange={handleInputChange}
    >
      <option value="">Choose a slot</option>
      <option value="10 to 10:30">10 to 10:30</option>
      <option value="10:30 to 11">10:30 to 11</option>
      <option value="11 to 11:30">11 to 11:30</option>
      <option value="11:30 to 12">11:30 to 12</option>
    </select>


        <input type="submit" value={id ? "Update" : "Save"}></input>
        <Link to={"/admin"}>
          <input type="button" value="Go Back"></input>
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
