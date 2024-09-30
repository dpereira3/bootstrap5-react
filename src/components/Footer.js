import React from 'react'
import { NavLink, Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="mt-5 container-fluid bg-primary bg-gradient text-white" style={{ minHeight: '12rem'}}>
            <div className="row pt-4 text-center">
                {/* Create 3 section each of 4 cols for lg an md devide but for small device create 12 */}
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <h5>Quick Links</h5>
                    <div className="d-flex flex-column mb-2">
                        <NavLink to="/about" className="text-white p-1">About us</NavLink>
                        <NavLink to="/posts" className="text-white p-1">Our Post</NavLink>
                        <NavLink to="#" className="text-white p-1">Our Team</NavLink>
                        <NavLink to="/contact" className="text-white p-1">Contact us</NavLink>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
                    <h5>Newsletter</h5>
                    <div style={{ minHeight: "8rem"}} className="d-flex flex-column justify-content-around">
                        <input type="text" className="form-control" placeholder="Subscribe to the newsletter" />
                        <button className="btn btn-primary">Subscribe</button>

                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <h5>Contact Adress</h5>
                    <div className="d-flex flex-column">
                        <p><i className="px-1 fa-solid fa-location-arrow"></i>26 Huston Street</p>
                        <p>Newton City</p>
                        <p>Random State - 12345</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
