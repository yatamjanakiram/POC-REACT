import React, { Component } from 'react';
import './Images.css';
import Img from './Img';
import LargeImage from './LargeImg';

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
              <h4>Follow Us on</h4>
              <div className="follow-us">
                <a href="https://www.facebook.com/profile.php?id=61550628269039&mibextid=ZbWKwL" ><i className="fa fa-facebook-square"></i></a>
                <a href="https://www.youtube.com/@srilaxminarasimhahospital" ><i className="fa fa-youtube-play"></i></a>
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
  


class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgLst: [
                {
                    imgSrc: '../images/2.jpg',
                    title: 'Shayon Image One',
                    details: "Shayon Image One. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/3.jpg',
                    title: 'Shayon Imege Two',
                    details: "Shayon Imege Two. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/4.jpg',
                    title: 'Shayon Image Three',
                    details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/5.jpeg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/8.jpeg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/9.jpeg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/10.jpeg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/prize.png',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/11.jpeg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/12.jpeg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/13.jpeg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/6.jpeg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/7.jpeg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/8.jpeg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/2.jpg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../images/prize3.png',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                }
            ],
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
            lrgImg: {
                imgSrc: '',
                title: '',
                details: ''
            }
        }
    }

    handleClick = (e) => {
        console.log("this is working fine");
        e.preventDefault();



        if (this.state.imgStyle.imgListConStyle.display === 'flex') {
            console.log("Large Image title: " + this.state.lrgImg.title);

            this.setState({
                imgStyle: {
                    lrgImgConStyle: {
                        display: 'block'
                    },
                    imgListConStyle: {
                        display: 'none'
                    }
                },
            });

            Object.values(this.state.imgLst).forEach(element => {
                console.log(element.imgSrc);
                let sourceString = '..' + e.target.src.toString().slice(21);
                console.log(sourceString);



                if (element.imgSrc === sourceString) {
                    console.log("Source is matched");
                    console.log("Elelment title: " + element.title);


                    this.setState({
                        lrgImg: {
                            imgSrc: e.target.src,
                            title: element.title,
                            details: element.details
                        }
                    });
                } else {
                    console.log("Source didn't match");
                }
            });

        } else {
            console.log("Something went wrong");

        }
    }

    closeLargeImage = (e)=>{
        e.preventDefault();
        console.log("close button is working fine");
        this.setState({
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
        });
    }

    buttonStyle = {
        background: 'none',
        border: 'none'
    }



    render() {
        let imageItemList = this.state.imgLst.map(image => {
            return (
                <button onClick={this.handleClick} style={this.buttonStyle} key={image.imgSrc} ><Img src={image.imgSrc}></Img></button>
            );
        })



        return (
            <>
            <h2 className='text-center'>Our Gallery</h2>
            <React.Fragment >
                <div className="lg-img-con" style={this.state.imgStyle.lrgImgConStyle}>
                    <LargeImage closeButton={this.closeLargeImage} title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}></LargeImage>
                    {/* <LargeImage title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}  > <LargeImage/> */}
                </div>
                <div className="wrapper" style={this.state.imgStyle.imgListConStyle}>
                    {imageItemList}
                </div>
            </React.Fragment>
            <Footer />
            </>
        );
    }
}


export default Gallery;



