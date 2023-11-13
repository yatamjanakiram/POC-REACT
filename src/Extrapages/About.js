import React from 'react'
import './About.css';



function AboutUs() {
  return (
    <div className="containers">
      <h1 className="heading">About SLN Hospital</h1>
      <p className="paragraph">
        The Sri Laxmi Narasimha Neuro and General Hospital includes more than 30 medical, surgical and
        research specialists dedicated to the treatment of adult and pediatric patients with neurological and psychiatric
        disorders. The Hospital offers a disease-specific, patient-focused approach to care. Our unique, fully integrated
        model strengthens our current standard of care, allows us to measure quality and outcomes on a continual basis,
        and enhances our ability to conduct research. Our neurology, neurosurgery, and pediatric neurology and neurosurgery
        programs are nationally ranked for their expertise and care. We provide care across the spectrum of neurological
        disorders, including primary and metastatic tumors of the brain, spine, and nerves; pediatric and adult epilepsy;
        headache, facial pain syndromes and associated disorders; movement disorders such as Parkinson’s disease,
        essential tremor and dystonia; cerebral palsy and spasticity; hydrocephalus; metabolic and mitochondrial disease;
        fetal and neonatal neurological problems; multiple sclerosis; stroke; cerebral aneurysms; brain and spinal
        vascular malformations; carotid stenosis; intracranial atherosclerosis; nerve and muscle diseases, including
        amyotrophic lateral sclerosis, peripheral neuropathy, myasthenia gravis and myopathies; sleep disorders;
        and mental/behavioral health disorders and chemical dependencies.
      </p>
    </div>
  );
}

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

function About() {
  return (
    <div>
      <AboutUs />
      <Footer />
    </div>
  )
}

export default About