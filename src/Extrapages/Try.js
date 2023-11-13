import React, { useState } from 'react'
import './Try.css';

// Treatments.js



const Treatments = () => {
  const handleDetailClick = (targetDetail) => {
    const details = document.querySelectorAll('.details-container details');
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute('open');
      }
    });
  };

  return (
    <div>
      <center>
        <h1 style={{ color: '#454e4c' }}>Our Treatments</h1>
      </center>
      <div className="details-container">
        <details onClick={(e) => handleDetailClick(e.target)}>
          <summary>BRAIN & SPINE SURGERIES</summary>
          Brain and spine surgeries are medical procedures performed to address various conditions affecting the brain,
          spinal cord, and surrounding structures.
        </details >
        {/* Add more details here */}
        <details onClick={(e) => handleDetailClick(e.target)}>
          <summary>NEURO & TRAUMA</summary>
          Neurotrauma refers to injuries to the brain, spinal cord, or nerves due to traumatic events such as accidents, falls, sports injuries, or violence.
        </details>
        <details onClick={(e) => handleDetailClick(e.target)}>
          <summary>EMERGENCY</summary>
          Emergency treatment for any medical condition, including neurotrauma, is focused on providing immediate and life-saving care to stabilize the patient's condition.
        </details>
        <details onClick={(e) => handleDetailClick(e.target)}>
          <summary>SPECIALIS DOCTORS</summary>
          Specialist doctors play a crucial role in providing advanced and specialized medical care for specific conditions and organ systems. They undergo extensive training and gain expertise in their chosen fields.
        </details>
        <details onClick={(e) => handleDetailClick(e.target)}>
          <summary>HEAD & SPINAL INJURIES</summary>
          The treatment of head and spinal injuries requires immediate and specialized care, as these injuries can have severe and potentially life-threatening consequences. The approach to treatment depends on the severity of the injury and the specific condition.
        </details>
        <details onClick={(e) => handleDetailClick(e.target)}>
          <summary>NECK & LOWBACK PAINS</summary>
          The treatment of neck and low back pains depends on the cause and severity of the pain. In many cases, these pains are due to musculoskeletal issues, but they can also result from underlying medical conditions.
        </details>
        <details onClick={(e) => handleDetailClick(e.target)}>
          <summary>GENERAL SURGERIES</summary>
          General surgery is a surgical specialty that involves the treatment of a wide range of medical conditions and diseases that require surgical intervention. General surgeons are trained to perform various surgical procedures across different organ systems.
        </details>
        <details onClick={(e) => handleDetailClick(e.target)}>
          <summary>GENERAL MEDICINE</summary>
          As a medical specialty that provides primary care to adults, general medicine (internal medicine) involves various treatments and interventions for a wide range of medical conditions. The treatment provided by general medicine physicians focuses on managing acute illnesses.
        </details>
        <details onClick={(e) => handleDetailClick(e.target)}>
          <summary>PARALYSIS</summary>
          The treatment for paralysis depends on the underlying cause and the extent of paralysis. Paralysis can result
          from various conditions.
        </details>
        
      </div>
    </div>
  );
};


const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <img src="../images/slide1.jpg" alt="Natural" className="marquee-image" />
        <img src="../images/slide2.jpg" alt="Natural"className="marquee-image"  />
      </div>
    </div>
  );
};


function Try() {
  return (
    <div>
     <Marquee />
        <Treatments />
        
    </div>
  )
}

export default Try