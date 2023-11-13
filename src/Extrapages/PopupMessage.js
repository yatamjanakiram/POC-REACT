import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

 

 
const PopupMessage = ({ isOpen, onRequestClose }) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    // Close the modal when the component mounts
    // This simulates the behavior of the original JavaScript code
    setModalIsOpen(false);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Popup Modal"
    className="popup-modal"
    overlayClassName="overlay-modal"
  >
    <span className="popup-close" onClick={closeModal}>&times;</span>
    <span className="blink larger-text"><b>First time free online consultation</b></span>
    <br />
    <img src="images/logo.png" alt="24/7 Service Available" className="hospital-logo img-fluid" />
    <div className="appointment-link">
      <a href="regi.html" className="appointment-link-text changing-color">Click here for an appointment</a>
    </div>
  </Modal>
  );
};
 
export default PopupMessage;