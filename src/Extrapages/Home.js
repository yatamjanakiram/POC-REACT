import React from "react";
import { useEffect, useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import AOS from 'aos';




// function MyCarousel() {
//   return (
//     <Carousel>    

//       <Carousel.Item>
//         <img
//           className="d-block1 w-100 text-center"
//           src="../images/slide1.jpg"
//           alt="Second slide"
//         />
        
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block1 w-100"
//           src="../images/slide2.jpg"
//           alt="Second slide"
//         />
        
//       </Carousel.Item>

//       {/* Add more Carousel.Item components for additional slides */}
//     </Carousel>
//   );
// }
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

const Doctors = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="1000">
      <h2 className="doctors-title text-center">
        <b>OUR DOCTORS</b>
      </h2>
      <div className="doctors-container">
        <div data-aos="fade-right">
          <div className="ourimg">
            <img src="images/Dr-R-Sangeetha-garu.png" alt="" />
            <div>
              <h2>DR. R. SANGEETHA</h2>
              <p>M.S., OSM.</p>
              <p>GENERAL SURGEON (LAPAROSCOPIC)</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="ourimg">
            <img src="images/DR.-JONNALA-SRINIVAS.png" alt="" />
            <div>
              <h2>DR. JONNALA SRINIVAS</h2>
              <p>M.S,, M.CH. NEURO (OSM)</p>
              <p>CONSULTANT NEUROSURGEON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const MyComponent = () => {
  return (
    <div>
    <center>
        <h3 style={{ color: '#ddddd', fontSize: '30px', fontFamily: 'spectral' }}>
          <b>Recent award </b>
        </h3>
      </center>
    <div className="container-fluid p-5">
      <div className="row">
        {/* Left Side: YouTube Video */}
        <div className="col-md-6">
          <div data-aos="fade-right">
            <div className="video-container">
              <iframe
                title="YouTube Video"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/E26QnhmFPo8"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side: Carousel with 2 Images */}
        <div className="col-md-6">
        <div data-aos="fade-left">
          <div className="carousel-container">
            <div id="imageCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="images/prize2.png"
                    alt="Image 1"
                    style={{ width: '100%', height: '300px' }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="images/prize.png"
                    alt="Image 2"
                    style={{ width: '100%', height: '300px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-md-6">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

          <img src="images/sl.jpeg" className="img-fluid" alt="Image" />
          </div>
        </div>
        <div className="col-md-6">
        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <div className="about-text">
            <h2>About Us</h2>
            <p className="text-justify">
              The Sri Laxmi Narasimha Neuro and General Hospital includes more
              than 30 medical, surgical and research specialists dedicated to
              the treatment of adult and pediatric patients with neurological
              and psychiatric disorders. The Hospital offers a disease-specific,
              patient-focused approach to care. Our unique, fully integrated
              model strengthens our current standard of care, allows us to
              measure quality and outcomes on a continual basis, and enhances
              our ability to conduct research. Our neurology, neurosurgery, and
              pediatric neurology and neurosurgery programs are nationally
              ranked for their expertise and care. We provide care across the
              spectrum of neurological disorders, including primary and
              metastatic tumors of the brain, spine, and nerves; pediatric and
              adult epilepsy; headache, facial pain syndromes and associated
              disorders; movement disorders such as Parkinson’s disease,
              essential tremor and dystonia; cerebral palsy and spasticity;
              hydrocephalus; metabolic
            </p>
            <Link to={"./about"} className="btn btn-primary ">
              Read More
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      text: "The best one",
      name: "Satheesh",
      rating: 5,
    },
    {
      text: "Excellent Hospital",
      name: "Ravindra",
      rating: 4.5,
    },
    {
      text: "Kind people",
      name: "Shashi",
      rating: 5,
    },
    {
      text: "Most affordable",
      name: "Sramakanth",
      rating: 4.5,
    },
    // Add more testimonials here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial(1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function showTestimonial(index) {
    setCurrentTestimonialIndex(index);
  }

  function changeTestimonial(direction) {
    let newIndex = currentTestimonialIndex + direction;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    } else if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    showTestimonial(newIndex);
  }

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Testimonials</h1>
      <div data-aos="zoom-out-left">
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              index === currentTestimonialIndex ? "active" : ""
            }`}
          >
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <div className="testimonial-rating">
              {Array.from(
                { length: Math.floor(testimonial.rating) },
                (_, i) => (
                  <i key={i} className="fa fa-star"></i>
                )
              )}
              {testimonial.rating % 1 !== 0 && (
                <i className="fa fa-star-half-o"></i>
              )}
            </div>
          </div>
        ))}
        <div className="testimonial-navigation">
          <button onClick={() => changeTestimonial(-1)}>&#10094;</button>
          <button onClick={() => changeTestimonial(1)}>&#10095;</button>
        </div>
      </div>
      </div>
    </div>
  );
};


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
const BottomBoxes = () => {
  return (
    <div className="bottom-boxes">
      <Link to="/doctors" className="book-doctor">
        Book a Doctor
      </Link>
      <Link to="/doctorform" className="book-appointment">
        Book appointment
      </Link>
    </div>
  );
};

function Footer() {
  return (
    <div data-aos="zoom-in-down">
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
            <h4 className="text-center">Follow Us on</h4>
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
    </div>
  );
}


const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null; // Cleanup scroll event listener
    };
  }, []);

  return (
    <button
      onClick={topFunction}
      id="myBtn"
      title="Go to top"
      style={{ display: showButton ? 'block' : 'none', position: 'fixed', right: '30px', bottom: '20px', height: '40px',width: '40px' }}
    >
      ^
    </button>
  );
};
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
 
  // const handleFeedbackChange = (event) => {
  //   setFeedback(event.target.value);
  // };
 
  // const handleSendFeedback = () => {
  //   // Replace with your actual form submission logic
  //   alert(`Feedback submitted: ${feedback}`);
  // };
 
  return (
<>
{/* <div className="feedback-btn" id="feedbackButton" style={{ zIndex: 9999 }}>
<p className="feedback-txt">Feedback</p>
</div> */}
 
      {/* <div className="feedback-section" id="feedbackSection" style={{ zIndex: 99999 }}>
<form>
<h2>Give Feedback</h2>
<textarea
            id="feedbackTextarea"
            className="feedback-textarea"
            rows="4"
            placeholder="Enter your feedback here"
            value={feedback}
            onChange={handleFeedbackChange}
></textarea>
<div className="feedback-buttons">
<button id="sendFeedback" onClick={handleSendFeedback}>
              Send
</button>
<button id="closeFeedback">Close</button>
</div>
</form>
</div> */}
 
      <div className="icon-bar" style={{ zIndex: 9999 }}>
<a href="https://www.facebook.com/profile.php?id=61550628269039&mibextid=ZbWKwL" className="facebook" target="_blank">
<i className="fa fa-facebook"></i>
</a>
<a href="#" className="whatsapp" target="_blank">
<i className="fa fa-whatsapp"></i>
</a>
        {/* WhatsApp JavaScript functionality */}
<script>
          {`
            var recipientPhoneNumber = "7981300613";
            var message = "Hello, this is my message!";
            var encodedMessage = encodeURIComponent(message);
            var whatsappButton = document.querySelector('.whatsapp');
            whatsappButton.addEventListener('click', function(event) {
              event.preventDefault();
              var whatsappUrl = \`https://wa.me/\${recipientPhoneNumber}?text=\${encodedMessage}\`;
              window.open(whatsappUrl, '_blank');
            });
          `}
</script>
<a href="https://www.youtube.com/@srilaxminarasimhahospital" className="youtube" target="_blank">
<i className="fa fa-youtube"></i>
</a>
<a href="https://www.instagram.com/srilaxminarasimhahospital/" className="instagram" target="_blank">
<i className="fa fa-instagram"></i>
</a>
</div>
</>
  );
};

function Home() {
  return (
    <>
      {/* <MyCarousel /> */}
      <Marquee />
      <MyComponent />
      <FeedbackForm />
      <Doctors />
      <AboutUs />
      <Testimonials />
      <Treatments />
      <Footer />
      <BottomBoxes />
      <ScrollToTopButton />
    </>
  );
}

export default Home;
