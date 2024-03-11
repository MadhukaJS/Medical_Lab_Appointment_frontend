import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Dashboard() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              id="mps-logo"
              src=""
              alt="Medi lab"
              draggable="false"
              height="30"
            />
           
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex align-items-center w-75 form-search">
              <div className="input-group">
                
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <a href="#!" className="text-white">
                <i className="fas fa-search ps-3"></i>
              </a>
            </form>

            <ul className="navbar-nav ms-3">
              {/* <li className="nav-item" style={{ width: "65px" }}> */}
                <a className="nav-link d-flex align-items-center" href="/login">
                  <button>Log In</button>
                </a>
                
                <a className="nav-link d-flex align-items-center" href="/registration">
                <button>Sign up</button>
                </a>
              {/* </li> */}
            </ul>
            
          </div>
        </div>
      </nav>
      {/* <!-- Navbar --> */}
      {/* ----------------- */}

      <Carousel>
        <div>
          <img
            src="https://www.mic-mainz.de/wp-content/uploads/2023/07/MIC_Webbanner_2000x700px.jpg"
            alt="Image 1"
          />
        </div>
        <div>
          <img
            src="https://www.mic-mainz.de/wp-content/uploads/2023/07/MIC_Web-Banner_Lab_140623_2000x700.jpg"
            alt="Image 1"
          />
        </div>
        <div>
          <img
            src="https://www.mic-mainz.de/wp-content/uploads/2023/07/MIC_Webbanner_2000x700px.jpg"
            alt="Image 1"
          />
        </div>

      </Carousel>

        <div>
          <center>
        <h3>EXPLORE ADVERTISEMENTS</h3>
        </center>
        </div>

      <div className="d-flex flex-wrap justify-content-center align-items-center p-4">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/white-sport-sedan-with-colorful-tuning-road_114579-5044.jpg?w=996&t=st=1698294435~exp=1698295035~hmac=818ff762e044fd8dd9b9a237c615c6cdb90f3e201732838e08524094457d5d5e"
              alt="Image 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">car test1</h5>
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in ullam iusto! Itaque sequi repudiandae impedit. Libero ipsum architecto voluptate quibusdam dolore reprehenderit voluptates molestiae sapiente, quod non temporibus esse..</p>
              <a href="/Addbookings" className="btn">
              Book a time for view
              </a>
            </div>
          </div>
        </div>



    

        {/* Footer */}
        <footer className="sticky-footer ">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>MPS motor Traders &copy;2023</span>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  )
}
