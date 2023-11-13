import Modal from 'react-modal';
import React, { Component } from 'react';
import { useState } from 'react';
import './Doctors.css';
import { Link } from 'react-router-dom';


const DoctorComponent = () => {
  const [doctors, setDoctors] = useState([
    {
      name: "DR. R. SANGEETHA",
      specialization: "General Surgeon (laproscopic)",
      
    },
    {
      name: "DR. JONNALA SRINIVAS",
      specialization: "Consultant Neurosurgeon",
      
    },
    // ... (Add data for other doctors)
    {
      name: "DR SUBRATH",
      specialization: "Ms General And Laparoscopy Surgeon",
    },
    {
      name: "DR HARI KRISHNA",
      specialization: "MD DM neuro physician",
    },
    {
      name: "DR SUMAN",
      specialization: "MD pulmonologist",
    },
    {
      name: "DR SUDHEER",
      specialization: "Ms Ortho",
    },
    {
      name: "DR SURESH GOUD",
      specialization: "Ms Mch Urology",
    },
    {
      name: "DR VINOD KUMAR",
      specialization: "Md Dm Cardiologist",
    },
    {
      name: "DR HARIKRISHNA",
      specialization: "Gastroenterology",
    },
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isDoctorModalOpen, setDoctorModalOpen] = useState(false);
  const [bookingFormOpen, setBookingFormOpen] = useState(false);

  const handleShowDoctorInfo = (doctor) => {
    setSelectedDoctor(doctor);
    setDoctorModalOpen(true);
  };

  const handleCloseDoctorInfo = () => {
    setSelectedDoctor(null);
    setDoctorModalOpen(false);
  };

 

  const handleCloseBookingForm = () => {
    setBookingFormOpen(false);
  };

  const handleSubmitBookingForm = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    handleCloseBookingForm();
  };

  return (
    <div>
      <center>
        <h1 style={{ color: "#366157" }}>Our Doctors</h1>
      </center>

      <div className="doctor-container">
        {doctors.map((doctor) => (
          <div
            key={doctor.name}
            className="doctor-box"
            onClick={() => handleShowDoctorInfo(doctor)}
          >
            <div className="doctor-name">{doctor.name}</div>
            <div className="doctor-specialization">{doctor.specialization}</div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isDoctorModalOpen}
        onRequestClose={handleCloseDoctorInfo}
        contentLabel="Doctor Information"
      >
        <span className="close-popup" onClick={handleCloseDoctorInfo}>&times;</span>
        <h2 id="doctor-name">{selectedDoctor?.name}</h2>
        <p className="doctor-specialization text-center" id="doctor-specialization">
          {selectedDoctor?.specialization}
        </p>
        <p className="doctor-info text-center" id="additional-info">
          {selectedDoctor?.additionalInfo}
        </p>
        <Link to="/DoctorForm" className='text-center'>
        <button className="book-button text-center m-3" >
          Book an Appointment
        </button>
        </Link>
      </Modal>
      
    </div>
  );
};
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              The Sri Laxmi Narasimha Neuro and General Hospital includes more than 30 medical, surgical, and research specialists dedicated to the treatment of adult and pediatric patients with neurological and psychiatric disorders. The Hospital offers a disease-specific, patient-focused approach to care. Our unique, fully integrated model strengthens our current standard of care, allows us to measure quality and outcomes on a continual basis, and enhances our ability to conduct research. Our neurology, neurosurgery, and pediatric neurology and neurosurgery programs are nationally ranked for their expertise and care.
            </p>
            <p>Call us: 9505099108</p>
            <p>Email Id: slnhospitalknr@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h4 className='text-center'>Follow Us on</h4>
            <div className="follow-us text-center">
              <a href="https://www.facebook.com/profile.php?id=61550628269039&mibextid=ZbWKwL" target="_blank"><i className="fa fa-facebook-square"></i></a>
              <a href="https://www.youtube.com/@srilaxminarasimhahospital" target="_blank"><i className="fa fa-youtube-play"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Google Map</h4>
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3784.8394269662454!2d79.12166297518984!3d18.445598382633435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI2JzQ0LjIiTiA3OcKwMDcnMjcuMyJF!5e0!3m2!1sen!2sin!4v1691731973093!5m2!1sen!2sin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright-text">
              © Copyrights Reserved By Sri Laxmi Narasimha Hospital.<br />
              Designed & Developed By <span><a href="https://yatayati.com/" className="orange-text">YATAYATI Info Solutions</a></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


function Doctors() {
  return (
    <div>
      <DoctorComponent />
      
      <Footer />
     
    </div>
  )
}

export default Doctors;