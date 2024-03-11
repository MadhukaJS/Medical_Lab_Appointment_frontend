import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 

export default function Dashboard() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#00264d'}}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              id="medilab-logo"
              src=""
              alt="Medi lab"
              draggable="false"
              height="30"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0 mx-auto">
              
            </form>


            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login">Log In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/registration">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}

      {/* Carousel */}
      <Carousel showThumbs={false}>
        <div>
          <img src="https://www.mic-mainz.de/wp-content/uploads/2023/07/MIC_Webbanner_2000x700px.jpg" alt="Image 1" />
          <p className="legend">Welcome to Medilab! We are a state-of-the-art laboratory dedicated to providing accurate and reliable testing services. Our team of experienced professionals utilizes cutting-edge technology to deliver precise results for various industries and applications.</p>
        </div>
        <div>
          <img src="https://www.mic-mainz.de/wp-content/uploads/2023/07/MIC_Web-Banner_Lab_140623_2000x700.jpg" alt="Image 2" />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img src="https://www.mic-mainz.de/wp-content/uploads/2023/07/MIC_Webbanner_2000x700px.jpg" alt="Image 3" />
          <p className="legend">Image 3</p>
        </div>
      </Carousel>

      {/* Explore Advertisements */}
      <div className="text-center mt-4">
        <h3>Make your apointment</h3>
      </div>

      {/* Card Grid */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/350" className="card-img-top" alt="Car Image" />
            <div className="card-body">
              <h5 className="card-title">Car Test 1</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              {/* <a href="/Addbookings" className="btn btn-primary">Book a time for view</a> */}
            </div>
          </div>
        </div>
        {/* Add more cards here */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.southcoasthealth.com/assets/upload/a7c59a87-117c-407f-8c47-2718ff76baa4/doctor-testing-blood-sugar-for-diabetes.jpg" className="card-img-top" alt="Car Image" />
            <div className="card-body">
              <h5 className="card-title">Car Test 1</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              {/* <a href="/Addbookings" className="btn btn-primary">Book a time for view</a> */}
            </div>
          </div>
        </div>
        
      </div>

      {/* Footer */}
      <footer className="sticky-footer bg-dark text-white py-3" >
        <div className="container text-center" style={{backgroundColor: '#00264d'}}>
          <span>Medi lab Medical laboratary &copy; 2023</span>
        </div>
      </footer>
    </div>
  );
}
