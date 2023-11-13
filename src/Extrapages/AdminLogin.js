
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";
 
const initialState = {
  email: "",
  password: "",  
};
 
const expectedCredentials = {
  email: "yatayati@gmail.com",
  password: "123456789",
};
 
const AdminLogin = ({ setAuthenticated }) => {
  const [state, setState] = useState(initialState);
  const { email, password } = state;
 
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);
 
   const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please provide a value for each input field");
    } else {
      // Check if entered credentials match the expected credentials
      if (email === expectedCredentials.email && password === expectedCredentials.password) {
        toast.success("Login successfully");
        setAuthenticated(true);
        setTimeout(() => navigate("/admin"), 500);
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    }
  };
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
 
  return (
    <div style={{ marginTop: "100px" }}>
      {/* <Link to="/"> */}
        {/* <button className='btn btn-contact' style={{background: "#87C4FF",color:"black"}}>Appointment Booking</button> */}
      {/* </Link> */}
 
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
          background:"whiteSmoke",
          height:"50vh",
          border:"2px solid grey",
          boxShadow:"revert-layer"
        }}
        onSubmit={handleSubmit}
      >
        <h2> User Admin</h2>
 
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email..."
          value={email || ""}
          onChange={handleInputChange}
          style={{height:"50px",
        width: "270px"}}
        />
 
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your password..."
          value={password || ""}
          onChange={handleInputChange}
          style={{height:"50px",
          width: "270px"}}
        />
        {/* <Link to="/details"> */}
<input type="submit" style={{ background: "grey",height:"40px" ,margin:"20px 0",padding: "10px"}} value={id ? "Update" : "Login"} />
{/* </Link> */}
      </form>
    </div>
  );
};
 
export default AdminLogin;